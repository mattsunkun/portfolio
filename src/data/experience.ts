import { tAbility } from "./base";

export enum eExperience {
  univ = "University",
  high = "High School",
  lower = "Lower",
}

export type tExperience = tAbility & {
  relLink: string,
  kind: eExperience,
}

const univ: tExperience[] = [

  {
    id: "idDenso",
    title: "第3回 DENSOクラウドコンテスト",
    img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
    start: new Date(2023, 2, 25),
    description: "デンソー主催のAWSを利用したコンテスト．複数の課題が与えられ，AWSを利用することで，それらの課題を素早く解決するコンテスト．",
    priority: 2,

    relLink: "https://www.denso.com/global/en/",
    kind: eExperience.univ
  },
  {
    id: "idNikko",
    title: "日光街道",
    img: `${process.env.PUBLIC_URL}/images/nikko.jpg`,
    start: new Date(2022, 3, 1),
    description: "高校の頃の友人4,5人で東京の日本橋から栃木の日光東照宮まで(約147km)，「足のみ」を使って歩き切りました．途中，足がボロボロになり，非常に過酷な旅でしたが，達成感がありました．",
    priority: 3,

    relLink: "https://ja.wikipedia.org/wiki/%E6%97%A5%E5%85%89%E8%A1%97%E9%81%93",
    kind: eExperience.univ
  },

  {
    id: "idOdawara",
    title: "横浜→小田原",
    img: `${process.env.PUBLIC_URL}/images/odawara.jpeg`,
    start: new Date(2023, 3, 4),
    description: "高校の頃の友人4,5人で横浜から小田原まで「足のみ」を使って歩き切りました．日光街道よりは過酷ではありませんでしたが，それなりに大変な旅でした．",
    priority: 1,

    relLink: "https://ja.wikipedia.org/wiki/%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%B8%82",
    kind: eExperience.univ
  },
];
const high: tExperience[] = [

  {
    id: "idThailand",
    title: "イオン1%クラブ",
    img: `${process.env.PUBLIC_URL}/images/thailand.jpeg`,
    start: new Date(2019, 1, 1),
    description: "イオン株式会社出資の下で，Ambassador(大使)として，タイの高校生と交換留学をした．写真はタイの学校で出されたココナッツジュースです(美味しかった)．",
    priority: 1,

    relLink: "https://www.youtube.com/watch?v=gNuWDFUdfTg",
    kind: eExperience.high
  },

  {
    id: "idNy",
    title: "ニューヨーク研修",
    img: `${process.env.PUBLIC_URL}/images/ny.jpeg`,
    start: new Date(2018, 12, 1),
    description: "高校1年生の頃，ニューヨークの学生(Bard高校)と交換留学をしました．お互いに，調べたことを相手の高校で発表することがメインの研修です．自分がニューヨークに行った際には，英語で連分数の魅力について語りました．写真はエリス島を観光した時のものです．",
    priority: 1,

    relLink: "https://bhsec.bard.edu/manhattan/",
    kind: eExperience.high
  },

  {
    id: "idManabinoMori",
    title: "学びの杜・学術コース インフラ工学探究講座 受講",
    img: `${process.env.PUBLIC_URL}/images/manabinoMori.jpeg`,
    start: new Date(2018, 8, 16),
    description: "名古屋大学の教員を中心とする研究者たちが，各学問領域における物の見方・考え方等を解説．",
    priority: 1,

    relLink: "http://chet.educa.nagoya-u.ac.jp/wp-content/uploads/photo/f99e70c9248da84b274e8c0b9cf5694e.pdf",
    kind: eExperience.high
  },

  {
    id: "idNakatsugawa",
    title: "中津川プロジェクト 参加",
    img: `${process.env.PUBLIC_URL}/images/nakatsugawa.jpeg`,
    start: new Date(2018, 8, 6),
    description: "中津川市にて，高大連携で2泊3日で大学の授業などを体験した．",
    priority: 1,

    relLink: "https://chet.educa.nagoya-u.ac.jp/?page_id=86",
    kind: eExperience.high
  },

];

const experiences: tExperience[] = [...univ, ...high];
export default experiences;