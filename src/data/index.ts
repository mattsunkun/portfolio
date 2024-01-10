import { ePage } from "../pages";


export type directory = {
  name: string,
  files: file[],
  directories: directory[],
  noPermission?: boolean,
  isHome?: boolean,
}

export type file = {
  name: string,
  contents: string,
  executable?: boolean,
  hidden?: boolean,
  // noPermission?: boolean,

}

const Root: directory = {
  name: "",
  files: [

  ],
  directories: [
    {
      name: "bin",
      files: [
        {
          name: "pwd",
          contents: "ぱすわーど笑笑",
          executable: true,
        },
        {
          name: "cat", // 猫とかをエイリアスにしたい．
          contents: "binary of the にゃーにゃーにゃー",
          executable: true,
        },
        {
          name: "cd",
          contents: "usually build in command butbinary of the ちぇんじ　ざ　でぃれくとり",
          executable: true,
        },
        {
          name: "ls",
          contents: "binary of the りすと　ざ　せぐめんつ",
          executable: true,
        },
        {
          name: "which",
          contents: "binary of the whitch",
          executable: true,
        }
      ],
      directories: [],
    },
    {
      name: "Users",
      files: [],
      directories: [
        {
          name: "admin",
          files: [
            {
              name: "secret",
              contents: "ひみつ",
              executable: true, // 隠しコマンド
            },
          ],
          directories: [],
          noPermission: true,
        },
        {
          name: "mattsunkun",
          isHome: true,
          files: [
            {
              name: ".matshrc",
              contents: "えいりあす 猫=cat;いきすぽーと ぱす=/bin だけど，オブジェクトの参照的なお話で，directoryは書き換えできない．",
              hidden: true,
            },
          ],
          directories: [
            // スキルとか．
            {
              name: "skills",
              files: [],
              directories: [],

            },
          ],
        }
      ]
    }
  ],
}

export default Root;

export enum eKinds {
  // Skills
  software = "Software",
  language = "Language",
  framework = "Framework",

  // Works
  hobby = "Hobby",
  job = "Job",

  // Qualification
  it = "IT",
  nonIt = "None IT"
}

export enum eSkillKinds {
  software = "Software",
  language = "Language",
  framework = "Framework",
}

export enum eWorkKinds {
  hobby = "Hobby",
  job = "Job",
}

export enum eQualificationKinds {
  it = "IT",
  nonIt = "None IT"
}

export type tAbility = {
  id: string,
  kind: eKinds, // 
  title: string,
  link: string,
  img: string,
  since: Date,
  passed: boolean,
  description: string,
  relLink: string,
  relIds: string[]
}


// export type tWork = tAbility & {

// }

// const abilities: tAbility[] = [
//   // language
//   {
//     id: "idPython",
//     kind: eKinds.language,
//     title: "Python",
//     link: ePage.skills,
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     since: new Date(2021, 4, 1),
//     passed: true,
//     description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
//     relLink: "https://www.python.org/",
//     relIds: []
//   },

//   {
//     id: "idJavaScript",
//     kind: eKinds.language,
//     title: "JavaScript",
//     link: ePage.skills,
//     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     since: new Date(2021, 4, 1),
//     passed: true,
//     description: "初めての開発バイトや，拡張機能の作成に利用しました．",
//     relLink: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
//     relIds: []
//   },

//   // <it>

//   // {
//   //   id: "idBrown",
//   //   kind: eKinds.it,
//   //   title: "入茶",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
//   //   since: new Date(2023, 11, 4),
//   //   passed: false,
//   //   description: "基本的なアルゴリズム(累積和・いもす法・Union-Find・二分探索・DFS・BFS・DP・ダイクストラ法・ワーシャルフロイド法・クラスカル法など)を学び，コンテストに挑み続けました．",
//   //   relLink: "https://atcoder.jp/users/mattsunkun/history/share/abc327",
//   //   relIds: []
//   // },
//   // {
//   //   id: "idAp",
//   //   kind: eKinds.it,
//   //   title: "応用情報技術者",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/ipa.png`,
//   //   since: new Date(2023, 10, 8),
//   //   passed: false,
//   //   description: "学部3年生の夏に勉強して取得しました．",
//   //   relLink: "https://www.ipa.go.jp/shiken/kubun/ap.html",
//   //   relIds: []
//   // },
//   // {
//   //   id: "idGray",
//   //   kind: eKinds.it,
//   //   title: "入灰",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/atcoder.svg`,
//   //   since: new Date(2023, 9, 23),
//   //   passed: false,
//   //   description: "Atcoderに初めて参加しました．計算量を意識する重要性を再確認させられました．",
//   //   relLink: "https://atcoder.jp/users/mattsunkun/history/share/abc321",
//   //   relIds: []
//   // },
//   // </it>
//   // <non-it>
//   // {
//   //   id: "idToeic870",
//   //   kind: eKinds.nonIt,
//   //   title: "Toeic Listening&Reading",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/toeic.png`,
//   //   since: new Date(2023, 12, 10),
//   //   passed: false,
//   //   description: "ToeicのListening&Readingが大学院入試で必要であったため受験しました．LとRがそれぞれ460点，410点で，合計870点でした．受験前に過去問を3回ほど解きました．",
//   //   relLink: "https://atcoder.jp/users/mattsunkun/history/share/abc321",
//   //   relIds: []
//   // },
//   // {
//   //   id: "idDCosmetic",
//   //   kind: eKinds.nonIt,
//   //   title: "日本化粧品検定　 　3級",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/cosmetic.png`,
//   //   since: new Date(2022, 6, 18),
//   //   passed: false,
//   //   description: "友達とノリで受けました．",
//   //   relLink: "https://cosme-ken.org/",
//   //   relIds: []
//   // },
//   // {
//   //   id: "idDriverAutomatic",
//   //   kind: eKinds.nonIt,
//   //   title: "普通自動車第一種運転免許(AT限定)",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/irasutoyaDriver.png`,
//   //   since: new Date(2021, 9, 1),
//   //   passed: false,
//   //   description: "大学1年生の頃，通いでとりました．父にはマニュアルを勧められましたが，オートマにしました．最近マニュアルも運転したいと思い始めているので，若干後悔しています．",
//   //   relLink: "https://www.pref.aichi.jp/police/menkyo/tetsuzuki/shozaichi/menkyo/toiawasesaki.html",
//   //   relIds: []
//   // },
//   // {
//   //   id: "idEikenPre1",
//   //   kind: eKinds.nonIt,
//   //   title: "実用英語技能検定準一級",
//   //   link: ePage.skills,
//   //   img: `${process.env.PUBLIC_URL}/images/eiken.png`,
//   //   since: new Date(2019, 11, 1),
//   //   passed: false,
//   //   description: "アメリカに住んでいた頃に培った，ライティング・リスニング・スピーキングは特に勉強しませんでしたが，単語力が心配だったので，それを頑張って勉強した記憶があります．",
//   //   relLink: "https://atcoder.jp/users/mattsunkun/history/share/abc321",
//   //   relIds: []
//   // },
//   // </non-it>
// ]

// export default abilities;