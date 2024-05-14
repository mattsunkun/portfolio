import { directory } from "src/data/fileSystem";

const dirHobbies: directory = {
  name: "hobbies",
  files: [
    {
      name: "ADKILLER",
      contents: "サークルのハッカソン(4日)で作りました．ウザい広告を避けゲーに導入したゲームです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/adkiller.png`,
        imgRightsLink: "",
        start: new Date(2024, 5, 1),
        period: 0,
        urls: [
          "https://adkiller.vercel.app/",
          "https://github.com/mattsunkun/jackHack2024_F",
        ]
      }
    },
    {
      name: "けいさんゲーム(Android)",
      contents: "「再プレーできない致命的なエラーを含む」初めて作ったネイティブアプリです．", //広告付与するのも大変だなぁ．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/mathing.png`,
        imgRightsLink: "",
        start: new Date(2024, 2, 1),
        period: 2,
        urls: [
          // いつか/works/mathing/ページを作る
          // "/", //"http://localhost:3000",
          "https://play.google.com/store/apps/details?id=com.mygame.android.mathing",
          "https://github.com/mattsunkun/mathing",
        ]
      }
    },
    {
      name: "ポートフォリオ",
      contents: "このウェブサイトです．自分の情報をディレクトリ構造でまとめる工夫をしました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/portfolio.png`,
        imgRightsLink: "",
        start: new Date(2023, 12, 1),
        period: 1,
        urls: [
          "/", //"http://localhost:3000",
          "https://github.com/mattsunkun/portfolio",
        ]
      }
    },
    {
      name: "LANケーブル修正動画",
      contents: "UTPケーブルを修正する解説動画を作成しました．編集する上で一部Pythonを使いました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/lan-cable-rta.png`,
        imgRightsLink: "",
        start: new Date(2023, 12, 1),
        period: 1,
        urls: [
          "https://www.youtube.com/watch?v=8hBmsM16u_8",
          "https://github.com/mattsunkun/lan-cable-RTA",
        ]
      }
    },

    {
      name: "簿記管理アプリ",
      contents: "グーグルフォームで取引を記述し，スプシに自動で仕訳をするアプリを作成しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/boki.png`,
        imgRightsLink: "",
        start: new Date(2023, 9, 1),
        period: 2,
        urls: [
          "",
          "https://github.com/mattsunkun/bookkeeping",
        ],
      }
    },
    {
      name: "うにばーす",
      contents: "サークルのハッカソンで作成しました．初めてメンターを務めたウェブ開発です．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/unibirth.png`,
        imgRightsLink: "",
        start: new Date(2023, 5, 1),
        period: 1,
        urls: [
          "https://unibirth-mattsunkun.vercel.app/",
          "https://github.com/mattsunkun/unibirth",
        ],
      }
    },
    {
      name: "競艇予想AI",
      contents: "競艇の過去データを3層のニューラルネットワークに学習させました．精度は，お気持ちです．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/kyotei-ai.png`,
        imgRightsLink: "https://ja.wikipedia.org/wiki/%E7%AB%B6%E8%89%87#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Amagasaki-kyotei-11.jpg",
        start: new Date(2022, 8, 1),
        period: 3,
        urls: [
          "",
          "https://github.com/mattsunkun/nn_boat",
        ]
      }
    },
    {
      name: "NigiriBot",
      contents: "好きなゲームキャラのTwitterのBotを作りました．APIの有料化に伴い今は停止中です．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/nigiri.png`,
        imgRightsLink: "https://www.spike-chunsoft.co.jp/terms/",
        start: new Date(2022, 8, 1),
        period: 1,
        urls: [
          "https://twitter.com/NigiriBot",
          "https://github.com/mattsunkun/nigiri",

        ]
      }
    },
    {
      name: "おうむがえしBot",
      contents: "おうむがえしをするだけのLineBotを作成しました．サーバー有料化に伴い今は停止中です．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/line.png`,
        imgRightsLink: "https://www.lycbiz.com/jp/logo/",
        start: new Date(2022, 6, 1),
        period: 1,
        urls: [
          "",
          "https://github.com/mattsunkun/expering_line_api",
        ]
      }
    },
    {
      name: "弊学サイト可視化ツール",
      contents: "弊学の公式サイト(NUCT, TACT)を時間割順に見やすくした拡張機能を作成しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/nu.png`,
        imgRightsLink: "https://education.joureikun.jp/thers_ac/act/frame/frame110000096.htm",
        start: new Date(2022, 5, 1),
        period: 1,
        urls: [
          "",
          "https://github.com/mattsunkun/nuct",
        ]
      }
    },
    {
      name: "カテナリー曲線コップ",
      contents: "3Dプリンターでコップを作成しました．ですが，材質が水に溶けるので，機能しません．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/catenary.png`,
        imgRightsLink: "",
        start: new Date(2022, 4, 1),
        period: 1,
        urls: [
          "",
          "https://github.com/mattsunkun/blender_catenary",
        ]
      }
    },
    {
      name: "マイコンの初期設定",
      contents: "Raspberry Pi 4を使って，固定IPによるSSHなどの簡単な通信を確立させました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/works/hobbies/raspberrypi4.png`,
        imgRightsLink: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
        start: new Date(2021, 8, 1),
        period: 1,
        urls: [
          "",
          "",
        ]
      }
    },
  ],
  directories: [

  ],
}

export default dirHobbies;