import { directory } from "src/data/Root";
import dirJobs from "./jobs";
import dirHobbies from "./hobbies";

const dirWorks: directory = {
  name: "work",
  files: [
    //     { name: "簿記アプリ", appheroyuki, 魚の部屋 }

  ],
  directories: [
    dirJobs,
    dirHobbies,
  ],
}

export default dirWorks;