import { tAbility } from "./base"

export enum eAchievement {
  it = "IT",
  nonIt = "None IT",
  self = "self"
};

export type tAchievement = tAbility & {
  subTitle: string,
  officialLink: string,
  achieve: eAchievement,
};

const it: tAchievement[] = [
  {
    id: "idBrown",
    title: "Atcoder",
    img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
    start: new Date(2023, 11, 4),
    description: "基本的なアルゴリズム(累積和・いもす法・Union-Find・二分探索・DFS・BFS・DP・ダイクストラ法・ワーシャルフロイド法・クラスカル法など)を学び，コンテストに挑み続けました．",
    priority: 2,

    subTitle: "入茶",
    officialLink: "https://atcoder.jp/users/mattsunkun/history/share/abc327",
    achieve: eAchievement.it,
  },

  {
    id: "idAp",
    title: "応用情報技術者試験",
    img: `${process.env.PUBLIC_URL}/images/ipa.png`,
    start: new Date(2023, 10, 8),
    description: "学部3年生の夏に勉強して取得しました．日付は受験したときです．",
    priority: 2,

    subTitle: "合格",
    officialLink: "https://www.ipa.go.jp/shiken/kubun/ap.html",
    achieve: eAchievement.it,
  },

  {
    id: "idGray",
    title: "Atcoder",
    img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
    start: new Date(2023, 9, 23),
    description: "Atcoderに初めて参加しました．計算量を意識する重要性を再確認させられました．",
    priority: 2,

    subTitle: "入灰",
    officialLink: "https://atcoder.jp/users/mattsunkun/history/share/abc327",
    achieve: eAchievement.it,
  },
];

const nonIt: tAchievement[] = [
  {
    id: "idToeic870",
    title: "Toeic Listening&Reading",
    img: `${process.env.PUBLIC_URL}/images/toeic.png`,
    start: new Date(2023, 12, 10),
    description: "ToeicのListening&Readingが大学院入試で必要であったため受験しました．LとRがそれぞれ460点，410点で，合計870点でした．受験前に過去問を3回ほど解きました．",
    priority: 3,

    subTitle: "870点",
    officialLink: "https://www.iibc-global.org/toeic.html",
    achieve: eAchievement.nonIt,
  },
  {
    id: "idCosmetic",
    title: "日本化粧品検定3級",
    img: `${process.env.PUBLIC_URL}/images/cosmetic.png`,
    start: new Date(2022, 6, 18),
    description: "CBTで，いつでも何回でも受けれて，受験費が無料だったので，友人とノリで受けました．3,4回目くらいで合格した記憶があります．",
    priority: 0,

    subTitle: "合格",
    officialLink: "https://cosme-ken.org/",
    achieve: eAchievement.nonIt,
  },
  {
    id: "idDriverAutomatic",
    title: "普通自動車第一種運転免許(AT限定)",
    img: `${process.env.PUBLIC_URL}/images/irasutoyaDriver.png`,
    start: new Date(2021, 9, 1),
    description: "大学1年生の頃，通いでとりました．父にはマニュアルを勧められましたが，オートマにしました．最近マニュアルも運転したいと思い始めているので，若干後悔しています．",
    priority: 1,

    subTitle: "取得",
    officialLink: "https://www.pref.aichi.jp/police/menkyo/tetsuzuki/shozaichi/menkyo/toiawasesaki.html",
    achieve: eAchievement.nonIt,
  },
  {
    id: "idPre1",
    title: "実用英語技能検定準一級",
    img: `${process.env.PUBLIC_URL}/images/eiken.png`,
    start: new Date(2019, 11, 1),
    description: "アメリカに住んでいた頃に培った，ライティング・リスニング・スピーキングは特に勉強しませんでしたが，単語力が心配だったので，それを頑張って勉強した記憶があります．",
    priority: 2,

    subTitle: "合格",
    officialLink: "https://www.eiken.or.jp/eiken/",
    achieve: eAchievement.nonIt,
  },
];

const self: tAchievement[] = [
  {
    id: "idNikko",
    title: "日光街道",
    img: `${process.env.PUBLIC_URL}/images/nikko.jpg`,
    start: new Date(2022, 3, 1),
    description: "高校の頃の友人4,5人で東京の日本橋から栃木の日光東照宮まで(約147km)，「足のみ」を使って歩き切りました．途中，足がボロボロになり，非常に過酷な旅でしたが，達成感がありました．",
    priority: 3,

    subTitle: "踏破",
    officialLink: "https://ja.wikipedia.org/wiki/%E6%97%A5%E5%85%89%E8%A1%97%E9%81%93",
    achieve: eAchievement.self,
  },

  {
    id: "idOdawara",
    title: "横浜→小田原",
    img: `${process.env.PUBLIC_URL}/images/odawara.jpeg`,
    start: new Date(2023, 3, 4),
    description: "高校の頃の友人4,5人で横浜から小田原まで「足のみ」を使って歩き切りました．日光街道よりは過酷ではありませんでしたが，それなりに大変な旅でした．",
    priority: 1,

    subTitle: "踏破",
    officialLink: "https://ja.wikipedia.org/wiki/%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%B8%82",
    achieve: eAchievement.self,
  },

  {
    id: "idThailand",
    title: "イオン1%クラブ",
    img: `${process.env.PUBLIC_URL}/images/thailand.jpeg`,
    start: new Date(2018, 1, 1),
    description: "イオン株式会社出資の下で，Ambassador(大使)として，タイの高校生と交換留学をした．写真はタイの学校で出されたココナッツジュースです(美味しかった)．",
    priority: 1,

    subTitle: "参加",
    officialLink: "https://www.youtube.com/watch?v=gNuWDFUdfTg",
    achieve: eAchievement.self,
  },

  {
    id: "idNy",
    title: "ニューヨーク研修",
    img: `${process.env.PUBLIC_URL}/images/ny.jpeg`,
    start: new Date(2018, 12, 1),
    description: "高校1年生の頃，ニューヨークの学生(Bard高校)と交換留学をしました．お互いに，調べたことを相手の高校で発表することがメインの研修です．自分がニューヨークに行った際には，英語で連分数の魅力について語りました．写真はエリス島を観光した時のものです．",
    priority: 1,

    subTitle: "参加",
    officialLink: "https://bhsec.bard.edu/manhattan/",
    achieve: eAchievement.self,
  },



  // 学びの杜を入れようかどうしようか
];

const achievements: tAchievement[] = [...it, ...nonIt, ...self];
export default achievements;