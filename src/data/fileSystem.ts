import { escapeRegExp, getTail } from "src/functions/utils";
import { eArgType } from "src/data/argType";
import dirRoot from "./Root";

export type directory = {
  name: string,
  files: file[],
  directories: directory[],
}

export type file = {
  name: string,
  contents: string,
  meta?: extention,
  command?: command,
}

export type extention = {
  img?: string,
  imgRightsLink?: string,
  start?: Date,
  end?: Date,
  period?: number,
  urls?: string[],
  priority?: number, // 0:必須 1:should 2:needless
}





export type command = {
  func: (
    manager: tManager,
    opts: string[],
    args: string[],
    mutables?: Object,
  ) => string[],
  shortOptions: string[],
  longOptions: string[],
  maxArgNums: number,
  argType: eArgType,
}




export type tManager = {
  cstrsHome: string,
  // pathsExecutable:directory[][], 
  wayRoot: () => directory[],

  parentify: (dirs: directory[]) => void,
  getChild: (nowDir: directory, nextDirName: string) => directory | undefined,
  wayHome: () => directory[],
  getDirs: (strRawDir: string) => directory[],
  getStr: (dirs: directory[], isTilde: boolean) => string,
  // parentify:() => void, 
  // getDirectories:(dirsRel:directory[]) => directory[], 
  // getFiles:(dirsRel:directory[]) => file[], 
  // getExecutables:(dirsRel:directory[]) => file[], 
  dirsCurrent: directory[],
  strsHistory: string[],


}

export const manager: tManager = {
  // 最後のスラッシュは使わない．
  cstrsHome: "/Users/mattsunkun",

  wayRoot: () => [dirRoot],
  parentify: (dirs: directory[]) => {
    if (dirs.length === 1) {
      dirs = manager.wayRoot();
    } else {
      dirs.pop();
    }
  },

  getChild: (nowDir: directory, nextDirName: string) => {
    return nowDir.directories.find(dir =>
      (dir.name === nextDirName)
    );
  },


  getDirs: (strRawDir: string) => {
    let strDir;
    if (strRawDir.startsWith("/") || strRawDir.startsWith("~")) {
      strDir = strRawDir;
    } else {
      strDir = `./${strRawDir}`;
    }
    const strsDir: string[] = strDir.split(/\//g);
    let agent;
    switch (strsDir[0]) {
      case "":
        agent = manager.wayRoot();
        break;
      case "~":
        agent = manager.wayHome();
        break;
      default:
        agent = JSON.parse(JSON.stringify(manager.dirsCurrent));
        break;
    }
    for (const name of strsDir.slice(1)) {
      switch (name) {
        case "": // 最初と最後のスラッシュのゴミをたいしょする．
        case ".":
          break;
        case "..":
          manager.parentify(agent);
          break;
        default:
          const dirNext = manager.getChild(getTail(agent), name);
          if (dirNext) {
            agent.push(dirNext);
          } else {
            return [];
          }
          break;

      }
    }

    return agent;
  },
  getStr: (dirs: directory[], isTilde: boolean) => {
    let agent: string = "";
    for (const dir of dirs) {
      agent += `${dir.name}/`;
    }
    // tilde表記の場合
    if (isTilde) {
      agent = agent.replace(new RegExp(`^${escapeRegExp(manager.cstrsHome)}`), "~");
    }


    // ルートでなければ，最後のスラッシュは消す．
    if (agent !== "/") {
      agent = agent.replace(/\/$/, "");
    }



    return agent;
  },
  wayHome: () => {
    return manager.getDirs(manager.cstrsHome);
  },

  dirsCurrent: [],

  strsHistory: [],

}

export const standardErrorArg = (command: string, arg: string): string => {
  return ``
}

export type tStandardError = {
  commandNotFound: (strCommand: string) => string,
  illegalOption: (strCommand: string, opt: string) => string,
  noSuchFileOrDirectory: (strCommand: string, arg: string) => string,
  notADirectory: (strCommand: string, arg: string) => string,
  notAFile: (strCommand: string, arg: string) => string,
  permissionDenied: (strCommand: string) => string,
  notFound: (strCommand: string) => string,
  noManualEntryFor: (arg: string) => string,
  tooManyArguments: (strCommand: string) => string,

  // original
  argumentRequired: (strCommand: string) => string,

}

export const standardError: tStandardError = {
  commandNotFound: (strCommand: string) => {
    return `\nmatsh: command not found: ${strCommand}`;
  },

  illegalOption: (strCommand: string, opt: string) => {
    return (
      `\n${strCommand}: illegal option -- ${opt}` +
      `\nuseage: ${strCommand} <-OPTIONS> <SEGMENT(S)>`
      // `\nuseage: ${strCommand} [-${strShortOptions.join("")}] <${argType}>`
    );
  },

  noSuchFileOrDirectory: (strCommand: string, arg: string) => {
    return (
      `\n${strCommand}: ${arg}: No such file or directory`
    );
  },

  notADirectory: (strCommand: string, arg: string) => {
    return (
      `\n${strCommand}: not a directory: ${arg}`
    );
  },

  notAFile: (strCommand: string, arg: string) => {
    return (
      `\n${strCommand}: not a file: ${arg}`
    );
  },

  permissionDenied: (strCommand: string) => {
    return (
      `\nmatsh: permission denied: ${strCommand}`
    );
  },

  notFound: (strCommand: string) => {
    return (
      `\n${strCommand} not found`
    );
  },

  noManualEntryFor: (arg: string) => {
    return (
      `\nNo manual entry for ${arg}`
    );
  },

  tooManyArguments: (strCommand: string) => {
    return (
      `\n${strCommand}: too many arguments`
    );
  },

  argumentRequired: (strCommand: string) => {
    return (
      `\nArgument required` +
      `\nuseage: ${strCommand} <-OPTIONS> <SEGMENT(S)>`
    );
  },


}