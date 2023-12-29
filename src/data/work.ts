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
    id: "idEden",
    title: "3jsのやつ",
    img: "",
    start: new Date(2021, 4, 1),
    description: "3jsのやつ",
    priority: 2,

    period: -1,
    workUrl: "",
    codeUrl: "",
    work: eWork.job,
    skillIds: ["id3js"]
  },
];

const hobbies: tWork[] = [
  {
    id: "idUnibirth",
    title: "うにばーす",
    img: "",
    start: new Date(2021, 4, 1),
    description: "新入生と作った．",
    priority: 2,

    period: -1,
    workUrl: "",
    codeUrl: "",
    work: eWork.hobby,
    skillIds: ["idReact"]
  },
];

const works: tWork[] = [...jobs, ...hobbies];
export default works;