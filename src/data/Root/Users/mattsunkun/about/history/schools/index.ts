import { directory } from "src/data/fileSystem";

const dirSchools: directory = {
  name: "schools",
  files: [
    {
      name: "東海市立大田小学校",
      contents: "冬でも半袖半ズボンの小学生でした．(入学/転校)",
      meta: {
        start: new Date(2009, 4, 1),
        end: new Date(2014, 4, 1),
        urls: ["https://www.edtokai.jp/ota-e/"],
        priority: 2
      }
    },
    {
      name: "Picadome　Elementary",
      contents: "父の仕事の都合で，アメリカに住み始めてすぐに入学しました．当時，英語は「Hello」すら読めませんでした．(転入/卒業)",
      meta: {
        start: new Date(2014, 4, 1),
        end: new Date(2014, 6, 1),
        urls: ["https://picadome.fcps.net/"],
        priority: 2
      }
    },
    {
      name: "Central　Kentucky　Japanese　School",
      contents: "平日は現地校に通い，毎週土曜日はこの日本人補習校に通っていました． (転入/卒業)",
      meta: {
        start: new Date(2014, 4, 1),
        end: new Date(2017, 5, 1),
        urls: ["https://www.ckjs.org/Home.php"],
        priority: 2
      }
    },
    {
      name: "Jessie　Clark　Middle　School",
      contents: "この中学校を卒業する頃には，それなりに英語が喋れるようになってました．(入学/卒業)",
      meta: {
        start: new Date(2014, 9, 1),
        end: new Date(2017, 5, 1),
        urls: ["https://jessieclark.fcps.net/"],
        priority: 2
      }
    },
    {
      name: "東海市立横須賀中学校",
      contents: "父の仕事の関係で日本に帰国して入学した地元の中学です．(転入/卒業)",
      meta: {
        start: new Date(2017, 5, 1),
        end: new Date(2018, 3, 1),
        urls: ["https://www.edtokai.jp/yokosuka-j/"],
        priority: 2
      }
    },
    {
      name: "国立名古屋大学教育学部附属高等学校",
      contents: "様々な青春が詰まった高校生活でした．ちなみに，高校の情報の授業でBASIC言語を触ったのが初めてのプログラミングでした．(入学/卒業)",
      meta: {
        start: new Date(2018, 4, 1),
        end: new Date(2021, 3, 1),
        urls: ["https://highschl.educa.nagoya-u.ac.jp/"],
        priority: 1
      }
    },
    {
      name: "名古屋大学情報学部コンピュータ科学科",
      contents: "授業外でもパソコンに触れて，勉学に勤しんでいます．(入学/卒業見込み)",
      meta: {
        start: new Date(2021, 4, 1),
        end: new Date(2025, 3, 1),
        urls: ["https://www.nagoya-u.ac.jp/"],
        priority: 0
      }
    },
  ],
  directories: [
  ],
}

export default dirSchools;