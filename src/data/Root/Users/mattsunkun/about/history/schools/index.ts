import { directory } from "src/data/Root";

const dirSchools: directory = {
  name: "schools",
  files: [
    {
      name: "小学校",
      contents: "東海市立大田小学校 (入学/転校)",
      meta: {
        start: new Date(2009, 4, 1),
        end: new Date(2014, 4, 1),
        urls: ["https://www.edtokai.jp/ota-e/"],
      }
    },
    {
      name: "ElementarySchool",
      contents: "Picadome Elementary (転入/卒業)",
      meta: {
        start: new Date(2014, 4, 1),
        end: new Date(2014, 6, 1),
        urls: ["https://picadome.fcps.net/"],
      }
    },
    {
      name: "CramSchool",
      contents: "Central Kentucky Japanese School (転入/卒業)",
      meta: {
        start: new Date(2014, 4, 1),
        end: new Date(2017, 5, 1),
        urls: ["https://www.ckjs.org/Home.php"],
      }
    },
    {
      name: "MiddleSchool",
      contents: "Jessie Clark Middle School (入学/卒業)",
      meta: {
        start: new Date(2014, 9, 1),
        end: new Date(2017, 5, 1),
        urls: ["https://jessieclark.fcps.net/"],
      }
    },
    {
      name: "中学校",
      contents: "東海市立横須賀中学校 (転入/卒業)",
      meta: {
        start: new Date(2017, 5, 1),
        end: new Date(2018, 3, 1),
        urls: ["https://www.edtokai.jp/yokosuka-j/"],
      }
    },
    {
      name: "高等学校",
      contents: "国立名古屋大学教育学部附属高等学校 (入学/卒業)",
      meta: {
        start: new Date(2018, 4, 1),
        end: new Date(2021, 3, 1),
        urls: ["https://highschl.educa.nagoya-u.ac.jp/"],
      }
    },
    {
      name: "大学",
      contents: "名古屋大学情報学部コンピュータ科学科 (入学/卒業見込み)",
      meta: {
        start: new Date(2021, 4, 1),
        end: new Date(2025, 3, 1),
        urls: ["https://www.nagoya-u.ac.jp/"],
      }
    },
  ],
  directories: [
  ],
}

export default dirSchools;