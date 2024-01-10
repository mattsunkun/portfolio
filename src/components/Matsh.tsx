
import React, { useState, useEffect, useRef } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import Root, { directory, file } from '../data';
import { homedir } from 'os';

const getTail = <T,>(arr: T[]): T => {
  // return (arr.length !== 0) ?
  //   arr[arr.length - 1] :
  //   undefined;
  return arr[arr.length - 1];
};
class clsParse {
  public numTokens: number;
  public strCommand: string;
  public strsOption: string[];
  public strsPath: string[];
  public numPathDepth: number;
  public get strPathEd(): string { return this.strsPath[this.numPathDepth - 1] }
  public isOptionError: boolean;

  constructor(strRawCommand: string) {
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
    const strPathable = strsToken[this.numTokens - 1];


    if ((this.numTokens === 1) || (/^\-.+/).test(strPathable)) {
      // トークンが一つor最後がoptionならば，空文字とする．
      this.strsPath = [];
    } else {
      this.strsPath = strPathable.split(/\/+/);
    }

    this.numPathDepth = this.strsPath.length;


  }
}


class clsMatsh {
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
    const dirUsers = this.getNextDir(this._dirRoot, this.cstrUsers);
    const dirHome = dirUsers ? this.getNextDir(dirUsers, this.cstrHome) : null;
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

  getDirs(strsDir: string[]): directory[] {
    let agents = strsDir[0] ? this.dirsCurrent : this.dirsRoot;

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
          break;
      }
      const dirNew = this.getNextDir(getTail(agents), strsDir[i]);
      if (dirNew) {
        agents.push(dirNew);
      } else {
        // 早期リターン
        return []

      }
    }
    return agents;
  }


  private getNextDir(nowDir: directory, nextDirName: string): directory | undefined {
    return nowDir.directories.find(directory => (directory.name === nextDirName));
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

  private noDir(strCommand: string, strsPath: string[], isWantFile: boolean): string {
    const strPath: string = strsPath.join('/');
    return `${strCommand}: NOT a ${isWantFile ? "file" : "directory"}: ${strsPath.join('/')}`
  }

  public cat(strsFile: string[]): string {
    const ans = getTail(this.getDirs(strsFile.slice(0, strsFile.length - 1)))?.files.find(file => file.name === getTail(strsFile))?.contents;

    return (ans === undefined) ? this.noDir("cat", strsFile, true) : ans;
  }

  public cd() {

  }

  // public ls(str): directory {
  //   return this.dirsCurrent[-1].files.map(val => val.name);
  // }

  public which() {

  }

  // 引数が""のときは，
  private getCandidates(dirNow: directory, strPart: string, isFilable: boolean): string[] {
    // 0がfalsyだから，比較演算子を使う．
    if (strPart === "") {
      strPart = "[^.]";
    }
    const regexPart = new RegExp(`^${strPart}.*`);
    return [
      ...dirNow.directories
        .filter(dir => regexPart.test(dir.name))
        .map(dir => dir.name),
      ...isFilable ?
        dirNow.files
          .filter(file => regexPart.test(file.name))
          .map(file => file.name) :
        []
    ]

  }

  // 最後が""の時は，全部候補を投げるよ．
  public tabDirComplement(strsRelDir: string[], isFilable: boolean): string[] {
    let dirsVirtual: directory[] = JSON.parse(JSON.stringify(this.dirsCurrent));
    const numLen = strsRelDir.length
    if (strsRelDir[0] === "") {
      strsRelDir[0] = '/';
    }
    for (let i = 0; i < numLen; i++) {
      switch (strsRelDir[i]) {
        case "/": {
          if (i === 0) {
            // ルートに移動．
            dirsVirtual = this.dirsRoot;
          } else {
            // none`
          }
        }

          break;

        case "..":
          this.parentify(dirsVirtual);
          break;

        case ".":
          break;

        default:
          {

            if (i !== numLen - 1) {

              const dirNew = this.getNextDir(getTail(dirsVirtual), strsRelDir[i]);
              if (dirNew) {
                dirsVirtual.push(dirNew);
              } else {
                // 早期リターン
                return [];
              }
            } else {
              return this.getCandidates(getTail(dirsVirtual), strsRelDir[i], isFilable);
            }
          }
          break;

      }
    }

    return [];
  }

  // /binから検索しているだけです．
  public tabExeComplement(strExe: string): string[] {
    return this.getCandidates(
      this._dirRoot.directories
        .filter(dir => dir.name === "bin")[0],
      strExe,
      true);
  }



}

const Matsh = () => {

  const matsh = new clsMatsh(Root);

  const typographyRef = useRef<HTMLDivElement | null>(null);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [history, setHistory] = useState<string[]>([]);
  const [histRef, setHistoryRef] = useState<number>(0);
  const [outputs, setOutputs] = useState<string>("");
  const [inputCommand, setInputCommand] = useState<string>("");
  const [complements, setComplements] = useState<string>("");

  useEffect(() => {
    // Enterが押されたときにTypographyを一番下までスクロールする
    if (typographyRef.current) {
      typographyRef.current.scrollTop = typographyRef.current.scrollHeight;
    }
  }, [outputs]); // outputsが変更されたときだけ実行

  useEffect(() => {
    // ページがロードされたときにTextFieldにフォーカスを当てる
    textFieldRef.current?.focus();
  }, []);// 第二引数が空の場合、コンポーネントがマウントされたときだけuseEffectが実行されます


  return (
    <>
      <Paper
      >
        <Box
          padding={3}
        >

          {/* 出力 */}
          <Typography
            paddingX={2}
            marginY={3}
            sx={{
              overflow: 'auto',
              overflowY: 'scroll',
              minHeight: "60vh",
              maxHeight: '60vh', // Set a maximum height to enable scrolling        
            }}
            ref={typographyRef}
          >
            {outputs.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>

          {/* 入力 */}
          <TextField fullWidth label="" id="fullWidth"
            inputRef={textFieldRef}
            value={inputCommand}
            onChange={(event) => setInputCommand(event.target.value)}
            onKeyDown={(event) => {

              /// 長すぎるコマンドは解釈できない
              /// 全角空白はなんか特殊文字使いたい


              const parse = new clsParse(inputCommand);
              console.log(parse)
              switch (event.key) {
                case "Enter": {
                  const historyWithPrompt = `${outputs}\n${matsh.pwd(true)}$ ${inputCommand}`;
                  setHistory([...history, inputCommand]);
                  setHistoryRef(0);
                  // 出力
                  switch (parse.strCommand) {
                    case "pwd":
                      setOutputs(`${historyWithPrompt}\n${matsh.pwd(false)}`)
                      break;
                    case "cat":
                      setOutputs(`${historyWithPrompt}\n${matsh.cat(parse.strsPath)}`)
                      break;
                    case "cd":
                      break;
                    case "ls":
                      break;
                    case "which":
                      break;

                    default:
                      setOutputs(`${historyWithPrompt}\nmatsh: command not found: ${parse.strCommand}`);
                      break;
                  }

                  // コマンドをクリアする．
                  setInputCommand("");
                }
                  break;
                case "Tab": {
                  event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル

                  if (parse.numTokens === 1) {
                    const strsExeComp = matsh.tabExeComplement(parse.strCommand);
                    switch (strsExeComp.length) {
                      case 0:
                        setComplements("couldnt anticipate command");
                        break;
                      case 1:
                        setInputCommand(`${strsExeComp[0]} `)
                        break;
                      default:
                        setComplements(strsExeComp.join(' '));
                        break;
                    }
                  } else {
                    const strsDirComp = matsh.tabDirComplement(
                      parse.strsPath,
                      (/^(pwd|cd|ls|which)$/).test(parse.strCommand) === false,
                    );
                    switch (strsDirComp.length) {
                      case 0:
                        setComplements("couldnt anticipate directory or file");
                        break;
                      case 1:
                        setInputCommand(`${inputCommand.replace(new RegExp(`${parse.strPathEd}$`), `${strsDirComp[0]}`)}`);
                        break;
                      default:
                        setComplements(strsDirComp.join(' '));
                        break;

                    }
                  }


                }
                  break;
                case "ArrowUp": {
                  setHistoryRef(Math.min(histRef + 1, history.length - 1));
                  setInputCommand(history[history.length - histRef - 1])
                }
                  break;
                case "ArrowDown": {
                  setHistoryRef(Math.max(histRef - 1, 0));
                  setInputCommand(history[history.length - histRef - 1])
                }
                  break;
                default:
                  setComplements("");
                  break;

              }
            }}
            placeholder="command here"
            InputProps={{
              startAdornment: <InputAdornment position="start">{matsh.pwd(true)}$</InputAdornment>,
              autoComplete: "off", // 候補を見せないようにする．
            }}
          />
          {/* 補完 */}
          <Typography
            paddingX={2}
            marginY={3}
            ref={typographyRef}
          >
            {complements}
          </Typography>
        </Box>

      </Paper>

    </>
  );
};

export default Matsh;