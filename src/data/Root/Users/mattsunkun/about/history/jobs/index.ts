import { directory } from "src/data/fileSystem";

const dirJobs: directory = {
  name: "jobs",
  files: [
    {
      // 東海店
      name: "和食麺処サガミ",
      contents: "ホールスタッフとして，アルバイト勤務をしました．お客様の笑顔がやりがいでした． (入社/退社)",
      meta: {
        start: new Date(2021, 5, 1),
        end: new Date(2023, 8, 1),
        urls: ["https://www.sagami.co.jp/"],
      }
    },
    {
      // 東海校
      name: "秀英予備校",
      contents: "個別指導員として，アルバイト勤務をしました．数学・物理・化学・英語を担当しました． (入社/退社)",
      meta: {
        start: new Date(2021, 5, 1),
        end: new Date(2022, 3, 1),
        urls: ["https://www.shuei-yobiko.co.jp/"],
      }
    },
    {
      name: "開発バイト_その1",
      contents: "NDAより詳細は掲載不可 (開始/)",
      meta: {
        start: new Date(2021, 9, 1),
      }
    },
    {
      name: "開発バイト_その2",
      contents: "NDAより詳細は掲載不可 (入社/退社)",
      meta: {
        start: new Date(2022, 12, 1),
        end: new Date(2023, 8, 1),

      }
    }
  ],
  directories: [
  ],
}

export default dirJobs;