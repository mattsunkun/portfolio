import { directory } from "src/data/Root";
import dirFrameworks from "./frameworks";
import dirLanguages from "./languages";
import dirLibraries from "./libraries";
import dirSoftware from "./software";

const dirSkills: directory = {
  name: "skills",
  files: [],
  directories: [
    dirFrameworks,
    dirLanguages,
    dirLibraries,
    dirSoftware,
  ],
}

export default dirSkills;