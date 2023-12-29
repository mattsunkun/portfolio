import { tAbility } from "./base"

export enum eSkill {
  language = "Language",
  framework = "FrameWork",
  software = "Software",
  hardware = "Hardware",
  platform = "Platform",
};

export type tSkill = tAbility & {
  exp: Number,
  officialUrl: string,
  skill: eSkill,
};

const skills: tSkill[] = [
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
]

export default skills;