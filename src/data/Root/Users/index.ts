import { directory } from "src/data/fileSystem";
import dirAdmin from "./admin";
import dirMattsunkun from "./mattsunkun";

const dirUsers: directory = {
  name: "Users",
  files: [
    {
      name: ".iso",
      contents: 'A friend since High School.\nYou can jump to his Portfolio with a "open" command!',
      meta: {
        urls: ["https://iso1216.github.io/portfolio",],
      },
    },
    {
      name: ".maron",
      contents: 'A friend since University.\nYou can jump to his Portfolio with a "open" command!',
      meta: {
        urls: ["https://kisako-riku-portfolio.vercel.app",],
      },
    },
    {
      name: ".na",
      contents: 'A friend since University.\nYou can jump to her Portfolio with a "open" command!',
      meta: {
        urls: ["https://nac-39.com/",],
      },
    },
  ],
  directories: [
    dirAdmin,
    dirMattsunkun,
  ],
}

export default dirUsers;