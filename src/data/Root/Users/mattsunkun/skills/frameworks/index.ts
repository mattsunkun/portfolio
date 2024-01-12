import { directory } from "src/data/Root";

const dirsFrameworks: directory = {
  name: "frameworks",
  files: [
    {
      name: ".Net",
      contents: "実務経験のあるフレームワークです．保守を意識した最低限のコードは書けると思います．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/frameworks/icons8-dotnet-480.png` },
    },
    {
      name: "",
      contents: "",
      meta: { img: "" },
    },
  ],
  directories: [],
}

export default dirsFrameworks;