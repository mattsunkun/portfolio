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
  ) => string,
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
  getDirs: (strDir: string) => directory[],
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


  getDirs: (strDir: string) => {
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
    if (isTilde) {
      agent = agent.replace(new RegExp(`^${escapeRegExp(manager.cstrsHome)}\/`), "~");
    }

    return agent;
  },
  wayHome: () => {
    return manager.getDirs(manager.cstrsHome);
  },

  dirsCurrent: [],

  strsHistory: [],

}
