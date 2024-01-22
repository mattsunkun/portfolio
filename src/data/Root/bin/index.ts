import { command, directory, file, lineColor, lineField, standardError, tManager } from "src/data/fileSystem";
import { eArgType, eOutputColor } from "src/data/enumFileSystem";
import { concatDirectory, dateNormalForm, getTail, isSame } from "src/functions/utils";
import { extractDirDebris } from "src/functions/utils";

const dirBin: directory = {
  name: "bin",
  files: [

    // cat
    {
      name: "cat", // 猫とかをエイリアスにしたい．
      contents: "binary of the にゃーにゃーにゃー",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {

          if (opts.length !== 0) {
            return standardError.illegalOption("cat", opts[0]);
          }

          let agent: lineColor[] = [];

          // 引数ごとにcatする．
          for (const arg of args) {
            let content;

            // 最後のスラッシュでdirとfileを分ける．
            const separateIndex = arg.lastIndexOf("/");

            // 探索対象directory
            let dirTarget: directory;
            // 探索ファイル名
            let fileTarget: string;

            if (separateIndex !== -1) {
              // ディレクトリ部分がある時
              const dirsTarget = manager.getDirs(arg.substring(0, separateIndex));
              dirTarget = getTail(dirsTarget)
              fileTarget = arg.substring(separateIndex + 1);
            } else {
              // argがdirそのままの時
              dirTarget = getTail(manager.dirsCurrent)
              fileTarget = arg;
            }

            // fileの中身を取得
            content = dirTarget.files.find(file => file.name === fileTarget)?.contents;

            if (content) {
              agent.push({
                line: content,
                color: eOutputColor.standard,
              });
            } else {
              // スラッシュがなかったor該当するファイルのパスがなかった．
              agent.push(...standardError.notAFile("cat", arg));
            }

          }

          // 引数が無い時
          if (args.length === 0) {
            agent = standardError.argumentRequired("cat");
          }
          return agent;
        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: -1,
        argType: eArgType.file,
        man: "Display the Contents of a File.\nArguments are required.\nNo Options are allowed.",
      }
    },

    // cd
    {
      name: "cd",
      contents: "binary of the ちぇんじ　ざ　でぃれくとり(usually build in command)",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("cd", opts[0]);
          } else if (args.length === 0) {
            manager.dirsCurrent = manager.wayHome();
            return [];
          } else if (args.length === 1) {
            const ans = manager.getDirs(args[0]);
            if (ans.length === 0) {
              return standardError.notADirectory("cd", args[0]);
            }
            manager.dirsCurrent = ans;
            return [];
          } else {
            return standardError.tooManyArguments("cd");
          }
        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: 1,
        argType: eArgType.directory,
        man: "Changes Directory.\nOnly 0or1 Argument are allowed.\nNo Options are allowed.",
      }
    },

    // clear
    {
      name: "clear",
      contents: "binary of the そうじ",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("clear", opts[0]);
          } else if (args.length === 0) {
            return [];
          } else {
            return standardError.tooManyArguments("clear");
          }
        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: 0,
        argType: eArgType.none,
        isNeedOuterHelp: true,
        man: "Cleans All Outputs Shown Above.\nNo Argument are allowed.\nNo Options are allowed.",
      }
    },

    // date
    {
      name: "date",
      contents: "binary of the らぶらぶ",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("date", opts[0]);
          } else if (args.length === 0) {
            const now: Date = new Date();// new Date(2023, 12, 31, 23, 59, 59);
            return [{
              line: `${dateNormalForm(now).year}年 ${dateNormalForm(now).month}月${now.getDate()}日 ${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒`,
              color: eOutputColor.standard,
            }];
          } else {
            return standardError.tooManyArguments("date");
          }
        },
        shortOptions: [],
        longOptions: [],
        maxArgNums: 0,
        argType: eArgType.none,
        man: "Show Today's Date\nNo Arguments are allowed.\nNo Options are allowed.",
      }
    },

    // echo
    {
      name: "echo",
      contents: "binary of the こだま",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("echo", opts[0]);
          } else if (args.length === 0) {
            return [lineField()];
          } else {
            return [
              {
                line: args.join(" "),
                color: eOutputColor.standard,
              }
            ]
          }
        },
        shortOptions: [],
        longOptions: [],
        maxArgNums: 0,
        argType: eArgType.none,
        man: "Echo Args.\nArguments are allowed.\nNo Options are allowed.",
      }
    },

    // ls
    {
      name: "ls",
      contents: "binary of the りすと　ざ　せぐめんつ",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {

          let isNoHidden: boolean = true;
          for (let i = 0; i < opts.length; i++) {
            const ele = opts[i]
            if (ele === "-") continue;
            if (ele !== "a") {
              return standardError.illegalOption("ls", ele);
            } else {
              isNoHidden = false;
            }
          }


          // 引数が無い時は現在を見る．
          if (args.length === 0) {
            args.push("./");
          }

          let agent: lineColor[] = [];
          for (const arg of args) {
            const dirTarget = getTail(manager.getDirs(arg));
            if (dirTarget) {
              agent.push({
                line: `${arg}:`,
                color: eOutputColor.standard,
              });
              const dirs = dirTarget.directories.filter(dir => (!dir.name.startsWith(".")) || !isNoHidden).map(dir => dir.name);
              if (dirs.length !== 0) {
                agent.push({
                  line: dirs.join(" "),
                  color: eOutputColor.directory,
                })
              }
              const files = dirTarget.files.filter(file => (!file.name.startsWith(".")) || !isNoHidden).map(file => file.name);
              if (files.length !== 0) {

                agent.push({
                  line: files.join(" "),
                  color: eOutputColor.file,
                })
              }
              agent.push(lineField());
            } else {
              agent.push(...standardError.notADirectory("ls", arg))
            }
          }

          // 最後がlinefieldなら消す．
          if (isSame([getTail(agent)], [lineField()])) {
            agent.pop();
          }


          // 一つだけの時かつ，正常の時は最初を消す．
          if (args.length === 1 && agent[0].color === eOutputColor.standard) {
            agent.shift();
          }
          return agent;
        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: -1,
        argType: eArgType.directory,
        man: "List Segments.\nArguments are allowed.\nOnly -a Option is allowed.",
      }
    },

    // man
    {
      name: "man",
      contents: "ようこそ．．．男の世界へ．．．",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("man", opts[0]);
          } else if (args.length === 0) {
            return standardError.argumentRequired("man");
          } else {
            let agent: lineColor[] = [];

            // exportされているdirを見る．
            const execs: file[] = getTail(manager.getDirs(manager.cstrExportPath)).files.filter(file => file.command) ?? [];

            for (const arg of args) {

              // export pathでいく．
              let myExec: command | undefined = execs.find((exec) => { return (exec.name === arg); })?.command;

              // export pathになかった時，path指定で行く．
              if (myExec === undefined) {
                const [strDir, strDebris] = extractDirDebris(arg);
                if (manager.isSameDir(strDir, manager.cstrExportPath)) {
                  myExec = execs.find((exec) => { return (exec.name === strDebris); })?.command;
                }
              }


              if (myExec) {
                agent = [
                  ...agent,
                  { line: arg, color: eOutputColor.standard },
                  ...myExec.man.split("\n").map(line => {
                    return {
                      line: line,
                      color: eOutputColor.standard
                    }
                  }),
                  lineField(),
                ]
              } else {
                agent = [...agent, ...standardError.noManualEntryFor(arg)];
              }
            }
            return agent;
          }
        },
        shortOptions: [],
        longOptions: [],
        maxArgNums: 0,
        argType: eArgType.none,
        man: "Manual for the Command.\nArguments are required.\nNo Options are allowed.",
      }
    },

    // pwd
    {
      name: "pwd",
      contents: "binary of the ぱすわーど笑笑",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("pwd", opts[0]);
          } else if (args.length === 0) {
            return [{
              line: `${manager.getStr(manager.dirsCurrent, false)}`,
              color: eOutputColor.standard,
            }];
          } else {
            return standardError.tooManyArguments("pwd");
          }
        },
        shortOptions: [],
        longOptions: [],
        maxArgNums: 0,
        argType: eArgType.none,
        man: "Prints Working Directory.\nNo Arguments are allowed.\nNo Options are allowed.",
      }
    },

    // which
    {
      name: "which",
      contents: "binary of the まじょ",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("which", opts[0]);
          } else if (args.length === 0) {
            return standardError.argumentRequired("which");
          } else {
            let agent: lineColor[] = [];

            const strsAlias: string[] = manager.cstrsAlias;

            // const dirsTarget: directory[] = manager.getDirs(manager.cstrExportPath);

            // exportされているdirを見る．
            const execs: file[] = getTail(manager.getDirs(manager.cstrExportPath)).files.filter(file => file.command) ?? [];

            for (const arg of args) {
              const alias = strsAlias.find(ele => ele.split("=")[0] === arg)
              if (alias) {
                agent.push({
                  line: `${alias.split("=")[0]}: aliased to ${alias.split("=")[1]}`,
                  color: eOutputColor.standard,
                })
                // コマンドは一意なので，ここで次へ行く．
                continue;
              }


              // export pathでいく．
              let myExecFile: file | undefined = execs.find((exec) => { return (exec.name === arg); });

              // export pathになかった時，path指定で行く．
              if (myExecFile === undefined) {
                const [strDir, strDebris] = extractDirDebris(arg);
                if (manager.isSameDir(strDir, manager.cstrExportPath)) {
                  myExecFile = execs.find((exec) => { return (exec.name === strDebris); });
                }
              }


              if (myExecFile) {
                agent = [
                  ...agent,
                  { line: concatDirectory([manager.cstrExportPath, myExecFile.name]), color: eOutputColor.standard },

                  // lineField(),
                ]
              } else {
                agent = [...agent, ...standardError.notFound(arg)];
              }
              // const executable = getTail(dirsTarget).files.find(file => (
              //   (file.command) && // 実行可能
              //   (file.name === arg) // 名前がある．
              // ))

              // if (executable) {
              //   agent.push({
              //     // ここの実行はgetStrの最後がスラッシュ無いことが保証されているから．
              //     line: concatDirectory([manager.getStr(dirsTarget, false), arg]),
              //     color: eOutputColor.standard,
              //   })
              //   continue;
              // }

              // agent.push(...standardError.notFound(arg));

            }
            return agent;
          }

        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: 0,
        argType: eArgType.none,
        man: "Show the Location of a Program File.\nArguments are required.\nNo Options are allowed.",
      }
    },

  ],
  directories: []
}

export default dirBin;