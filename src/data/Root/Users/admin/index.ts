import { directory } from "../..";

const dirAdmin: directory = {
  name: "admin",
  files: [
    {
      name: "secret",
      contents: "ひみつ", // 隠しコマンド
    },
  ],
  directories: [],
}

export default dirAdmin;