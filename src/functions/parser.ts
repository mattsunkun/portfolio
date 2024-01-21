import { getTail } from "./utils";

export enum eToken {
  command = "COMMAND",
  startShort = "START_SHORT",
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

// ここでTokenは空白を指さないとする．
export default class clsParser {
  public tokens: tToken[];
  public parseError?: eParseError;

  constructor(strRawTarget: string) {

    const strTarget: string = ` ${strRawTarget}  `;

    this.tokens = [];

    let indToken: number = 0;
    let lookingToken: eToken = eToken.command;
    let strTokenDebris: string = "";
    let isTokening: boolean = false;
    for (let i = 0; i < strTarget.length; i++) {
      const ele = strTarget.charAt(i);
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

            this.tokens.push({
              str: ele,
              type: lookingToken,
            });
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
