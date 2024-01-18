import { directory } from "src/data/fileSystem";
import dirAdmin from "./admin";
import dirMattsunkun from "./mattsunkun";

const dirUsers: directory = {
  name: "Users",
  files: [

  ],
  directories: [
    dirAdmin,
    dirMattsunkun,
  ],
}

export default dirUsers;