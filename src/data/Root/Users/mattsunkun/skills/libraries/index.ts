import { directory } from "src/data/Root";

const dirLibraries: directory = {
  name: "libraries",
  files: [
    {
      name: "NumPy",
      contents: "行列が関わる計算では無意識に利用しています．",
      // meta: { img: `${process.env.PUBLIC_URL}/images/icons/libraries/icons8--480.png` },
    },
    {
      name: "pandas",
      contents: "機械学習をするときに利用しています．",
    },
    {
      name: "Matplotlib",
      contents: "何かしらのグラフを描画したいときに無意識に使っています．",
    },
    {
      name: "Seaborn",
      contents: "機械学習で描画を行うときに利用したことがある．",
    },

  ],
  directories: [

  ],
}

export default dirLibraries;