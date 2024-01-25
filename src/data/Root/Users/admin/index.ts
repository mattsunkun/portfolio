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
        "以下，スーパー言い訳タイムとかが始まります．",
        "タブ補完がパス指定のコマンドが無いし，隠しファイルまで存在してしまう．",
        "useStateが使えず，innerHTMLでskillsをやってて，skillsではthemeを切り替えるとダメになっちゃうね．",
        "コードも整理しないといけないし，",
        "parserが[-]とか[ ]をエスケープする仕組みもないし，(だから，[-]を[ー]にしたり，[ ]を[_]or[　]にすることでなんとかしたり，，，)",
        "まあ，最初は全部アンダーすこあにしようかなと思ったけど，それだとaboutでschoolsのスマホにおける表示がバグるからそこだけ[　]の対応にして，それ以外はアンダーすこあにしたんよね．",
        "確かに，一貫性を取るために，全部[　]にしてもいんだけど，最初にアンダーすこあにしてから気づいたし(メインの理由)，アンダーすこあの方がなんかかっこいいじゃん？？てかそこまで見てるやついないだろ．．",
        "仮に，そこの一貫性が取れていないところに気づいた人であれば，この僕の.debugノートも見てるから許してくれるよね😘",
        "いろいろやってないね.....",
        "いつかやる🦆",

      ].join(" "),
    }
  ],
  directories: [],
}

export default dirAdmin;