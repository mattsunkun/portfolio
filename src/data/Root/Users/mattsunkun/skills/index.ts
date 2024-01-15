import { directory } from "src/data/Root";
import dirFrameworks from "./frameworks";
import dirLanguages from "./languages";
import dirLibraries from "./libraries";
import dirSoftware from "./software";
import dirHardware from "./hardware";
import dirPlatform from "./platform";

const dirSkills: directory = {
  name: "skills",
  files: [],
  directories: [
    dirFrameworks,
    dirHardware,
    dirLanguages,
    dirLibraries,
    dirPlatform,
    dirSoftware,
  ],
}

export default dirSkills;