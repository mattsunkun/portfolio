import { directory } from "src/data/Root";

const dirJobs: directory = {
  name: "jobs",
  files: [
    {
      name: "和食麺処サガミ",
      contents: "アルバイト勤務（ホールスタッフとして）",
      meta: {
        start: new Date(2021, 5, 1),
        end: new Date(2023, 8, 1),
        urls: ["https://www.sagami.co.jp/"],
      }
    },
    {
      name: "秀英予備校",
      contents: "アルバイト勤務 (個別指導員として)",
      meta: {
        start: new Date(2021, 5, 1),
        end: new Date(2022, 3, 1),
        urls: ["https://www.shuei-yobiko.co.jp/"],
      }
    },
    {
      name: "開発バイト その1",
      contents: "NDAより詳細は掲載不可",
      meta: {
        start: new Date(2021, 9, 1),
      }
    },
    {
      name: "開発バイト その2",
      contents: "NDAより詳細は掲載不可",
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