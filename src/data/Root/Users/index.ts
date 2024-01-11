import { directory } from "src/data/Root";
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