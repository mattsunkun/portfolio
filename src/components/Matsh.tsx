
import React, { useState, useEffect, useRef } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import Root, { folder, file } from '../data';
import { homedir } from 'os';

class clsDirectory {

  // dir -> array
  // folder -> folder
  // path -> string
  public _currentDir: string[];
  private currentFolder: folder;

  constructor(public tree: folder, public homeDir: string[]) {
    this._currentDir = homeDir;
    this.currentFolder = this.refAbs();
  }


  private get currentDir(): string[] {
    return this._currentDir;
  }

  private set currentDir(newDir: string[]) {
    this._currentDir = newDir;
  }

  private refAbs(): folder {
    let agent: folder = this.tree;
    this._currentDir.forEach(eleI => {
      agent.folders.forEach(eleJ => {
        if (eleJ.name === eleI) {
          agent = eleJ;
        }
      })
    });

    return agent;
  }


  public get currentPath(): string {
    return (this._currentDir === this.homeDir) ? "~" : this._currentDir.join("/");
  }

  public pwd(): string {
    return this._currentDir.join("/");
  }

  public ls(): string[] {
    this.tree
  }

  // public set currentPath(newPath: string) {
  //   this._currentDir = newPath.split("/");
  // }


}

const Matsh = () => {




  const typographyRef = useRef<HTMLDivElement | null>(null);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [outputs, setOutputs] = useState<string>("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  const [inputCommand, setInputCommand] = useState<string>("");
  const [directory, setDirectory] = useState<string>("root/Users/mattsunkun/");

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
                {directory} $ {line}
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
                setOutputs(`${outputs}\n${inputCommand}`)
                setInputCommand("");
                // if (typographyRef.current) {
                //   typographyRef.current.scrollTop = (typographyRef.current.scrollHeight);

                // }
              }
            }}
            placeholder="command here"
            InputProps={{
              startAdornment: <InputAdornment position="start">{directory} $</InputAdornment>,
            }}
          />
        </Box>

      </Paper>

    </>
  );
};

export default Matsh;