import { command, directory, standardError, tManager } from "src/data/fileSystem";
import { eArgType } from "src/data/argType";
import { getTail } from "src/functions/utils";


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
            return `\n${manager.getStr(manager.dirsCurrent, false)}`;
          } else {
            return standardError.tooManyArguments("pwd");
          }
        },
        shortOptions: [""],
        longOptions: [""],
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

          let agent = "";

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
              agent += `\n${content}`;
            } else {
              // スラッシュがなかったor該当するファイルのパスがなかった．
              agent += standardError.notAFile("cat", arg);
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
            return "";
          } else if (args.length === 1) {
            const ans = manager.getDirs(args[0]);
            if (ans.length === 0) {
              return standardError.notADirectory("cd", args[0]);
            }
            manager.dirsCurrent = ans;
            return "";
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

          let agent: string[] = [];
          for (const arg of args) {

          }

          return "not yet"
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
    },
    {
      name: "clear",
      contents: "binary of the そうじ",
    },
  ],
  directories: []
}

export default dirBin;