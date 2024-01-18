import { directory } from "src/data/fileSystem";

const dirQualifications: directory = {
  name: "qualifications",
  files: [
    {
      name: "実用英語技能検定準一級",
      contents: "高校生の頃取得しました．アメリカに住んでいた頃に培った，ライティング・リスニング・スピーキングは特に勉強しませんでしたが，単語力が心配だったので，それを頑張って勉強した記憶があります．(合格/)",
      meta: {
        start: new Date(2019, 11, 1),
        urls: ["https://www.eiken.or.jp/eiken/",],
        priority: 1,
      }
    },
    {
      name: "普通自動車第一種運転免許(AT限定)",
      contents: "大学1年生の頃，通いでとりました．父にはマニュアルを勧められましたが，オートマにしました．最近マニュアルも運転したいと思い始めているので，若干後悔しています．(取得/)",
      meta: {
        start: new Date(2021, 9, 1),
        urls: ["https://www.pref.aichi.jp/police/menkyo/tetsuzuki/shozaichi/menkyo/toiawasesaki.html",],
        priority: 2,
      }
    },
    {
      name: "日本化粧品検定3級",
      contents: "CBTで，いつでも何回でも受けれて，受験費が無料だったので，友人とノリで受けました．3,4回目くらいで合格した記憶があります．(合格/)",
      meta: {
        start: new Date(2022, 6, 18),
        urls: ["https://cosme-ken.org/",],
        priority: 2,
      }
    },
    {
      name: "Atcoder入灰",
      contents: "Atcoderに初めて参加しました．計算量を意識する重要性を再確認させられました．(/)",
      meta: {
        start: new Date(2023, 9, 23),
        urls: ["https://atcoder.jp/users/mattsunkun/history/share/abc327",],
        priority: 0,
      }
    },
    {
      name: "応用情報技術者",
      contents: "学部3年生の夏に勉強して取得しました．合格証書がまだ届いていないので，日付は受験したときになっています．(合格/)",
      meta: {
        start: new Date(2023, 10, 8),
        urls: ["https://www.ipa.go.jp/shiken/kubun/ap.html",],
        priority: 0,
      }
    },
    {
      name: "Atcoder入茶",
      contents: "基本的なアルゴリズム(累積和・いもす法・Union-Find・二分探索・DFS・BFS・DP・ダイクストラ法・ワーシャルフロイド法・クラスカル法など)を学び，コンテストに挑み続けました．(/)",
      meta: {
        start: new Date(2023, 11, 4),
        urls: ["https://atcoder.jp/users/mattsunkun/history/share/abc327",],
        priority: 0,
      }
    },
    {
      name: "Toeic_L&R_870点",
      contents: "ToeicのListening&Readingが大学院入試で必要であったため受験しました．LとRがそれぞれ460点，410点で，合計870点でした．受験前に過去問を3回ほど解いて挑みました．(取得/)",
      meta: {
        start: new Date(2023, 12, 10),
        urls: ["https://www.iibc-global.org/toeic.html",],
        priority: 0,
      }
    },
    {
      name: "Atcoder入緑",
      contents: "毎週のABCをE,Fあたりまで復習し続けました．(/)",
      meta: {
        start: new Date(2024, 1, 6),
        urls: ["https://atcoder.jp/users/mattsunkun/history/share/abc335"],
        priority: 0,
      }
    },
  ],
  directories: [

  ],
}

export default dirQualifications;