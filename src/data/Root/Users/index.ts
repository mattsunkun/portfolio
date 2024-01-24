import { directory } from "src/data/fileSystem";
import dirAdmin from "./admin";
import dirMattsunkun from "./mattsunkun";

const dirUsers: directory = {
  name: "Users",
  files: [
    {
      name: ".maron",
      contents: 'A friend since University.\nYou can jump to his Portfolio with a "open" command!',
      meta: {
        urls: ["https://kisako-riku-portfolio.vercel.app",],
      },
    }
  ],
  directories: [
    dirAdmin,
    dirMattsunkun,
  ],
}

export default dirUsers;