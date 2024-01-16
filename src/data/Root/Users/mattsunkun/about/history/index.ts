import { directory } from "src/data/Root";
import dirExperiences from "./experiences";
import dirQualifications from "./qualifications";
import dirSchools from "./schools";
import dirJobs from "./jobs";

const dirHistory: directory = {
  name: "history",
  files: [

  ],
  directories: [
    dirExperiences,
    dirJobs,
    dirQualifications,
    dirSchools,
  ],
}

export default dirHistory;