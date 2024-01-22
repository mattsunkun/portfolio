import { directory } from "src/data/fileSystem";
import dirImages from "./images";

const dirInfo: directory = {
  name: "info",
  files: [
    {
      name: "名前",
      contents: "松本昌亮(まつもと まさあき)",
    },
    {
      name: "活動名",
      contents: "mattsunkun",
    },
    {
      name: "誕生日",
      contents: "2002年12月21日",
    },
    {
      name: "所属",
      contents: "名古屋大学情報学部コンピュータ科学科知能システム系",
    },
    {
      name: "メールアドレス",
      contents: "mattsunkun1221<<あっと>>じーめーる.こむ",
    },
    {
      name: "Atcoder",
      contents: "緑色",
    },
    {
      name: "好きな食べ物",
      contents: "たこやき",
    },
    {
      name: "好きなアーティスト",
      contents: "ずとまよ",
    },
    {
      name: "最近のブーム",
      contents: "ジム",
    },
    {
      name: "好きなゲーム0",
      contents: "風来のシレン",
    },
    {
      name: "好きなゲーム1",
      contents: "ピクミン",
    },
    {
      name: "好きなゲーム",
      contents: "スマブラ",
    },
    {
      name: "意外な特技",
      contents: "世界地図や国旗の暗記",
    },
    {
      name: "ひとこと",
      contents: "お友達とおしゃべりするのが大好きです！！仲良くなりましょ！！"
    },
  ],
  directories: [
    dirImages,
  ],
}

export default dirInfo;