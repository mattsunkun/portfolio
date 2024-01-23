import { directory } from "src/data/fileSystem";

const dirAdmin: directory = {
  name: "admin",
  files: [
    {
      name: ".secret",
      contents: 'Try KONAMI command at "About" page.', // 隠しコマンド
    },
    {
      name: ".debug",
      contents: [
        "ToDo: タブ補完がパス指定のコマンドが無いし，隠しファイルまで存在してしまう．",
        "いろいろやってないね.....",
      ].join(" "),
    }
  ],
  directories: [],
}

export default dirAdmin;