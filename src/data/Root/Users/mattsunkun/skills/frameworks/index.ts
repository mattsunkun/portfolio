import { directory } from "src/data/fileSystem";

const dirFrameworks: directory = {
  name: "frameworks",
  files: [
    {
      name: "(ドットネット).NET",
      contents: "実務経験のあるフレームワークです(Coreだけでなく，MAUIも少しできます)． 保守を意識したコードが書けると思います．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/icons8-dotnet-480-9.png`,
        imgRightsLink: "https://icons8.jp/icon/1BC75jFEBED6/%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF",
      },
    },
    {
      name: "Django",
      contents: "初めて使ったPythonのバックエンドフレームワークです． 実装が重たいので今ではあまり使いません．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-django-480-8.png`,
        imgRightsLink: "https://techicons.dev/icons/django",
      },

    },
    {
      name: "FastAPI",
      contents: "一番使い慣れているバックエンドのフレームワークです． 実装のシンプルなところが好きです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-fastapi-480-8.png`,
        imgRightsLink: "https://techicons.dev/icons/fastapi",
      },

    },
    {
      name: "Flutter",
      contents: "友人とBLEを使ったアプリを作成するときに，初めて利用しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-flutter-384.png`,
        imgRightsLink: "https://techicons.dev/icons/flutter",
      }
    },
    {
      name: "Node.js",
      contents: "JavaScript(TypeScript)をローカルで実行したい時に使っています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-nodejs-384.png`,
        imgRightsLink: "https://techicons.dev/icons/nodejs",
      }
    },
    {
      name: "React",
      contents: "一番使い慣れているウェブフロントエンドのフレームワークです． いつかNext.jsにも手を出したいです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/frameworks/icons8-react-480-9.png`,
        imgRightsLink: "https://icons8.jp/icon/123603/react-native",
      },

    },



  ],
  directories: [],
}

export default dirFrameworks;