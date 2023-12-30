import { tAbility } from "./base"

export enum eQualification {
  it = "IT",
  nonIt = "None IT",
};

export type tQualification = tAbility & {
  subTitle: string,
  officialLink: string,
  kind: eQualification,
};

const it: tQualification[] = [
  {
    id: "idBrown",
    title: "Atcoder",
    img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
    start: new Date(2023, 11, 4),
    description: "基本的なアルゴリズム(累積和・いもす法・Union-Find・二分探索・DFS・BFS・DP・ダイクストラ法・ワーシャルフロイド法・クラスカル法など)を学び，コンテストに挑み続けました．",
    priority: 2,

    subTitle: "入茶",
    officialLink: "https://atcoder.jp/users/mattsunkun/history/share/abc327",
    kind: eQualification.it,
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
    kind: eQualification.it,
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
    kind: eQualification.it,
  },

  {
    id: "idDenso",
    title: "第3回 DENSOクラウドコンテスト",
    img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
    start: new Date(2023, 2, 25),
    description: "デンソー主催のAWSを利用したコンテスト．複数の課題が与えられ，AWSを利用することで，それらの課題を素早く解決するコンテスト．",
    priority: 2,

    subTitle: "参加",
    officialLink: "https://www.denso.com/global/en/",
    kind: eQualification.it,
  },
];

const nonIt: tQualification[] = [
  {
    id: "idToeic870",
    title: "Toeic Listening&Reading",
    img: `${process.env.PUBLIC_URL}/images/toeic.png`,
    start: new Date(2023, 12, 10),
    description: "ToeicのListening&Readingが大学院入試で必要であったため受験しました．LとRがそれぞれ460点，410点で，合計870点でした．受験前に過去問を3回ほど解きました．",
    priority: 3,

    subTitle: "870点",
    officialLink: "https://www.iibc-global.org/toeic.html",
    kind: eQualification.nonIt,
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
    kind: eQualification.nonIt,
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
    kind: eQualification.nonIt,
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
    kind: eQualification.nonIt,
  },
  {
    id: "idTeaching",
    title: "ジョーほーの教職免許",
    img: `${process.env.PUBLIC_URL}/images/toeic.png`,
    start: new Date(2023, 12, 10),
    description: "他にも，アルバイト経験を書きたい．0-1ゼミについても書きたい．jackについても書きたい．nttのインターンも，Ad構築，ウィンドウズサーバーも．Githubのリポジトリも何があるかとシークレットキー，アルバイトでどこまで書いていいか．一旦確認したい．",
    priority: 3,

    subTitle: "取得中",
    officialLink: "https://www.iibc-global.org/toeic.html",
    kind: eQualification.nonIt,
  },
];


const qualifications: tQualification[] = [...it, ...nonIt];
export default qualifications;