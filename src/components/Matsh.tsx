
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Box, Button, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import { command, directory, file, lineColor, manager, standardError } from "src/data/fileSystem";
import { concatDirectory, extractDirDebris, getTail } from '../functions/utils';
import clsMatsh from '../functions/matsh';
import clsParse from '../functions/parse';
import { TypeAnimation } from 'react-type-animation';
import clsParser, { eParseError, eToken, tToken } from 'src/functions/parser';
import dirBin from 'src/data/Root/bin';
import { sys } from 'typescript';
import { darkModeContext, tBooleanSet } from 'src/App';
import { eArgType, eOutputColor } from 'src/data/enumFileSystem';
import { msgAlert } from 'src/functions/dependencyInjection';
import { parse } from 'path';
import DynamicLine from './DynamicLine';
import dirMattsunkun from 'src/data/Root/Users/mattsunkun';


// const matsh = new clsMatsh(Root);

const Matsh: React.FC<{ height: string }> = (props) => {

  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;

  const typographyRef = useRef<HTMLDivElement | null>(null);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [histRef, setHistoryRef] = useState<number>(0);
  const [outputs, setOutputs] = useState<lineColor[]>([]);
  const [inputCommand, setInputCommand] = useState<string>("");
  const [complements, setComplements] = useState<lineColor>();

  const [isInputting, setIsInputting] = useState<boolean>(false);


  const [isIntro, setIsIntro] = useState<boolean>(true);

  const [isExited, setIsExited] = useState<boolean>(false);



  // const raw = "";// " pwd -a  --hello  args ab -la ";
  // const a = new clsParser(raw, 5);
  // console.log(raw)
  // console.table(a)


  // const mutant = ["a", "b"]
  // console.log(mutant)

  // const b = (mutables: string[]) => {
  //   mutables.push("c")
  // }
  // b(mutant);

  // console.log(mutant)

  // type tM = {
  //   mutant: string[]
  // }
  // const mutables: tM = {
  //   mutant: mutant
  // }
  // const a = (mutables: tM) => {
  //   mutables.mutant.push("c");
  // }
  // a(mutables)
  // console.log(mutant)

  const isPC: boolean = window.innerWidth > 500;


  useEffect(() => {
    // outputs変更時にスクロールする．
    if (typographyRef.current) {
      typographyRef.current.scrollTop = typographyRef.current.scrollHeight;
      window.scroll(0, 0)
    }
  }, [outputs]);

  useEffect(() => {
    manager.dirsCurrent = manager.wayHome();

    // デフォルトでtextfieldにフォーカス

    // スマホとかはカーソル合わせなくて良い．
    if (isPC) {
      textFieldRef.current?.focus();

    }

    // dirsCurrent = 
  }, []);// 第二引数が空の場合、コンポーネントがマウントされたときだけuseEffectが実行されます

  useEffect(() => {
    if (textFieldRef.current) {
      const length = textFieldRef.current.value.length;
      textFieldRef.current.setSelectionRange(length, length);
    }
  }, [histRef])


  const strsIntro: string[] = dirMattsunkun.files.find(file => file.name === ".mlogin")?.contents.split("\n").slice(1) || [];
  if (!isPC) {
    strsIntro.pop();
    strsIntro.push("");
    strsIntro.push("It seems like you are watching me with your smartphone📱 or something...");
    strsIntro.push("Huh...🧐");
    strsIntro.push("I would like you to watch me with some PC💻.")

  }
  //  [
  //   "Hello World!!",
  //   "Welcome to mattsunkun's portfolio!!",
  //   "Here is the CLI(Matsh) for this portfolio.",
  //   "Matsh provides the most basic shell commands.",
  //   'Try with "tree ." command line to navigate File System.',
  // ]
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
              isIntro ?
                <>
                  {
                    strsIntro.map((intro, ind) => {
                      return <Box
                        key={ind}
                      >
                        <DynamicLine
                          // key={ind}
                          line={intro}
                          wait={ind * 500}
                          setIntro={
                            ind === strsIntro.length - 1 ? setIsIntro : undefined
                          }
                        />
                        <br />
                      </Box>
                    })
                  }
                </>
                :
                <>
                  <Button onClick={() => setIsIntro(true)}
                    disabled={isExited}
                  >
                    Regenerate Matsh's Introduction
                  </Button>
                </>
            }

            {outputs.map((lineColor, index) => (

              // <React.Fragment key={index}>
              //   <Typography key={index} color={lineColor.color} variant="h5">
              //     {lineColor.line}
              //   </Typography>
              // </React.Fragment>
              <Box key={index} >
                <Typography color={lineColor.color} variant="h5">
                  {lineColor.line}
                </Typography>
              </Box>
            ))}
          </Typography>

          {/* 入力 */}
          <TextField fullWidth label="" id="fullWidth"
            disabled={isExited}
            inputRef={textFieldRef}
            value={inputCommand}
            onChange={(event) => setInputCommand(event.target.value)}

            onCompositionStart={() => setIsInputting(true)}
            onCompositionEnd={() => setIsInputting(false)}
            onKeyDown={(event) => {

              // 長すぎるコマンドは解釈できない
              if (inputCommand.length >= standardError.cnumsMaxChar) {
                setOutputs([
                  ...outputs,
                  ...standardError.commandTooLong(),
                ])
                setInputCommand("")
              }

              const nowCursor: number = textFieldRef.current?.selectionStart ?? -1;

              const parser = new clsParser(inputCommand);
              switch (event.key) {
                case "Enter": {
                  if (isInputting) return;
                  event.preventDefault();
                  // 今までの履歴と，今入力したコマンドを保持する．
                  const pastOutputsWithCommand: lineColor[] = [
                    ...outputs,
                    {
                      line: `${manager.getStr(manager.dirsCurrent, true)}$ ${inputCommand}`,
                      color: eOutputColor.standard,
                    }
                  ];

                  // compは消す．
                  setComplements({ line: "", color: eOutputColor.standard });

                  // 空白は履歴に入れない．
                  if (parser.command !== "") {
                    manager.strsHistory.push(inputCommand);
                  }

                  // Enterで確定する時は環境変数を変更する．

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
                  const execs: file[] = getTail(manager.getDirs(manager.cstrExportPath)).files.filter(file => file.command) ?? [];

                  // export pathでいく．
                  let myExec: command | undefined = execs.find((exec) => { return (exec.name === parser.command); })?.command;

                  // export pathになかった時，path指定で行く．
                  if (myExec === undefined) {
                    const [strDir, strDebris] = extractDirDebris(parser.command);
                    if (manager.isSameDir(strDir, manager.cstrExportPath)) {
                      myExec = execs.find((exec) => { return (exec.name === strDebris); })?.command;
                    }
                  }



                  if (parser.parseError === eParseError.optionError) {
                    // option parse error
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...standardError.parseError(),
                    ]);
                  } else if (myExec) {
                    // コマンドが存在すれば
                    // さっきの保持と合わせて出力を書く．
                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...myExec.func(manager, parser.options, parser.arguments),
                    ]);

                    // 外側での実行が必要なものについてはここに記述する．
                    if (myExec.isNeedOuterHelp) {
                      switch (parser.command) {
                        case "clear":
                          setOutputs([]);
                          setIsIntro(false);
                          break;
                        case "exit":
                          const mlogout = getTail(manager.getDirs(manager.cstrsHome)).files.find(file => file.name === ".mlogout")?.contents;
                          const logoutParse = new clsParser(mlogout ?? "-1");
                          // 単純にcommandである必要がある．
                          setOutputs([
                            ...pastOutputsWithCommand,
                            ...getTail(
                              manager.getDirs(manager.cstrExportPath)).files.
                              find(file =>
                                file.name === logoutParse.command)?.command
                              ?.func(manager, logoutParse.options, logoutParse.arguments)
                            ?? [],
                          ]);
                          setIsExited(true);

                          break;
                        default:
                          msgAlert(`${parser.command}で外側の実行がされていません．`);
                          break;
                      }
                    }

                  } else if (parser.command === "") {
                    // 空コマンド
                    setOutputs([...pastOutputsWithCommand]);
                  } else if (parser.command === manager.cstrEnvPATH) {

                  } else {
                    // コマンドが存在しないときの出力．
                    let lineColors: lineColor[];
                    switch (parser.command) {
                      case manager.cstrEnvPATH:
                      case "export":
                      case "alias":
                      case "intro":
                        lineColors = standardError.youAreCurios(parser.command);
                        break;
                      default:
                        lineColors = standardError.commandNotFound(parser.command);
                        break;
                    }

                    setOutputs([
                      ...pastOutputsWithCommand,
                      ...lineColors,
                    ])
                  }

                }
                  break;
                case "Tab": {
                  event.preventDefault(); // Tabキーのデフォルトの動作をキャンセル

                  // 末端でのみTabはサポート
                  if (nowCursor !== inputCommand.length) {
                    setComplements({
                      line: "Compliment Only For Tail",
                      color: eOutputColor.error,
                    });
                    return;
                  }


                  // EEE 
                  const executableTargets: file[] = getTail(manager.getDirs(manager.cstrExportPath)).files.filter(file =>
                    file.command);
                  let myExe = parser.command;
                  for (const alias of manager.cstrsAlias) {
                    if (alias.split("=")[0] === parser.command) {
                      myExe = alias.split("=")[1];
                      break;
                    }
                  }
                  // コマンドのパス指定はまだできていないからここでやる．
                  // そのためには，パスが一緒かどうか判断するmanagaerを作る必要がある．
                  // 変更点としては，ここと引数としてexecのところ
                  // 後，executabletargetも？
                  // EEE 
                  // for (const exec of executableTargets){
                  //   if(exec.name)
                  // }


                  const myExecutable: file | undefined = executableTargets.find(file =>
                    file.name === myExe);


                  // コマンドが無い時
                  let candidates: string[] = [];
                  let left = "";
                  let strDirTarget = "";
                  let compType: eArgType | undefined = undefined; // nullで無い時は，最後を削って表示する．


                  if (parser.command === "") {
                    candidates = [
                      ...executableTargets.map(file => file.name),
                      ...manager.cstrsAlias.map(alias => alias.split("=")[0]),
                    ]
                  } else {

                    // コマンドのtokenを見つけたとき

                    // tab補完はargumentとして判断した．
                    if (inputCommand.charAt(nowCursor - 1) === " ") {

                      if (myExecutable?.command) {
                        left = inputCommand.split(/\s+/).join(" ");
                        const dirTarget: directory = getTail(manager.dirsCurrent);

                        switch (myExecutable.command.argType) {
                          case eArgType.directory:
                            candidates = [
                              ...dirTarget.directories.map(dir => dir.name),
                            ]
                            break;
                          case eArgType.file:
                            candidates = [
                              ...dirTarget.directories.map(dir => dir.name),
                              ...dirTarget.files.map(file => file.name),
                            ]
                            break;
                          case eArgType.executable:
                            // EEE 
                            // ここに現在の相対位置に存在していれば出さなきゃいけない．
                            candidates = [
                              ...executableTargets.map(file => file.name)
                            ]
                            break;
                          case eArgType.none:
                            candidates = [];
                            break;
                        }

                      }

                    } else {
                      // 入力中の時

                      // トークンが一個しかなかったら
                      if (parser.tokens.length === 1) {

                        // commandを入力しているということだ．
                        // いつかパス指定もしたい．
                        // EEE 
                        left = "";
                        candidates = [
                          ...manager.cstrsAlias.map(alias => alias.split("=")[0]),
                          ...executableTargets.map(file => file.name),
                        ].filter(seg => seg.startsWith(parser.command));

                      } else {
                        // トークンが複数あれば，

                        // コマンドが存在していれば
                        // EEE

                        if (myExecutable?.command) {

                          // 先頭を見てargかoptionかみる．
                          const nonTarget: string = inputCommand.split(/\s+/).slice(0, -1).join(" ");
                          let target: string = getTail(inputCommand.split(/\s+/));

                          // console.log("|" + nonTarget + "|" + target)
                          // オプション
                          if (target.charAt(0) == "-") {
                            left = inputCommand
                            candidates = myExecutable.command.shortOptions
                              .filter(opt => target.includes(opt) === false);

                          } else {
                            // 引数


                            left = inputCommand.split(/\s+/).join(" ");
                            // let strDirTarget: string;
                            let strDebris: string;


                            switch (target.charAt(0)) {
                              case "~":
                                if (target.charAt(1) !== "/") {
                                  target = target.slice(0, 1) + "/" + target.slice(1);
                                }
                                strDirTarget = target.split("/").slice(0, -1).join("/");
                                // left = `${left} ${strDirTarget}`;
                                strDebris = getTail(target.split("/"));
                                break;
                              case "/":
                                strDirTarget = "/" + target.split("/").slice(0, -1).join("/");
                                // left = `${left} ${strDirTarget}`;
                                strDebris = getTail(target.split("/"));
                                break;
                              default:
                                if (!target.startsWith("./")) {
                                  target = `./${target}`;
                                }


                                strDirTarget = target.split("/").slice(0, -1).join("/");
                                // left = `${left} ${strDirTarget}`;
                                strDebris = getTail(target.split("/"));
                                break;
                            }

                            const dirTarget = getTail(manager.getDirs(strDirTarget));

                            compType = eArgType.none;
                            switch (myExecutable.command.argType) {
                              case eArgType.directory:
                                candidates = [
                                  ...dirTarget.directories.map(dir => dir.name),
                                ].filter(seg => seg.startsWith(strDebris))
                                compType = eArgType.directory;

                                break;
                              case eArgType.file:
                                candidates = [
                                  ...dirTarget.directories.map(dir => dir.name),
                                  ...dirTarget.files.map(file => file.name),
                                ].filter(seg => seg.startsWith(strDebris))
                                if (candidates.length === 1) {
                                  // 同一名のfileとdirがあった時どうしよう．

                                  if (dirTarget.directories.filter(seg => seg.name.startsWith(strDebris)).length === 1) {
                                    compType = eArgType.directory;
                                  }
                                  if (dirTarget.files.filter(seg => seg.name.startsWith(strDebris)).length === 1) {
                                    compType = eArgType.file;
                                  }
                                }

                                break;
                              case eArgType.executable:
                                // EEE 
                                // ここに現在の相対位置に存在していれば出さなきゃいけない．
                                candidates = [
                                  ...executableTargets.map(file => file.name)
                                ].filter(seg => seg.startsWith(strDebris))
                                break;
                              case eArgType.none:
                                candidates = [];
                                break;
                            }
                          }
                        }
                      }
                    }
                  }


                  // 候補の数依存
                  switch (candidates.length) {
                    case 0:
                      setComplements({
                        line: "No Candidates Found",
                        color: eOutputColor.error,
                      })
                      break;
                    case 1:
                      console.log("asdf")
                      if (compType === undefined) {
                        setInputCommand(`${left}${candidates[0]} `)
                      } else {
                        // console.log(left, strDirTarget, candidates[0])
                        const isDir: boolean = compType === eArgType.directory;
                        console.log(compType)
                        setInputCommand(
                          left.split(/\s+/).slice(0, -1).join(" ") +
                          " " +
                          concatDirectory([strDirTarget, candidates[0]], isDir) +
                          `${isDir ? "" : " "}`
                        )
                      }


                      // これは前回のcompliment not foundなどを消すときなどに必要．
                      setComplements({
                        line: "",
                        color: eOutputColor.standard,
                      })
                      break;
                    default:
                      setComplements({
                        line: candidates.join(" "),
                        color: eOutputColor.standard,
                      })
                      break;
                  }


                }
                  break;
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
                  // setComplements({});
                  break;

              }

            }}
            placeholder={isExited ? "Be of Good Cheer!" : "input here"}
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
            color={complements?.color}
          >
            {complements?.line}
          </Typography>
        </Box>

      </Paper>

    </>
  );
};

export default Matsh;