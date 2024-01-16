import { directory } from "src/data/Root";
import dirInfo from "./info";
import dirHistory from "./history";

const dirAbout: directory = {
  name: "about",
  files: [

  ],
  directories: [
    dirHistory,
    dirInfo,
  ],
}

export default dirAbout;