import { directory } from "..";

const dirBin: directory = {
  name: "bin",
  files: [
    {
      name: "pwd",
      contents: "ぱすわーど笑笑",
    },
    {
      name: "cat", // 猫とかをエイリアスにしたい．
      contents: "binary of the にゃーにゃーにゃー",
    },
    {
      name: "cd",
      contents: "usually build in command butbinary of the ちぇんじ　ざ　でぃれくとり",
    },
    {
      name: "ls",
      contents: "binary of the りすと　ざ　せぐめんつ",
    },
    {
      name: "which",
      contents: "binary of the whitch 第2引数の補完がおかしいからやめた方がいいかも．",
    },
    {
      name: "clear",
      contents: "binary of the null",
    },
  ],
  directories: []
}

export default dirBin;