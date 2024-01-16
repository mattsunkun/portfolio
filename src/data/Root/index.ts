import dirUsers from "./Users";
import dirBin from "./bin";

export type directory = {
  name: string,
  files: file[],
  directories: directory[],
}

export type file = {
  name: string,
  contents: string,
  meta?: extention,
}

export type extention = {
  img?: string,
  imgRightsLink?: string,
  start?: Date,
  end?: Date,
  period?: number,
  urls?: string[],
}

const Root: directory = {
  name: "",
  files: [

  ],
  directories: [
    dirBin,
    {
      name: ".test",
      files: [],
      directories: [
        {
          name: "error",
          files: [],
          directories: [],
        }
      ],
    },
    dirUsers,
  ],
}

export default Root;
