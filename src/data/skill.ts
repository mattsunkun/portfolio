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
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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
    img: "",
    start: new Date(2021, 4, 1),
    description: "初めての開発バイトや，拡張機能の作成に利用しました．",
    priority: 2,

    exp: -1,
    officialUrl: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
    skill: eSkill.language,
  },
];

const framework: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
];

const library: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
];

const software: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
];

const hardware: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
];

const platform: tSkill[] = [
  {
    id: "idPython",
    title: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    start: new Date(2021, 4, 1),
    description: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
    priority: 2,

    exp: -1,
    officialUrl: "https://www.python.org/",
    skill: eSkill.language,
  },
];


const skills: tSkill[] = [...language, ...framework, ...library, ...software, ...hardware, ...platform];
export default skills;