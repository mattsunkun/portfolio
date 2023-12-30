import { tAbility } from "./base"

export enum eSkill {
  language = "Language",
  framework = "FrameWork",
  library = "Library",
  software = "Software",
  hardware = "Hardware",
  platform = "Platform",
};

export type tSkill = tAbility & {
  exp: Number,
  officialUrl: string,
  skill: eSkill,
};

const language: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/python/python-original.svg`,
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
  {
    id: "idJs",
    title: "JavaScript",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/javascript/javascript-original.svg`,
    start: new Date(2021, 4, 1),
    description: "独特な性質にあまり慣れない言語です．初めての開発バイトや，拡張機能の作成に利用しました．",
    priority: 2,

    exp: -1,
    officialUrl: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
    skill: eSkill.language,
  },
];

const framework: tSkill[] = [
  {
    id: "idReact",
    title: "React",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/react/react-original.svg`,
    start: new Date(2021, 4, 1),
    description: "私はReact単体で使うというよりは，MAUIを使って，TypeScriptで記述しています．",
    priority: 2,

    exp: -1,
    officialUrl: "https://react.dev/",
    skill: eSkill.framework,
  },
];

const library: tSkill[] = [
  {
    id: "idNumpy",
    title: "Numpy",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/numpy/numpy-original.svg`,
    start: new Date(2021, 4, 1),
    description: "Pythonで数値を扱うときはよく使ってます．特に行列が絡むと無意識に使いがちです．",
    priority: 2,

    exp: -1,
    officialUrl: "https://numpy.org/",
    skill: eSkill.library,
  },
];

const software: tSkill[] = [
  {
    id: "idGit",
    title: "Git",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/git/git-original.svg`,
    start: new Date(2021, 4, 1),
    description: "個人開発において，(ほぼ)必ず使うバージョン管理ツールです．",
    priority: 2,

    exp: -1,
    officialUrl: "https://git-scm.com/",
    skill: eSkill.software,
  },
];

const hardware: tSkill[] = [
  {
    id: "idRaspberryPi",
    title: "Raspberry PI",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/raspberrypi/raspberrypi-original.svg`,
    start: new Date(2021, 4, 1),
    description: "LAN，OSなどの幅広いお勉強に役立てています．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.raspberrypi.com/",
    skill: eSkill.hardware,
  },
];

const platform: tSkill[] = [
  {
    id: "idAws",
    title: "Amazon Web Services",
    img: `${process.env.PUBLIC_URL}/images/skills/icon/amazonwebservices/amazonwebservices-original.svg`,
    start: new Date(2021, 4, 1),
    description: "Lambda，ApiGatewayとかが好きです．",
    priority: 2,

    exp: -1,
    officialUrl: "https://aws.amazon.com/",
    skill: eSkill.platform,
  },
];


const skills: tSkill[] = [...language, ...framework, ...library, ...software, ...hardware, ...platform];
export default skills;