import { escapeRegExp, getTail } from "src/functions/utils";
import { eArgType, eOutputColor } from "src/data/enumFileSystem";
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


export type lineColor = {
  line: string,
  color: eOutputColor,
}


export type command = {
  func: (
    manager: tManager,
    opts: string[],
    args: string[],
    mutant?: Object,
  ) => lineColor[],
  shortOptions: string[],
  longOptions: string[],
  maxArgNums: number,
  argType: eArgType,
  isNeedOuterHelp?: boolean,
}

export type tCandidates = {
  files: string[],
  directories: string[],
  executables: string[],
}




export type tManager = {
  cstrsHome: string,
  cstrExportPath: string,
  cstrsAlias: string[],
  wayRoot: () => directory[],

  parentify: (dirs: directory[]) => void,
  getChild: (nowDir: directory, nextDirName: string) => directory | undefined,
  wayHome: () => directory[],
  getDirs: (strRawDir: string) => directory[],
  getStr: (dirs: directory[], isTilde: boolean) => string,
  getCandidates: (strRawInComplete: string) => tCandidates,
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
  cstrExportPath: "/bin",
  cstrsAlias: [
    "猫=cat",
    "ねこ=cat",
  ],



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
    if (
      strRawDir.length >= 2 &&
      strRawDir.charAt(0) === "~" &&
      strRawDir.charAt(1) !== "/"
    ) {
      return [];
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

  // 末尾はスラッシュ消します．
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

  getCandidates: (strRawInComplete: string) => {
    // 最初に必ずスラッシュが含まれる形にする．
    let strInComplete;
    if (strRawInComplete.startsWith("/") ||
      // ここを~/にすると，~が感知できなくなる．
      strRawInComplete.startsWith("~")) {
      strInComplete = strRawInComplete;
    } else {
      strInComplete = `./${strRawInComplete}`;
    }

    // ~.+の形の時
    if (
      strRawInComplete.length >= 2 &&
      strRawInComplete.charAt(0) === "~" &&
      strRawInComplete.charAt(1) !== "/"
    ) {
      return { files: [], directories: [], executables: [] };
    }

    // 最後のスラッシュの位置を取得
    const separator = strInComplete.lastIndexOf("/");
    // 最後のスラッシュで文字列を分割
    const strDir = strInComplete.substring(0, separator);
    const strDebris = strInComplete.substring(separator + 1);

    const regexDebris = new RegExp(`^${escapeRegExp(strDebris)}.*`)

    const dirTarget = getTail(manager.getDirs(strDir));
    return {
      files: dirTarget.files.filter(file =>
        file.name.match(regexDebris)
      )
        .map(file => file.name),
      directories: dirTarget.directories.filter(dir =>
        dir.name.match(regexDebris)
      )
        .map(dir => dir.name),
      executables: dirTarget.files.filter(file =>
        file.name.match(regexDebris) &&
        file.command
      )
        .map(file => file.name),
    }
  },



  wayHome: () => {
    return manager.getDirs(manager.cstrsHome);
  },

  dirsCurrent: [],

  strsHistory: [],

}


export type tStandardError = {
  commandNotFound: (strCommand: string) => lineColor[],
  illegalOption: (strCommand: string, opt: string) => lineColor[],
  noSuchFileOrDirectory: (strCommand: string, arg: string) => lineColor[],
  notADirectory: (strCommand: string, arg: string) => lineColor[],
  notAFile: (strCommand: string, arg: string) => lineColor[],
  permissionDenied: (strCommand: string) => lineColor[],
  notFound: (strCommand: string) => lineColor[],
  noManualEntryFor: (arg: string) => lineColor[],
  tooManyArguments: (strCommand: string) => lineColor[],

  // original
  argumentRequired: (strCommand: string) => lineColor[],
  parseError: () => lineColor[],
  cnumsMaxChar: number,
  commandTooLong: () => lineColor[],


}

export const standardError: tStandardError = {
  commandNotFound: (strCommand: string) => {
    return [{
      line: `matsh: command not found: ${strCommand}`,
      color: eOutputColor.error,
    }];
  },

  illegalOption: (strCommand: string, opt: string) => {
    return [{
      line: `${strCommand}: illegal option -- ${opt}`,
      color: eOutputColor.error,
    },
    {
      line: `useage: ${strCommand} <-OPTIONS> <SEGMENT(S)>`,
      color: eOutputColor.error,
    }
    ];
  },

  noSuchFileOrDirectory: (strCommand: string, arg: string) => {
    return [{
      line: `${strCommand}: ${arg}: No such file or directory`,
      color: eOutputColor.error,
    }];
  },

  notADirectory: (strCommand: string, arg: string) => {
    return [{
      line: `${strCommand}: not a directory: ${arg}`,
      color: eOutputColor.error,
    }];
  },

  notAFile: (strCommand: string, arg: string) => {
    return [{
      line: `${strCommand}: not a file: ${arg}`,
      color: eOutputColor.error,
    }];
  },

  permissionDenied: (strCommand: string) => {
    return [{
      line: `matsh: permission denied: ${strCommand}`,
      color: eOutputColor.error,
    }];
  },

  notFound: (strCommand: string) => {
    return [{
      line: `${strCommand} not found`,
      color: eOutputColor.error,
    }];
  },

  noManualEntryFor: (arg: string) => {
    return [{
      line: `No manual entry for ${arg}`,
      color: eOutputColor.error,
    }];
  },

  tooManyArguments: (strCommand: string) => {
    return [{
      line: `${strCommand}: too many arguments`,
      color: eOutputColor.error,
    }];
  },

  argumentRequired: (strCommand: string) => {
    return [{
      line: `Argument required`,
      color: eOutputColor.error,
    },
    {
      line: `useage: ${strCommand} <-OPTIONS> <SEGMENT(S)>`,
      color: eOutputColor.error,
    }];
  },

  parseError: () => {
    return [{
      line: "matsh: Parsing error around options",
      color: eOutputColor.error,
    },
    {
      line: `useage: <COMMAND> <-OPTIONS> <SEGMENT(S)>`,
      color: eOutputColor.error,
    }]
  },

  cnumsMaxChar: 100,

  commandTooLong: () => {
    return [
      {
        line: "matsh: Command Too Looooooong!!",
        color: eOutputColor.error,
      }
    ]
  },


}

export const lineField = (): lineColor => {
  return {
    line: "　",
    color: eOutputColor.standard
  }

}
