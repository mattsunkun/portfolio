import { directory } from "../../..";
import dirsFrameworks from "./frameworks";
import dirsLanguages from "./languages";
import dirsLibraries from "./libraries";
import dirsSoftware from "./software";

const dirSkills: directory = {
  name: "skills",
  files: [],
  directories: [
    dirsFrameworks,
    dirsLanguages,
    dirsLibraries,
    dirsSoftware,
  ],
}

export default dirSkills;