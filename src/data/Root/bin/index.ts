import { command, directory, lineColor, lineField, standardError, tManager } from "src/data/fileSystem";
import { eArgType, eOutputColor } from "src/data/enumFileSystem";
import { concatDirectory, getTail, isSame } from "src/functions/utils";
import { dir } from "console";


const dirBin: directory = {
  name: "bin",
  files: [
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
        shortOptions: ["n"],
        longOptions: ["none", "never"],
        maxArgNums: 0,
        argType: eArgType.none,
      }
    },
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
      }
    },
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
      }
    },
    {
      name: "ls",
      contents: "binary of the りすと　ざ　せぐめんつ",
      command: {
        func: (manager: tManager, opts: string[], args: string[]) => {
          if (opts.length !== 0) {
            return standardError.illegalOption("ls", opts[0]);
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
              const dirs = dirTarget.directories.map(dir => dir.name);
              if (dirs.length !== 0) {
                agent.push({
                  line: dirs.join(" "),
                  color: eOutputColor.directory,
                })
              }
              const files = dirTarget.files.map(file => file.name);
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
      }
    },
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

            const dirsTarget: directory[] = manager.getDirs(manager.cstrExportPath);
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


              const executable = getTail(dirsTarget).files.find(file => (
                (file.command) && // 実行可能
                (file.name === arg) // 名前がある．
              ))

              if (executable) {
                agent.push({
                  // ここの実行はgetStrの最後がスラッシュ無いことが保証されているから．
                  line: concatDirectory([manager.getStr(dirsTarget, false), arg]),
                  color: eOutputColor.standard,
                })
                continue;
              }

              agent.push(...standardError.notFound(arg));

            }
            return agent;
          }

        },
        shortOptions: [""],
        longOptions: [""],
        maxArgNums: 0,
        argType: eArgType.none,
      }
    },
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
      }
    },
  ],
  directories: []
}

export default dirBin;