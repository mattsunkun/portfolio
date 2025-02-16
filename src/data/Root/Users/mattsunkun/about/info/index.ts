import { directory } from "src/data/fileSystem";
import dirImages from "./images";

const dirInfo: directory = {
  name: "info",
  files: [
    {
      name: "名前",
      contents: "松本昌亮(まつもと まさあき)",
    },
    // {
    //   name: "活動名",
    //   contents: "mattsunkun",
    // },
    {
      name: "誕生日🎂",
      contents: "2002年12月21日",
    },
    {
      name: "所属",
      contents: "名古屋大学（大学院）",
    },
    {
      name: "専攻",
      contents: "コンピュータ科学科知能システム系",
    },
    {
      name: "ジーメールアドレス✉️",
      contents: "mattsunkun1221",
    },
    {
      name: "Atcoder",
      contents: "水色💧",
    },
    {
      name: "好きな食べ物",
      contents: "たこやき🐙",
    },
    {
      name: "好きなアーティスト🎤",
      contents: "ロクデナシ",
    },
    {
      name: "最近のブーム",
      contents: "腹筋ローラー💪",
    },
    {
      name: "好きなゲーム",
      contents: "シレン,ピクミン,スマブラ",
    },
    {
      name: "意外な特技",
      contents: "世界地図や国旗の暗記",
    },
    {
      name: "ひとこと",
      contents: "Hello World!!", // "お友達とおしゃべりするのが大好きです\n仲良くなりましょ！！"
    },
  ],
  directories: [
    dirImages,
  ],
}

export default dirInfo;