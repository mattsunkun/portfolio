// import { directory } from "@/data/Root";
import { directory } from "src/data/Root";

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