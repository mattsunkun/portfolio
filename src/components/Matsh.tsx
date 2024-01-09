
import React, { useState, useEffect, useRef } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import Root, { directory, file } from '../data';
import { homedir } from 'os';

class clsMatsh {
  private cstrUsers: string = "Users";
  private cstrHome: string = "mattsunkun";

  dirsCurrent: directory[];
  constructor(public _dirRoot: directory) {
    this.dirsCurrent = this.dirsHome;
    console.log(this.dirsCurrent);
    // console.log(_dirRoot);

  }

  // root
  get dirsRoot(): directory[] {
    return [this._dirRoot];
  }

  // home
  get dirsHome(): directory[] {
    const dirUsers = this.getNextDir(this._dirRoot, this.cstrUsers);
    const dirHome = dirUsers ? this.getNextDir(dirUsers, this.cstrHome) : null;
    // console.warn(dirUsers, dirHome)
    if (dirUsers && dirHome) {
      return [this._dirRoot, dirUsers, dirHome];
    } else {
      // 実行されないはず．
      return [];
    }
  }

  // parent
  get dirsParent(): directory[] {
    if (this.dirsCurrent.length === 1) {
      // 現在がrootのとき
      return this.dirsRoot;
    } else {
      // 通常時
      return this.dirsCurrent.slice(0, -1);
    }
  }



  // public setByAbsStrs(strsNewDir: string[]): boolean {
  //   // エラーが起きたとき用に，最初を記録する．
  //   const dirBackUp = this.dirCurrent;
  //   // 最初にルートにする．
  //   this.dirCurrent = this.root;
  //   // 順番に絶対パスを辿る．
  //   strsNewDir.forEach(strNextDir => {
  //     // 次のパスを検索する．
  //     const dirNext = this.getNextDir(this.dirCurrent, strNextDir);
  //     if (dirNext) {
  //       /// 次のDirを発見した．
  //       this.dirCurrent = dirNext;
  //     } else {
  //       /// 参照が存在しないエラー
  //       // 元に戻す．
  //       this.dirCurrent = dirBackUp;
  //       return false;
  //     }
  //   });
  //   // 正常終了
  //   return true;
  // }

  // public setByRelStrs(strsRel)


  private getNextDir(nowDir: directory, nextDirName: string) {
    return nowDir.directories.find(directory => (directory.name === nextDirName)) || null;
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

  public cat() {

  }

  public cd() {

  }

  public ls() {
  }

  public which() {

  }



}

const Matsh = () => {

  const matsh = new clsMatsh(Root);

  const typographyRef = useRef<HTMLDivElement | null>(null);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [outputs, setOutputs] = useState<string>("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  const [inputCommand, setInputCommand] = useState<string>("");
  // const [directory, setDirectory] = useState<string>("root/Users/mattsunkun/");

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
                {matsh.pwd(true)} $ {line}
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
              if (event.key === "Enter") {
                // コマンドを出力に登録


                if (inputCommand === "pwd") {
                  setOutputs(`${outputs}\n${inputCommand}\n${matsh.pwd(false)}`)
                  console.log(matsh.dirsCurrent);
                }
                else {
                  setOutputs(`${outputs}\n${inputCommand}`)

                }


                // コマンドをなくす
                setInputCommand("");
              }
            }}
            placeholder="command here"
            InputProps={{
              startAdornment: <InputAdornment position="start">{matsh.pwd(true)} $</InputAdornment>,
            }}
          />
        </Box>

      </Paper>

    </>
  );
};

export default Matsh;