import { directory } from "src/data/fileSystem";
import dirUsers from "./Users";
import dirBin from "./bin";




const dirRoot: directory = {
  name: "",
  files: [

  ],
  directories: [
    dirBin,
    // {
    //   name: ".test",
    //   files: [],
    //   directories: [
    //     {
    //       name: "error",
    //       files: [],
    //       directories: [],
    //     }
    //   ],
    // },
    dirUsers,
  ],
}




export default dirRoot;
