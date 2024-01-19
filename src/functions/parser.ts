import { getTail } from "./utils";

export enum eToken {
  command = "COMMAND",
  shortOptions = "SHORT_OPTIONS",
  longOption = "LONG_OPTION",
  arguments = "ARGUMENTS",
  // separator = "SEPARATOR",
  onGoingArg = "ONGOINGARG", // commandはongoingにならない．
};


export type tToken = {
  str: string,
  type: eToken,
}

export default class clsParser {
  public strsToken: string[];
  public tokens: eToken[];
  public command: string;
  public options: string[];
  public arguments: string[];
  public cursorIndex: number;

  // nowCursorは点滅している場所
  constructor(public strRawCommand: string, nowCursor: number) {

    const regexStartSpaces = /^\s+/g;
    const regexSpace = /\s+/g;
    const strTokens: string = ` ${strRawCommand} `;//strRawCommand.replace(regexStartSpaces, "");


    this.strsToken = [];
    this.tokens = [];
    this.options = [];
    this.arguments = [];

    let indToken: number = 0;
    let lookingToken: eToken = eToken.command;
    let strTokenDebris: string = "";
    let isSearchingStart: boolean = true;
    for (let i = 0; i < strTokens.length; i++) {
      const ele = strTokens.charAt(i);
      switch (lookingToken) {
        case eToken.command:

          switch (ele) {
            case " ":
              if (isSearchingStart) {

              } else {



                this.strsToken.push(strTokenDebris);
                this.tokens.push(lookingToken);
                strTokenDebris = "";
                indToken++;
                if (i === nowCursor) this.cursorIndex = indToken;
                isSearchingStart = true;

                this.command = getTail(this.strsToken);
                lookingToken = eToken.arguments;

              }
              break;
            default:
              isSearchingStart = false;
              strTokenDebris += ele;
              break;
          }
          break;
        case eToken.arguments:
        case " ":
          if (isSearchingStart) {

          } else {

          }
      }
    }





    this.command = strsToken[0];

    // ""の時は，ongoning
    this.tokens = [eToken.command];
    this.strsToken = [this.command];

    this.options = [];
    this.arguments = [];

    // 2個目の引数から
    for (let i = 1; i < strsToken.length; i++) {
      // this.tokens.push(eToken.separator);
      // this.strsToken.push(" ");
      if (strsToken[i].startsWith("--")) {
        // long option
        const option = strsToken[i].slice(2)
        this.options.push(option);
        this.tokens.push(eToken.longOption)
        this.strsToken.push(option);
      } else if (strsToken[i].startsWith("-")) {
        // short options
        const options = strsToken[i].slice(1)
        for (const opt of options) {
          this.options.push(opt);
          this.tokens.push(eToken.shortOptions);
          this.strsToken.push(opt);
        }
        // this.tokens.push(eToken.shortOptions);
        // this.strsToken.push(options);

      } else if (strsToken[i] === "") {

        // on going
        // this.arguments.push(strsToken[i]);
        // this.tokens.push(eToken.onGoing);

        // this.argumentsに代入はしない．ongoingだから．
        this.tokens.push(eToken.onGoingArg);
        this.strsToken.push(strsToken[i]);
      } else {
        // arguments
        this.arguments.push(strsToken[i]);
        this.tokens.push(eToken.arguments);
        this.strsToken.push(strsToken[i]);
      }
    }

    // cursorIndex
    const numSpace = (strRawCommand
      .substring(0, nowCursor)
      .replace(regexStartSpace, "")
      .match(regexSpace)
      ?.length) ?? 0;

    if (strRawCommand.charAt(nowCursor) === " ") {
      if (strRawCommand.charAt(nowCursor - 1) === " ") {
        this.cursorIndex = 2 * numSpace - 1;
      } else {
        this.cursorIndex = 2 * numSpace;
      }
    } else {
      this.cursorIndex = 2 * numSpace;
    }


  }
}
