import { directory } from "src/data/Root";
import dirAbout from "./about";
import dirSkills from "./skills";
import dirWorks from "./works";


const dirMattsunkun: directory = {
  name: "mattsunkun",
  files: [
    {
      name: ".matshrc",
      contents: "えいりあす 猫=cat;いきすぽーと ぱす=/bin だけど，オブジェクトの参照的なお話で，directoryは書き換えできない．",
    },
  ],
  directories: [
    dirAbout,
    dirSkills,
    dirWorks,
  ],
}

export default dirMattsunkun;