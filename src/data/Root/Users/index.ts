import { directory } from "src/data/fileSystem";
import dirAdmin from "./admin";
import dirMattsunkun from "./mattsunkun";

const dirUsers: directory = {
  name: "Users",
  files: [
    {
      name: ".iso",
      contents: 'A friend since High School.\nYou can jump to his Portfolio with an "open" command!',
      meta: {
        urls: ["https://iso1216.github.io/portfolio",],
      },
    },
    {
      name: ".kawachan",
      contents: 'A friend since University.\nYou can jump to his Portfolio with an "open" command!',
      meta: {
        urls: ["https://kawachann.com/",],
      },
    },
    {
      name: ".maron",
      contents: 'A friend since University.\nYou can jump to his Portfolio with an "open" command!',
      meta: {
        urls: ["https://kisako-riku-portfolio.vercel.app",],
      },
    },
    {
      name: ".nahco3",
      contents: 'A friend since University.\nYou can jump to her Portfolio with an "open" command!',
      meta: {
        urls: ["https://nac-39.com/",],
      },
    },
    {
      name: ".powell",
      contents: 'A friend since University.\nYou can jump to his Portfolio with an "open" command!',
      meta: {
        urls: ["http://portfolio.pwll.dev/",],
      },
    }, // 文字がソートされるように登録する．
  ],
  directories: [
    dirAdmin,
    dirMattsunkun,
  ],
}

export default dirUsers;