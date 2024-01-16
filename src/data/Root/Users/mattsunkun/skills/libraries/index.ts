import { directory } from "src/data/Root";

const dirLibraries: directory = {
  name: "libraries",
  files: [
    {
      name: "Beautiful Soup 4",
      contents: "モジュールをインポートすることで， 様々なmarkup languageを解析できる点が大好きです． ",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/third-bs4-408.png`,
        imgRightsLink: "https://blog.devgenius.io/introduction-to-beautiful-soup-a-python-library-for-web-scraping-21cacb9cf088",
      }
    },
    {
      name: "NumPy",
      contents: "行列が関わる計算では無意識に利用しています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-numpy-384.png`,
        imgRightsLink: "https://techicons.dev/icons/numpy",
      },
    },
    {
      name: "GraphQL",
      contents: "バイトで少し触りました． 構造を持つデータ同士の関係があるときは，RESTよりも使いやすいのかな．．？",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-graphql-384.png`,
        imgRightsLink: "https://techicons.dev/icons/graphql",
      }
    },
    {
      name: "Material UI",
      contents: "このサイトで使っています． いい感じにカッコよく作れるので好きです！！",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-materialui-384.png`,
        imgRightsLink: "https://techicons.dev/icons/materialui",
      }
    },
    {
      name: "Matter.js",
      contents: "このポートフォリオのこの画面で使っています． ReactのuseStateと相性が悪い気がします(?)．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/official-matterjs-420.png`,
        imgRightsLink: "https://github.com/liabru/matter-js?tab=readme-ov-file",
      }
    },
    {
      name: "Matplotlib",
      contents: "何かしらのグラフを描画したいときに無意識に使っています． 記述流儀はオブジェクト指向です．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-matplotlib-384.png`,
        imgRightsLink: "https://techicons.dev/icons/matplotlib",
      }
    },
    {
      name: "PyTorch",
      contents: "競艇の予想AI(3層のNN)を作成する上で，利用しました． まだまだ使いこなせていません．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-pytorch-384.png`,
        imgRightsLink: "https://techicons.dev/icons/pytorch",
      }
    },
    {
      name: "Requests",
      contents: "使う時はbs4とほぼセットです． 自動化するときはDoS攻撃しないように気をつけないと．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/wiki-requests-420.png`,
        imgRightsLink: "https://ja.m.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Requests_Python_Logo.png",
      }
    },
    {
      name: "Scikit-learn",
      contents: "機械学習の基本的な学習や， データセットをインポートするのに使っています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-scikitLearn-384.png`,
        imgRightsLink: "https://techicons.dev/icons/scikitlearn",
      }
    },
    {
      name: "SQLAlchemy",
      contents: "MySQLをバックエンドのPythonから操作するときに使ったORMです． SQLインジェクション対策のためにもORMは大事だと思います．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-sqlAlchemy-384.png`,
        imgRightsLink: "https://techicons.dev/icons/sqlalchemy",
      }
    },
    {
      name: "Three.js",
      contents: "バイトで使ったことがあります． 当時初めて四元数という概念を知りました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/libraries/techicons-threejs-384.png`,
        imgRightsLink: "https://techicons.dev/icons/threejs",
      }
    },
  ],
  directories: [

  ],
}

export default dirLibraries;