import { directory } from "src/data/Root";

const dirSoftware: directory = {
  name: "software",
  files: [
    {
      name: "Blender",
      contents: "3Dプリンターを使うときのモデル作成で利用しました．",
    },
    {
      name: "Docker",
      contents: "簡単に環境構築できる点に気に入っています．",
      meta: { img: "" },
    },
    {
      name: "Git",
      contents: "個人開発でほぼ必ず利用しているバージョン管理システムです．"
    },
    {
      name: "MySQL",
      contents: "友人と作成したウェブアプリのバックエンドで利用しました．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/software/icons8-mysql-480.png` },
    },
    {
      name: "OBS Studio",
      contents: "YouTubeでの動画配信をする上で利用しました．"
    },
    {
      name: "Subversion",
      contents: "開発バイトでしばしば利用するバージョン管理システムです．"
    },
    {
      name: "Visual Studio",
      contents: "開発バイトでしばしば利用するエディタです．",
    },
    {
      name: "Visual Studio Code",
      contents: "個人開発でよく利用するエディタです．"
    },
    {
      name: "桐",
      contents: "バイトで桐のデータベースを解析したことがあります．"
    },
  ],
  directories: [

  ],
}

export default dirSoftware;