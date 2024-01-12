import { directory } from "src/data/Root";
import dirExperiences from "./experiences";
import dirInfo from "./info";
import dirQualifications from "./qualifications";

const dirAbout: directory = {
  name: "about",
  files: [

  ],
  directories: [
    dirExperiences,
    dirInfo,
    dirQualifications,
  ],
}

export default dirAbout;