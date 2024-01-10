
import Root, { directory, file } from '../data';
import { getTail, getNoTail } from '../functions/utils';

export default class clsMatsh {
  private cstrUsers: string = "Users";
  private cstrHome: string = "mattsunkun";

  dirsCurrent: directory[];
  constructor(public _dirRoot: directory) {
    this.dirsCurrent = this.dirsHome;

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

    let agents = strsDir[0] !== "/" ? JSON.parse(JSON.stringify(this.dirsCurrent)) : this.dirsRoot;
    for (let i = 0; i < strsDir.length; i++) {
      switch (strsDir[i]) {
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
    if (this.dirsCurrent === this.dirsRoot) {
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
      if (this.dirsCurrent === this.dirsHome) {
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

    return ans
  }

  private notDirOrFile(strCommand: string, strsPath: string[], isWantFile: boolean): string {
    const strPath: string = strsPath.join('/');
    return `${strCommand}: NOT a ${isWantFile ? "file" : "directory"}: ${strsPath.join('/')}`
  }

  public cat(strsFile: string[]): string {
    const ans = getTail(this.getDirs(strsFile.slice(0, strsFile.length - 1)))?.files.find(file => file.name === getTail(strsFile))?.contents;
    return (ans === undefined) ? this.notDirOrFile("cat", strsFile, true) : ans;
  }

  public cd() {

  }

  public ls(strsPath: string[]): string {
    const ans = this.getCandidates(getTail(this.getDirs(strsPath.slice(0, strsPath.length - 1))), "", true)[1];
    return (ans === undefined) ? this.notDirOrFile("ls", strsPath, false) : ans.join(' ');
  }

  public which() {

  }

  // 引数が""のときは，
  private getCandidates(dirNow: directory, strPart: string, isFilable: boolean): [boolean, string[]] {
    // 0がfalsyだから，比較演算子を使う．
    if (strPart === "") {
      strPart = "[^.]";
    }
    const regexPart = new RegExp(`^${strPart}.*`);
    const dirNames: string[] = dirNow.directories
      .filter(dir => regexPart.test(dir.name))
      .map(dir => dir.name);
    const fileNames: string[] = dirNow.files
      .filter(file => regexPart.test(file.name))
      .map(file => file.name)
    // console.log(dirNames)
    const includesFile: boolean = isFilable && (fileNames.length !== 0);
    return [includesFile,
      [...dirNames, ...includesFile ? fileNames : []]
    ]

  }

  // 最後が""の時は，全部候補を投げるよ．
  public tabDirComplement(strsRelDir: string[], isFilable: boolean): [boolean, string[]] {
    // console.log(this.getDirs(strsRelDir), strsRelDir.length)
    let a = this.getCandidates(
      getTail(this.getDirs(getNoTail(strsRelDir))),
      getTail(strsRelDir),
      isFilable
    );
    let b = getTail(this.getDirs(getNoTail(strsRelDir)))
    // console.log(b)
    // console.log(a)
    // console.log(getTail(strsRelDir))
    // console.log(strsRelDir)
    return a;
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