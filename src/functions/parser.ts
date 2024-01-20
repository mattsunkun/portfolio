import { getTail } from "./utils";

export enum eToken {
  command = "COMMAND",
  shortOptions = "SHORT_OPTIONS",
  arguments = "ARGUMENTS",
};


export type tToken = {
  str: string,
  type: eToken,
}

export enum eParseError {
  optionError = "OPTIONERROR",
}

export type tCompliment = {
  left: string,
  leftEdge: string,
  middle: string,
  right: string,
  isNoCompliment: boolean,
}

// ここでTokenは空白を指さないとする．
export default class clsParser {
  public tokens: tToken[];
  public cursorTokenIndex: number;
  public parseError?: eParseError;
  public compliment: tCompliment;

  public isSla?: boolean;

  // nowCursorは点滅している場所
  constructor(strRawTarget: string, nowCursor: number) {

    nowCursor++;
    const strTarget: string = ` ${strRawTarget}  `;

    this.tokens = [];
    this.cursorTokenIndex = -1;
    this.compliment = {
      left: "",
      leftEdge: "",
      middle: "",
      right: "",
      isNoCompliment: false,
    };

    let indToken: number = 0;
    let lookingToken: eToken = eToken.command;
    let strTokenDebris: string = "";
    let isTokening: boolean = false;
    for (let i = 0; i < strTarget.length; i++) {
      const ele = strTarget.charAt(i);

      if (
        i !== 0
        && i !== strTarget.length - 1
        /// true
      ) {

        if (i < nowCursor) {
          this.compliment.left += ele;
        } else if (i === nowCursor) {
          if (ele === " " &&
            (this.compliment.left.charAt(i - 1) !== " ")
          ) {

            this.cursorTokenIndex = indToken;

            // this.compliment.left = this.compliment.left.replace(/\s*$/, "");
            // console.log("parsing")
            // console.table(this.compliment)
            if (getTail(this.compliment.left.split(" ")).includes("/")) {
              this.isSla = true;
              this.compliment.leftEdge = getTail(this.compliment.left.split(" ")).split("/").slice(0, -1).join("/") + "";
            }

            this.compliment.middle = this.compliment.left.replace(/^.*[\s\/$]/, "");

            this.compliment.left = this.compliment.left.replace(/[\s\/][^\s\/]*$/, "");
            if (this.isSla) {

              this.compliment.left += "/";
            }
          } else {
            this.compliment.isNoCompliment = true;
          }
        } else {
          this.compliment.right += ele;
        }
      }

      switch (ele) {
        case " ":
          if (isTokening) {
            if (strTokenDebris !== "") {
              this.tokens.push({
                str: strTokenDebris,
                type: lookingToken,
              });
              indToken += 1;

            }


            strTokenDebris = "";
            lookingToken = eToken.arguments;
            isTokening = false;
          }
          break;

        case "-":
          if (isTokening) {
            this.parseError = eParseError.optionError;
            return;
          } else {
            isTokening = true;
            lookingToken = eToken.shortOptions;
          }
          break;

        default:
          isTokening = true;
          switch (lookingToken) {
            case eToken.shortOptions:
              this.tokens.push({
                str: ele,
                type: lookingToken,
              });
              indToken += 1;
              break;
            default:
              strTokenDebris += ele;
              break;
          }
          break;
      }
    }
    if (
      (
        strRawTarget.charAt(nowCursor - 1) === " " ||
        strRawTarget.charAt(nowCursor - 1) === ""
      )
      &&
      (
        strRawTarget.charAt(nowCursor) === " " ||
        strRawTarget.charAt(nowCursor) === ""
      )
    ) {

      this.cursorTokenIndex = -1;
      // this.tokens = [
      //   ...this.tokens.slice(0, this.cursorTokenIndex),
      //   {
      //     str: "",
      //     type: eToken.arguments,
      //   },
      //   ...this.tokens.slice(this.cursorTokenIndex),
      // ];
    }

  }

  public get tokenNow(): tToken {
    return (this.cursorTokenIndex === -1) ?
      { str: "", type: eToken.arguments } :
      this.tokens[this.cursorTokenIndex];
  }

  public get command(): string {
    return (this.tokens.find(token =>
      token.type === eToken.command)
      ?.str) || "";
  }

  public set command(str: string) {
    const command = (this.tokens.find(token =>
      token.type === eToken.command))
    if (command) {
      command.str = str;
    }
  }

  public get options(): string[] {
    return (this.tokens.filter(token =>
      token.type === eToken.shortOptions)
      .map(token => token.str));
  }

  public get arguments(): string[] {
    return (this.tokens.filter(token =>
      (token.type === eToken.arguments) &&
      (token.str !== "") // tabの空文字は判定しない．
    )
      .map(token => token.str));
  }
}
