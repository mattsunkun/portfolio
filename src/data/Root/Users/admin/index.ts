import { directory } from "src/data/fileSystem";

const dirAdmin: directory = {
  name: "admin",
  files: [
    {
      name: "secret",
      contents: 'Try KONAMI command at "About" page.', // 隠しコマンド
    },
  ],
  directories: [],
}

export default dirAdmin;