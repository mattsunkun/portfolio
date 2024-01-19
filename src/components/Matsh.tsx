
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import { directory, file, lineColor, manager, standardError } from "src/data/fileSystem";
import { concatDirectory, getTail } from '../functions/utils';
import clsMatsh from '../functions/matsh';
import clsParse from '../functions/parse';
import { TypeAnimation } from 'react-type-animation';
import clsParser, { eParseError, eToken } from 'src/functions/parser';
import dirBin from 'src/data/Root/bin';
import { sys } from 'typescript';
import { darkModeContext, tBooleanSet } from 'src/App';
import { eArgType, eOutputColor } from 'src/data/enumFileSystem';
import { msgAlert } from 'src/functions/dependencyInjection';
import { parse } from 'path';


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
              const nowCursor: number = textFieldRef.current?.selectionStart ?? -1;

              const parser = new clsParser(inputCommand, nowCursor);
              switch (event.key) {
                case "Enter": {
                  event.preventDefault();
                  // 今までの履歴と，今入力したコマンドを保持する．
                  const pastOutputsWithCommand: lineColor[] = [
                    ...outputs,
                    {
                      line: `${manager.getStr(manager.dirsCurrent, true)}$ ${inputCommand}`,
                      color: eOutputColor.standard,
                    }
                  ];

                  // 空白は履歴に入れない．
                  if (parser.command !== "") {
                    manager.strsHistory.push(inputCommand);
                  }

                  // コマンドをクリアする．
                  setInputCommand("");

                  // 履歴参照を戻す．
                  setHistoryRef(0);

                  // aliasの場合は，コマンドを変換させる．
                  for (const alias of manager.cstrsAlias) {
                    if (alias.split("=")[0] === parser.command) {
                      parser.command = alias.split("=")[1];
                      break;
                    }
                  }


                  // exportされているdirを見る．
                  const command = getTail(manager.getDirs(manager.cstrExportPath)).files.find(file => file.name === parser.command)?.command;


                  if (parser.parseError === eParseError.optionError) {
                    // option parse error
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...standardError.parseError(),
                    ]);
                  } else if (command) {
                    // コマンドが存在すれば
                    // さっきの保持と合わせて出力を書く．
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...command.func(manager, parser.options, parser.arguments),
                    ]);

                    // 外側での実行が必要なものについてはここに記述する．
                    if (command.isNeedOuterHelp) {
                      switch (parser.command) {
                        case "clear":
                          setOutputs([]);
                          break;
                        default:
                          msgAlert(`${parser.command}で外側の実行がされていません．`);
                          break;
                      }
                    }

                  } else if (parser.command === "") {
                    // 空コマンド
                    setOutputs([...pastOutputsWithCommand]);
                  } else {
                    // コマンドが存在しないときの出力．
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...standardError.commandNotFound(parser.command)
                    ]);
                  }

                }
                  break;
                case "Tab": {
                  event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル


                  // console.table(parser.tokens)
                  // console.log(parser.command)
                  // aliasの場合は，コマンドを変換させる．
                  for (const alias of manager.cstrsAlias) {
                    if (alias.split("=")[0] === parser.command) {
                      parser.command = alias.split("=")[1];
                      break;
                    }
                  }
                  const executableTargets: file[] = getTail(manager.getDirs(manager.cstrExportPath)).files.filter(file =>
                    file.command);
                  const executableCandidates: string[] = executableTargets.map(file => file.name);
                  // const commandRawCandidates =[
                  //   ...commandExecutables, 
                  //   ...manager.cstrsAlias.map(alias => alias.split("=")[0])
                  // ];
                  const myExecutable: file | undefined = executableTargets.find(file =>
                    file.name === parser.command);

                  const shortOptionsCandidates: string[] = myExecutable?.command?.shortOptions ?? [];

                  const separator: number = parser.tokens[parser.cursorTokenIndex].str.lastIndexOf("/");
                  const strDirTarget: string = parser.tokens[parser.cursorTokenIndex].str.substring(0, separator + 1);
                  const strDebris: string = parser.tokens[parser.cursorTokenIndex].str.substring(separator + 1)
                  const dirTarget: directory = getTail(manager.getDirs(strDirTarget));
                  const fileCandidates: file[] = dirTarget?.files || [];
                  const directoryCandidates: directory[] = dirTarget?.directories || [];

                  console.log("ppppp")
                  console.log(inputCommand.slice(nowCursor + 1))
                  const spaceInd = inputCommand.slice(nowCursor + 1).search(/\s/)
                  let hipCursor;
                  if (spaceInd !== -1) {

                    hipCursor = nowCursor + 1 + spaceInd;
                  } else {
                    console.log("space is")
                    hipCursor = inputCommand.length;
                  }
                  const rawLeft = inputCommand.substring(0, hipCursor);
                  const rawRight = inputCommand.substring(hipCursor + 1);
                  const left = rawLeft.replace(/[^\/\s]*?$/, "");
                  const right = rawRight.replace(/^\s*/, "");


                  // console.log(parser.tokenNow.type)
                  // console.log(myExecutable?.command?.argType)
                  console.log("woeiruweior");
                  // console.log(rawLeft, rawRight)
                  console.log(left, right)
                  console.log("above left right")
                  let candidates: string[];
                  switch (parser.tokenNow.type) {
                    case eToken.command:
                      candidates = executableCandidates.filter(candidate =>
                        candidate.startsWith(parser.tokenNow.str))
                        .filter(str => str.startsWith(strDebris));

                      switch (candidates.length) {
                        case 1:
                          setInputCommand(`${candidates[0]} ${right}`);
                          break;
                        default:
                          setComplements(candidates.join(" "));
                          break;
                      }
                      break;
                    case eToken.shortOptions:
                      candidates = shortOptionsCandidates.filter(candidate =>
                        candidate.startsWith(parser.tokenNow.str))
                        .filter(str => str.startsWith(strDebris));
                      switch (candidates.length) {
                        case 1:
                          setInputCommand(`${left} -${candidates[0]} ${right}`);
                          break;
                        default:
                          setComplements(candidates.join(" "));
                          break;
                      }
                      break;
                    case eToken.arguments:
                      switch (myExecutable?.command?.argType) {
                        case eArgType.directory:
                          candidates = directoryCandidates.map(dir => dir.name)
                            .filter(str => str.startsWith(strDebris));
                          console.log("helooAAA")

                          switch (candidates.length) {
                            case 1:
                              setInputCommand(`${left}${candidates[0]}/${right === "" ? "" : ` ${right}`}`);
                              break;
                            default:
                              setComplements(candidates.join(" "));
                              break;
                          }
                          break;
                        case eArgType.file:
                          candidates = [
                            ...directoryCandidates.map(dir => dir.name),
                            ...fileCandidates.map(file => file.name),
                          ]
                            .filter(str => str.startsWith(strDebris));
                          switch (candidates.length) {
                            case 1:
                              if (directoryCandidates.length === 1) {
                                setInputCommand(`${left} ${candidates[0]}/${right === "" ? "" : ` ${right}`}`);
                              } else {
                                setInputCommand(`${left} ${candidates[0]} ${right}`);
                              }

                              break;
                            default:
                              setComplements(candidates.join(" "));
                              break;
                          }
                          break;
                        case eArgType.executable:
                          candidates = executableCandidates
                            .filter(str => str.startsWith(strDebris));
                          switch (candidates.length) {
                            case 1:
                              setInputCommand(`${left} ${candidates[0]} ${right}`);
                              break;
                            default:
                              setComplements(candidates.join(" "));
                              break;
                          }
                          break;
                        default:
                          candidates = [];
                          break;
                      }
                  }
                  console.log("erjwfj")
                  console.log(parser.tokenNow)
                  console.log(candidates)
                  console.log(parser.tokens)

                  break;
                }
                case "ArrowUp": {
                  event.preventDefault(); // キーのデフォルトの動作をキャンセル
                  setHistoryRef(Math.min(histRef + 1, manager.strsHistory.length - 1));
                  setInputCommand(manager.strsHistory.length ? manager.strsHistory[manager.strsHistory.length - histRef - 1] : "")
                }
                  break;
                case "ArrowDown": {
                  event.preventDefault(); // キーのデフォルトの動作をキャンセル
                  setHistoryRef(Math.max(histRef - 1, 0));
                  // 履歴がない時のエラー回避
                  setInputCommand(manager.strsHistory.length ? manager.strsHistory[manager.strsHistory.length - histRef - 1] : "")
                }
                  break;
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