import { directory } from "src/data/fileSystem";

const dirSoftware: directory = {
  name: "software",
  files: [
    {
      name: "Blender",
      contents: "3Dプリンターを使うときのモデル作成で利用しました． カテナリー曲線をPythonを呼び出して作成しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-blender-384.png`,
        imgRightsLink: "https://techicons.dev/icons/blender",
      }
    },
    {
      name: "Docker",
      contents: "環境依存せずに環境構築できる点が好きです． 普段はDocker-Composeと一緒に使います．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-docker-384.png`,
        imgRightsLink: "https://techicons.dev/icons/docker",
      }
    },
    {
      name: "Git",
      contents: "個人開発でほぼ必ず利用しているバージョン管理システムです． Gitの概念を掴むのに苦労しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-git-384.png`,
        imgRightsLink: "https://techicons.dev/icons/git",
      }
    },
    {
      name: "MySQL",
      contents: "友人と作成したウェブアプリのバックエンドで利用しました． 環境構築にDockerを使いました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-mysql-384.png`,
        imgRightsLink: "https://techicons.dev/icons/mysql",
      }
    },
    {
      name: "OBS_Studio",
      contents: "YouTube上でライブ配信をする上で利用しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/icon-icons-obs-384.png`,
        imgRightsLink: "https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/OBS-macOS-BigSur/189890",
      }
    },
    {
      name: "Shotcut",
      contents: "サークルで発表した動画編集で利用しました． 単調作業は.mltファイルを解析して，Pythonで自動化しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/icons8-shotcut-400.png`,
        imgRightsLink: "https://icons8.jp/icon/76pQ2rB1ve4t/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%E3%82%AB%E3%83%83%E3%83%88",
      }
    },
    {
      name: "Subversion",
      contents: "開発バイトでしばしば利用するバージョン管理システムです． クライアントとして，TortoiseSVNを使っています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-subversion-384.png`,
        imgRightsLink: "https://techicons.dev/icons/subversion",
      }
    },
    {
      name: "Visual_Studio",
      contents: "開発バイトでしばしば利用するエディタです． 基本的な操作方法はわかります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-visualstudio-384.png`,
        imgRightsLink: "https://techicons.dev/icons/visualstudio",
      }
    },
    {
      name: "Visual_Studio_Code",
      contents: "個人開発でよく利用するエディタです． 拡張機能が乱雑に入っているので，いつか整理したいです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/techicons-vscode-384.png`,
        imgRightsLink: "https://techicons.dev/icons/vscode",
      }
    },
    {
      name: "桐",
      contents: "バイトで桐のデータベースを解析したことがあります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/software/official-kiri-480.png`,
        imgRightsLink: "https://www.kthree.co.jp/kihelp/index.html?page=hlp/tpc&type=html",
      }
    },
  ],
  directories: [

  ],
}

export default dirSoftware;