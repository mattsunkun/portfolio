
import { escape } from 'querystring';
import Root, { directory, file } from '../data/Root';
import { getTail, getNoTail, isSame, escapeRegExp } from '../functions/utils';

export default class clsMatsh {
  private cstrUsers: string = "Users";
  private cstrHome: string = "mattsunkun";

  _dirsCurrent: directory[];
  constructor(public _dirRoot: directory) {
    this._dirsCurrent = this.dirsHome;

  }

  private set dirsCurrent(dirsNew: directory[]) {
    this._dirsCurrent = dirsNew;
  }

  public get dirsCurrent(): directory[] {
    return this._dirsCurrent;
  }

  // root
  get dirsRoot(): directory[] {
    return [this._dirRoot];
  }

  // home
  get dirsHome(): directory[] {
    const dirUsers = this.getChildDir(this._dirRoot, this.cstrUsers);
    const dirHome = dirUsers ? this.getChildDir(dirUsers, this.cstrHome) : null;
    if (dirUsers && dirHome) {
      return [this._dirRoot, dirUsers, dirHome];
    } else {
      // 実行されないはず．
      console.error("Home Directory Is Not PROPER", dirUsers, dirHome);
      return [];
    }
  }

  // parent
  private parentify(dirsMe: directory[]) {
    if (dirsMe.length === 1) {
      // 現在がrootのとき
      dirsMe = this.dirsRoot;

    } else {
      // 通常時
      dirsMe.pop();
      // dirsMe.slice(0, -1); // これは元の配列を変えない．
    }
  }


  // child
  private getChildDir(nowDir: directory, nextDirName: string): directory | undefined {
    return nowDir.directories.find(directory => (directory.name === nextDirName));
  }

  /// string[] -> directory[]
  /// 絶対でなければ，current起点とする．
  private getDirs(strsDir: string[]): directory[] {

    let agents;// = strsDir[0] !== "/" ? JSON.parse(JSON.stringify(this.dirsCurrent)) : this.dirsRoot;
    switch (strsDir[0]) {
      case "/":
        agents = this.dirsRoot;
        break;
      case "~":
        agents = this.dirsHome;
        break;
      default:
        agents = JSON.parse(JSON.stringify(this.dirsCurrent));
        break;
    }
    for (let i = 0; i < strsDir.length; i++) {
      switch (strsDir[i]) {
        case "/":
          break;
        case "":
          break;
        case ".":
          break;
        case "..":
          this.parentify(agents);
          break;
        default:

          const dirNew = this.getChildDir(getTail(agents), strsDir[i]);
          if (dirNew) {
            agents.push(dirNew);
          } else {
            // 早期リターン
            return []

          }
          break;
      }
    }
    return agents;
  }




  public pwd(isTilde: boolean): string {
    let ans = "";
    if (isSame(this.dirsCurrent, this.dirsRoot)) {
      ans = "/";
    } else {
      this.dirsCurrent.forEach((dir, ind) => {
        // root以外は見る．
        if (ind !== 0) {
          ans += `/${dir.name}`;
        }
      })
    }
    if (isTilde) {
      if (isSame(this.dirsCurrent, this.dirsHome)) {
        ans = "~";
      } else {

        const strAbsHome: string = `/${this.cstrUsers}/${this.cstrHome}`;
        const regexHome: RegExp = new RegExp(`^${strAbsHome}`);
        const regexHomeChild: RegExp = new RegExp(`^${strAbsHome}.*`);
        if (regexHomeChild.test(ans)) {
          ans = ans.replace(regexHome, "~");
        }
      }
    }

    return `\n${ans}`
  }

  private notDirOrFile(strCommand: string, strsPath: string[], isWantFile: boolean): string {
    const strPath: string = strsPath.join('/');
    return `\n${strCommand}: NOT a ${isWantFile ? "file" : "directory"}: ${strsPath.join('/')}`
  }

  public cat(strsFile: string[]): string {
    const ans = getTail(this.getDirs(strsFile.slice(0, strsFile.length - 1)))?.files.find(file => file.name === getTail(strsFile))?.contents;
    return (ans === undefined) ? this.notDirOrFile("cat", strsFile, true) : `\n${ans}`;
  }

  public cd(strsPath: string[]): string {
    // [""], ['']の違いがあるかも
    if (isSame(strsPath, []) || isSame(strsPath, [""])) {
      // ~に移動する．
      strsPath = ["/", this.cstrUsers, this.cstrHome];
    }
    const dirsNew = this.getDirs(strsPath);
    if (isSame(dirsNew, [])) {
      return this.notDirOrFile("cd", strsPath, false);

    } else {

      this.dirsCurrent = dirsNew;
      return "";
    }
  }

  public ls(strsPath: string[]): string {
    // 末尾を/にする
    if (getTail(strsPath) !== "/") {
      strsPath = [...strsPath, "/"];
    }
    const ans = this.getCandidates(getTail(this.getDirs(strsPath.slice(0, strsPath.length - 1))), "", true)[1];
    return (ans === undefined) ? this.notDirOrFile("ls", strsPath, false) : `\n${ans.join(' ')}`;
  }

  public which(strCommand: string): string {
    const isBin = this.getCandidates(
      this._dirRoot.directories
        .filter(dir => dir.name === "bin")[0],
      "",
      true)[1]
      .includes(strCommand);

    if (isBin) {
      return `\n/bin/${strCommand}`;
    } else {
      return `\n${strCommand}not found`;
    }
  }

  // 引数が""のときは，
  private getCandidates(dirNow: directory, strPart: string, isFilable: boolean): [boolean, string[]] {
    // 0がfalsyだから，比較演算子を使う．
    strPart = escapeRegExp(strPart);
    if (strPart === "/") {
      strPart = "[^.]";
    }
    const regexPart = new RegExp(`^${strPart}.*`);
    const dirNames: string[] = dirNow.directories
      .filter(dir => regexPart.test(dir.name))
      .map(dir => dir.name);
    const fileNames: string[] = dirNow.files
      .filter(file => regexPart.test(file.name))
      .map(file => file.name)
    const includesFile: boolean = isFilable && (fileNames.length !== 0);

    // console.log(strPart)
    // console.table(dirNames)
    return [includesFile,
      [...dirNames, ...includesFile ? fileNames : []]
    ]

  }

  // 最後が""の時は，全部候補を投げるよ．
  public tabDirComplement(strsRelDir: string[], isFilable: boolean): [boolean, string[]] {
    return this.getCandidates(
      getTail(this.getDirs(getNoTail(strsRelDir))),
      getTail(strsRelDir),
      isFilable
    );
  }

  // /binから検索しているだけです．
  public tabExeComplement(strExe: string): string[] {
    return this.getCandidates(
      this._dirRoot.directories
        .filter(dir => dir.name === "bin")[0],
      strExe,
      true)[1];
  }



}