import { getTail } from "./utils";


export default class clsParse {
  public numTokens: number;
  public strCommand: string;
  public strsOption: string[];
  public strsPath: string[];
  public numPathDepth: number;
  public get strPathEd(): string { return this.strsPath[this.numPathDepth - 1] }
  public isOptionError: boolean;

  constructor(public strRawCommand: string) {
    const strsToken: string[] = strRawCommand.split(/\s+/);
    this.numTokens = strsToken.length;
    // command
    this.strCommand = strsToken[0];

    // option
    this.strsOption = [];
    this.isOptionError = false;
    for (let i = 1; i < this.numTokens; i++) {
      if ((/^\-.+/).test(strsToken[i])) {
        this.strsOption = this.strsOption.concat(
          ...strsToken[i].replace(/^-/, '').split('')
        )
      } else {
        if (i !== this.numTokens - 1) this.isOptionError = true;
      }
    }

    // path
    const strPathable = getTail(strsToken);


    if ((this.numTokens === 1) || (/^\-.+/).test(strPathable)) {
      // トークンが一つor最後がoptionならば，空文字とする．
      this.strsPath = [];
    } else {
      this.strsPath = strPathable.split(/\/+/);

      // ルートの場合はinsert
      if (strPathable[0] === "/") {
        this.strsPath = ["/", ...this.strsPath];
      }
      // スラッシュがあるかどうかは重要である．
      if (getTail(strPathable.split('')) === "/") {
        this.strsPath = [...this.strsPath, "/"];
      }
    }

    this.numPathDepth = this.strsPath.length;


  }
}
