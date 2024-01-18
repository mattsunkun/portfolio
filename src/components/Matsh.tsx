
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import { directory, file, lineColor, manager, standardError } from "src/data/fileSystem";
import { getTail } from '../functions/utils';
import clsMatsh from '../functions/matsh';
import clsParse from '../functions/parse';
import { TypeAnimation } from 'react-type-animation';
import clsParser from 'src/functions/parser';
import dirBin from 'src/data/Root/bin';
import { sys } from 'typescript';
import { darkModeContext, tBooleanSet } from 'src/App';
import { eOutputColor } from 'src/data/enumFileSystem';


// const matsh = new clsMatsh(Root);

const Matsh: React.FC<{ height: string }> = (props) => {

  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;

  const typographyRef = useRef<HTMLDivElement | null>(null);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [histRef, setHistoryRef] = useState<number>(0);
  const [outputs, setOutputs] = useState<lineColor[]>([]);
  const [inputCommand, setInputCommand] = useState<string>("");
  const [complements, setComplements] = useState<string>("");



  // const raw = "";// " pwd -a  --hello  args ab -la ";
  // const a = new clsParser(raw, 5);
  // console.log(raw)
  // console.table(a)


  // const mutant = ["a", "b"]
  // console.log(mutant)

  // const mutables = {
  //   mutant: mutant
  // }
  // const a = (mutables: Object) => {
  //   mutant.push("c");
  // }
  // a(mutables)
  // console.log(mutant)

  useEffect(() => {
    // outputs変更時にスクロールする．
    if (typographyRef.current) {
      typographyRef.current.scrollTop = typographyRef.current.scrollHeight;
      window.scroll(0, 0)
    }
  }, [outputs]);

  let first = true;;
  useEffect(() => {
    first = true;
    manager.dirsCurrent = manager.wayHome();

    // デフォルトでtextfieldにフォーカス
    textFieldRef.current?.focus();

    // dirsCurrent = 
  }, []);// 第二引数が空の場合、コンポーネントがマウントされたときだけuseEffectが実行されます

  useEffect(() => {
    if (textFieldRef.current) {
      const length = textFieldRef.current.value.length;
      textFieldRef.current.setSelectionRange(length, length);
    }
  }, [histRef])
  return (
    <>
      <Paper
      >
        <Box
          padding={3}
        >

          {/* 出力 */}
          <Typography
            variant="h5"
            paddingX={2}
            marginY={3}
            sx={{
              overflow: "auto",
              overflowY: "scroll",
              minHeight: props.height,
              maxHeight: props.height, // Set a maximum height to enable scrolling        
            }}
            ref={typographyRef}
          >
            {
              first ?
                <TypeAnimation
                  sequence={[
                    // "Hello World!!\nWelcome to mattsunkun's portfolio!! Hello World!!\nWelcome to mattsunkun's portfolio!! Hello World!!\nWelcome to mattsunkun's portfolio!! Hello World!!\nWelcome to mattsunkun's portfolio!!",
                    0,
                    "",
                    () => {
                      first = false;
                      // setOutputs("\n");
                      // console.log("asdf")
                    },
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  speed={99}
                  omitDeletionAnimation={true}
                // sstyle={{ fontSize: '2em', display: 'inline-block' }}
                /> :
                <></>
            }

            {outputs.map((lineColor, index) => (

              <React.Fragment key={index}>
                <Typography color={lineColor.color}>
                  {lineColor.line}
                </Typography>
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


              // const parse = new clsParse(inputCommand);
              const parser = new clsParser(inputCommand, inputCommand.length);
              switch (event.key) {
                case "Enter": {
                  // const historyWithPrompt = `${outputs}${matsh.pwd(true)}$ ${inputCommand}`;
                  const pastOutputsWithCommand: lineColor[] = [
                    ...outputs,
                    {
                      line: `${manager.getStr(manager.dirsCurrent, true)}$ ${inputCommand}`,
                      color: eOutputColor.standard,
                    }

                  ];
                  // `${ outputs }\n${manager.getStr(manager.dirsCurrent, true)}$ ${inputCommand}`;
                  manager.strsHistory.push(inputCommand);
                  // setHistory([...history, ...inputCommand ? [inputCommand] : []]);
                  setHistoryRef(0);
                  for (const alias of manager.cstrsAlias) {
                    if (alias.split("=")[0] === parser.command) {
                      parser.command = alias.split("=")[1];
                      break;
                    }
                  }
                  // 出力
                  const command = dirBin.files.find(file => file.name === parser.command)?.command;
                  if (command) {
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...command.func(manager, parser.options, parser.arguments),
                    ]);
                    if (command.isNeedOuterHelp) {
                      switch (parser.command) {
                        case "clear":
                          setOutputs([]);
                          break;
                      }
                    }

                  } else if (parser.command === "") {
                    setOutputs([...pastOutputsWithCommand]);
                  } else {
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...standardError.commandNotFound(parser.command)
                    ]);
                  }
                  // コマンドをクリアする．
                  setInputCommand("");
                }
                  break;
                // case "Tab": {
                //   event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル

                //   // 一つ目のトークンはコマンドを取得する．
                //   if (parse.numTokens === 1) {
                //     const strsExeComp = matsh.tabExeComplement(parse.strCommand);
                //     switch (strsExeComp.length) {
                //       case 0:
                //         setComplements("couldnt anticipate command");
                //         break;
                //       case 1:
                //         setInputCommand(`${strsExeComp[0]} `)
                //         break;
                //       default:
                //         setComplements(strsExeComp.join(' '));
                //         break;
                //     }
                //   } else {
                //     const [isIncludesFile, strsDirComp] = matsh.tabDirComplement(
                //       parse.strsPath,
                //       (/^(pwd|cd|ls|which)$/).test(parse.strCommand) === false,
                //     );
                //     switch (strsDirComp.length) {
                //       case 0:
                //         setComplements("couldnt anticipate directory or file");
                //         break;
                //       case 1:
                //         setInputCommand(`${inputCommand.replace(new RegExp(`${parse.strPathEd}$`), strsDirComp[0])}${isIncludesFile ? "" : "/"}`);
                //         break;
                //       default:
                //         setComplements(strsDirComp.join(' '));
                //         break;

                //     }
                //   }


                // }
                //   break;
                // case "ArrowUp": {
                //   event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル
                //   setHistoryRef(Math.min(histRef + 1, history.length - 1));
                //   setInputCommand(history.length ? history[history.length - histRef - 1] : "")
                // }
                //   break;
                // case "ArrowDown": {
                //   event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル
                //   setHistoryRef(Math.max(histRef - 1, 0));
                //   // 履歴がない時のエラー回避
                //   setInputCommand(history.length ? history[history.length - histRef - 1] : "")
                // }
                //   break;
                default:
                  setComplements("");
                  break;

              }
            }}
            placeholder="command here"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  {
                    manager.getStr(manager.dirsCurrent, true) === "" ?
                      "~$" :
                      `${manager.getStr(manager.dirsCurrent, true)}$`
                  }
                </InputAdornment>,
              autoComplete: "off", // 候補を見せないようにする．
            }}
          />
          {/* 補完 */}
          <Typography
            variant="h5"

            paddingX={2}
            marginY={3}
          // ref={typographyRef}
          >
            {complements}
          </Typography>
        </Box>

      </Paper>

    </>
  );
};

export default Matsh;