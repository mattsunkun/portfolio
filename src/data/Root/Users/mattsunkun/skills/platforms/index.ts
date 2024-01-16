import { directory } from "src/data/Root";

const dirPlatforms: directory = {
  name: "platforms",
  files: [
    {
      name: "AWS",
      contents: "AmazonWebServicesです． 約半年の実務経験がある他， Densoのクラウドコンテストに参加したことがあります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/platforms/techicons-aws-384.png`,
        imgRightsLink: "https://techicons.dev/icons/amazonwebservices",
      }
    },
    {
      name: "DetaSpace",
      contents: "無料のデプロイができるところが好きです．　ですが，日本語の資料が少ないため，近日中に日本語の資料を書きたいです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/platforms/official-detaspace-385.png`,
        imgRightsLink: "https://github.com/deta"
      }
    },
    {
      name: "GitHub",
      contents: "開発する時はほぼ使ってます． 個人開発でもpushしておくことで，データの冗長性が取れるので安心できます．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/platforms/techicons-github-384.png`,
        imgRightsLink: "https://techicons.dev/icons/github",
      }
    },
    {
      name: "Heroku",
      contents: "サービスのデプロイの練習やなどに使いました． 有料化に伴い，現在は使っていません．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/platforms/techicons-heroku-384.png`,
        imgRightsLink: "https://techicons.dev/icons/heroku",
      }
    },
    {
      name: "Vercel",
      contents: "Reactで書いたウェブアプリのデプロイ先にしています． いつかNext.jsもデプロイしたいです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/platforms/techicons-vercel-384.png`,
        imgRightsLink: "https://techicons.dev/icons/vercel",
      }
    }

  ],
  directories: []
};

export default dirPlatforms;