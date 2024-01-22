
// cannot access enum before init の外科処置
// 後で直す．
export enum eArgType {
  file = "FILE",
  directory = "DIRECTORY",
  executable = "EXECUTABLE",
  none = "NONE",
}


export enum eOutputColor {
  standard = "inherit",
  directory = "lightgreen",
  file = "inherit",
  error = "red",
  curios = "blue",
}