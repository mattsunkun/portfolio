import { getTail } from "./utils";

export enum eToken {
  command = "COMMAND",
  shortOptions = "SHORT_OPTIONS",
  // longOption = "LONG_OPTION",
  arguments = "ARGUMENTS",
  // separator = "SEPARATOR",
  // onGoingArg = "ONGOINGARG", // commandはongoingにならない．
};


export type tToken = {
  str: string,
  type: eToken,
}

export enum eParseError {
  optionError = "OPTIONERROR",
}

// ここでTokenは空白を指さない．
export default class clsParser {
  public tokens: tToken[];
  public cursorTokenIndex: number;
  public parseError?: eParseError;

  // nowCursorは点滅している場所
  constructor(strRawTarget: string, nowCursor: number) {

    nowCursor++;
    const strTarget: string = ` ${strRawTarget} `;

    this.tokens = [];
    this.cursorTokenIndex = -1;

    let indToken: number = 0;
    let lookingToken: eToken = eToken.command;
    let strTokenDebris: string = "";
    let isTokening: boolean = false;
    for (let i = 0; i < strTarget.length; i++) {
      const ele = strTarget.charAt(i);
      if (i === nowCursor) this.cursorTokenIndex = indToken;

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


    // console.log("wer")
    // console.log(strRawTarget)
    // console.log(strRawTarget.charAt(-1) === "", strRawTarget.charAt(nowCursor - 1) === " ")
    // console.log("asdf")
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
      console.log("asfd")
      this.tokens = [
        ...this.tokens.slice(0, this.cursorTokenIndex),
        {
          str: "",
          type: eToken.arguments,
        },
        ...this.tokens.slice(this.cursorTokenIndex),
      ];
    }

  }

  public get tokenNow(): tToken {
    return this.tokens[this.cursorTokenIndex];
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
      (token.str !== "") // tabのからもじは判定しない．
    )
      .map(token => token.str));
  }
}
