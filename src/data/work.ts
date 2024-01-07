import { tAbility } from "./base"

export enum eWork {
  job = "Job",
  hobby = "Hobby",
};

export type tWork = tAbility & {
  period: Number,
  workUrl: string,
  codeUrl: string,
  work: eWork,
  skillIds: string[],  // これはSkillsの中で探索しよう．
};

const jobs: tWork[] = [

  {
    id: "idForm2",
    title: "システム開発",
    img: "",
    start: new Date(2023, 9, 1),
    description: "WindowsのFormアプリケーションをC#の.Netフレームワークで開発(共同開発)(その2)",
    priority: 2,

    period: 2,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idCSharp", "idDotNet", "idSubversion"]
  },

  {
    id: "idMaui",
    title: "技術調査",
    img: "",
    start: new Date(2023, 5, 1),
    description: ".NetのMAUIの技術調査",
    priority: 2,

    period: 1,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idCSharp", "idMaui"]
  },

  {
    id: "idForm1",
    title: "システム開発",
    img: "",
    start: new Date(2023, 1, 1),
    description: "WindowsのFormアプリケーションをC#の.Netフレームワークで開発(共同開発)(その1)",
    priority: 2,

    period: 4,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idCSharp", "idDotNet", "idSubversion"]
  },

  {
    id: "idAws",
    title: "ウェブ・クラウド開発",
    img: "",
    start: new Date(2022, 12, 1),
    description: "友人とウェブアプリケーションを共同開発する上で，AWSサービス(IAM, DynamoDB, S3, ApiGateway)を利用し，フロントはReactのTypeScriptで記述した．(共同開発)",
    priority: 2,

    period: 8,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idGit", "idGitHub", "idAWS", "idPython", "idGraphQL", "idReact", "idMui", "idTs"]
  },

  {
    id: "idOpenCv",
    title: "システム開発",
    img: "",
    start: new Date(2022, 10, 1),
    description: "OpenCvを用いた画像処理プログラムの作成",
    priority: 2,

    period: 3,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["Python", "idOpenCv"]
  },

  {
    id: "idKiri",
    title: "データベース解析",
    img: "",
    start: new Date(2021, 11, 1),
    description: "桐データベースの解析",
    priority: 2,

    period: 3,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idKiri"]
  },

  {
    id: "idEden3js",
    title: "システム開発",
    img: "",
    start: new Date(2021, 9, 1),
    description: "ベクトル演算を用いた空間座標の計算アルゴリズムの構築(共同開発)",
    priority: 2,

    period: 2,
    workUrl: "これは掲載できるのか？",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idJs", "Python", "id3js", "idGit", "idGitHub"]
  },

  {
    id: "idFriendProfile",
    title: "ウェブ開発",
    img: "",
    start: new Date(2021, 9, 1),
    description: "友人のポートフォリオ作成．現在はアクセス不可能",
    priority: 2,

    period: 2,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["idJs", "idReact", "idMui", "idGit", "idGitHub"]
  },

];

const hobbies: tWork[] = [
  {
    id: "idPortfolio",
    title: "ポートフォリオ",
    img: `${process.env.PUBLIC_URL}/images/portfolio.png`,
    start: new Date(2023, 12, 1),
    description: "自分に関する情報を別ファイルで定義する工夫をした．",
    priority: 2,

    period: 1,
    workUrl: "http://localhost:3000",
    codeUrl: "https://github.com/mattsunkun/portfolio",
    work: eWork.hobby,
    skillIds: ["idTs", "idReact", "idMui", "idGit", "idGitHub"]
  },

  {
    id: "idLanRta",
    title: "LANケーブル修正動画",
    img: `${process.env.PUBLIC_URL}/images/portfolio.png`,
    start: new Date(2023, 12, 1),
    description: "自分に関する情報を別ファイルで定義する工夫をした．",
    priority: 2,

    period: 1,
    workUrl: "http://localhost:3000",
    codeUrl: "https://github.com/mattsunkun/portfolio",
    work: eWork.hobby,
    skillIds: ["idTs", "idReact", "idMui", "idGit", "idGitHub"]
  },
  {
    id: "idUnibirth",
    title: "うにばーす(ウェブアプリ)",
    img: `${process.env.PUBLIC_URL}/images/unibirth.png`,
    start: new Date(2023, 5, 1),
    description: "プログラミングサークルの新入生6人ほどで作った．私は初めてメンターを務め，コードは基本的に書かずに，新入生の環境構築・コードのアドバイスにまわった．",
    priority: 2,

    period: 1,
    workUrl: "https://unibirth-mattsunkun.vercel.app/",
    codeUrl: "https://github.com/mattsunkun/unibirth",
    work: eWork.hobby,
    skillIds: ["idJs", "idReact", "idGit", "idGitHub"]
  },


  {
    id: "idKyotei",
    title: "競艇予想er(AI)",
    img: `${process.env.PUBLIC_URL}/images/kyotei.jpg`,
    start: new Date(2022, 9, 1),
    description: "競艇の過去データをスクレイピングし，そのデータを教師データとした3層のニューラルネットワークの個人開発",
    priority: 2,

    period: 3,
    workUrl: "",
    codeUrl: "https://github.com/mattsunkun/nn_boat",
    work: eWork.hobby,
    skillIds: ["idPython", "idRequests", "idBs4", "idPyTorch", "idPandas", "idZsh", "idGit", "idGitHub"]
  },
  {
    id: "idNigiriBot",
    title: "妖怪にぎり変化Bot(Twitter Bot)",
    img: `${process.env.PUBLIC_URL}/images/nigiri.png`,
    start: new Date(2022, 8, 1),
    description: "好きなゲームに登場するキャラクターのBotの個人開発.サーバーは自分のローカルPCのcronを利用していた．Twitter API有料化に伴い休止．（シークレット消さないと．（NIGIRIに限らず，JOBのNGも．））",
    priority: 2,

    period: 1,
    workUrl: "https://twitter.com/NigiriBot",
    codeUrl: "https://github.com/mattsunkun/nigiri",
    work: eWork.hobby,
    skillIds: ["idPython", "idOpenCv", "idCron", "idGit", "idGitHub"]
  },
  {
    id: "idLineBot",
    title: "おうむがえしBot(Line Bot)",
    img: `${process.env.PUBLIC_URL}/images/line.png`,
    start: new Date(2022, 6, 1),
    description: "おうむ返しをするBotの個人開発．サーバーにHerokuを利用していたが，有料化に伴い休止．",
    priority: 2,

    period: 1,
    workUrl: "",
    codeUrl: "https://github.com/mattsunkun/expering_line_api",
    work: eWork.hobby,
    skillIds: ["idPython", "idGit", "idGitHub"]
  },

  {
    id: "idNuct",
    title: "弊学サイト(拡張機能)",
    img: `${process.env.PUBLIC_URL}/images/nuct.jpeg`,
    start: new Date(2022, 5, 1),
    description: "弊学の公式サイトを見やすくするための拡張機能の個人開発",
    priority: 2,

    period: 1,
    workUrl: "",
    codeUrl: "https://github.com/mattsunkun/nuct",
    work: eWork.hobby,
    skillIds: ["idJs", "idGit", "idGitHub"]
  },

  {
    id: "idCatenary",
    title: "カテナリー曲線コップ(3Dプリンター)",
    img: `${process.env.PUBLIC_URL}/images/catenary.jpeg`,
    start: new Date(2022, 5, 1),
    description: "Pythonで計算したカテナリー曲線を，Blenderを用いて3次元のカテナリー曲線を描画し，それを3Dプリンターでコップを作成した．",
    priority: 2,

    period: 1,
    workUrl: "",
    codeUrl: "https://github.com/mattsunkun/blender_catenary",
    work: eWork.hobby,
    skillIds: ["idPython", "idStl", "idGit", "idGitHub"]
  },

  {
    id: "idRaspberryPi",
    title: "マイコンの初期設定",
    img: `${process.env.PUBLIC_URL}/images/raspberrypi.jpg`,
    start: new Date(2022, 5, 1),
    description: "Raspberry Pi OSの導入， 固定IPによるssh接続の確立．大学3年生の授業でも似たことをやるが，当時はさらに知識が無い状態で頑張っていた．大変だった．",
    priority: 2,

    period: 1,
    workUrl: "",
    codeUrl: "",
    work: eWork.hobby,
    skillIds: ["idRaspberryPi"]
  },
];

const works: tWork[] = [...jobs, ...hobbies];
export default works;