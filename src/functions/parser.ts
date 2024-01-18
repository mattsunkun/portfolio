import { getTail } from "./utils";

export enum eToken {
  command = "COMMAND",
  shortOptions = "SHORT_OPTIONS",
  longOption = "LONG_OPTION",
  arguments = "ARGUMENTS",
  separator = "SEPARATOR",
};

export default class clsParser {
  public tokens: eToken[];
  public command: string;
  public options: string[];
  public arguments: string[];
  public cursorIndex: number;

  // nowCursorは点滅している場所
  constructor(public strRawCommand: string, nowCursor: number) {
    const regexStartSpace = /^\s+/g;
    const regexSpace = /\s+/g;
    const strsToken: string[] = strRawCommand
      .replace(regexStartSpace, "") // 最初の空白を消す．
      .split(regexSpace);

    // command
    this.command = strsToken[0];
    this.tokens = [eToken.command];

    this.options = [];
    this.arguments = [];

    // 2個目の引数から
    for (let i = 1; i < strsToken.length; i++) {
      this.tokens.push(eToken.separator);
      if (strsToken[i].startsWith("--")) {
        // long option
        this.options.push(strsToken[i].slice(2));
        this.tokens.push(eToken.longOption)
      } else if (strsToken[i].startsWith("-")) {
        // short options
        for (const opt of strsToken[i].slice(1)) {
          this.options.push(opt);
        }
        this.tokens.push(eToken.shortOptions);
      } else {
        // arguments
        this.arguments.push(strsToken[i]);
        this.tokens.push(eToken.arguments);
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
