
import React, { useState, useEffect, useRef } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import Root, { directory, file } from '../data';
import { getTail } from '../functions/utils';
import clsMatsh from '../functions/matsh';
import clsParse from '../functions/parse';


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
    // outputs変更時にスクロールする．
    if (typographyRef.current) {
      typographyRef.current.scrollTop = typographyRef.current.scrollHeight;
    }
  }, [outputs]);

  useEffect(() => {
    // デフォルトでtextfieldにフォーカス
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
              overflow: "auto",
              overflowY: "scroll",
              minHeight: "60vh",
              maxHeight: "60vh", // Set a maximum height to enable scrolling        
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
                  setHistory([...history, ...inputCommand ? [inputCommand] : []]);
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
                    case "":
                      setOutputs(`${historyWithPrompt}`);
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
                    const [isIncludesFile, strsDirComp] = matsh.tabDirComplement(
                      parse.strsPath,
                      (/^(pwd|cd|ls|which)$/).test(parse.strCommand) === false,
                    );
                    switch (strsDirComp.length) {
                      case 0:
                        setComplements("couldnt anticipate directory or file");
                        break;
                      case 1:
                        setInputCommand(`${inputCommand.replace(new RegExp(`${parse.strPathEd}$`), strsDirComp[0])}${isIncludesFile ? "" : "/"}`);
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