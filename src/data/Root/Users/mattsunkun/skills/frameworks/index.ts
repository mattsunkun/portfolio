import { directory } from "src/data/Root";

const dirFrameworks: directory = {
  name: "frameworks",
  files: [
    {
      name: "Django",
      contents: "大学1年生の頃，友人とウェブアプリを作ろうと思い，Djangoを使いました(挫折しました)．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-django-480.png` },

    },
    {
      name: "FastAPI",
      contents: "一番使い慣れているウェブバックエンドのフレームワークです．FastAPIのシンプルなところが好きです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/frameworks/techicons-fastapi-480.png` },

    },
    // {
    //   name: "MAUI",
    //   contents: "",
    //   meta: { img: "" },

    // },
    {
      name: ".NET",
      contents: "実務経験のあるフレームワークです．保守を意識した最低限のコードは書けると思います．また，MAUIも使えます．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/frameworks/icons8-dotnet-480.png` },
    },
    {
      name: "React",
      contents: "一番使い慣れているウェブフロントエンドのフレームワークです．いつかNext.jsにも手を出したいです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/frameworks/icons8-react-480.png` },

    },



  ],
  directories: [],
}

export default dirFrameworks;