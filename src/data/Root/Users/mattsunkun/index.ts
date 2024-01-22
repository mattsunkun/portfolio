import { directory } from "src/data/fileSystem";
import dirAbout from "./about";
import dirSkills from "./skills";
import dirWorks from "./works";


const dirMattsunkun: directory = {
  name: "mattsunkun",
  files: [
    {
      name: ".matshrc",
      contents: "_export_PATH=/bin _alias_猫=cat _alias_ねこ=cat",
    },
    {
      name: ".mlogin",
      contents: [
        "_intro",
        "Hello World!!",
        "Welcome to mattsunkun's portfolio!!",
        "Here is the CLI(Matsh) for this portfolio.",
        "Matsh provides the most basic shell commands.",
        'Try with "tree ." command line to navigate File System.',
        "should done: innerHTML, tree, help, man, (_export, _intro, _alias), ref .matshrc, echo, date, path,"
      ].join("\n"),
    },
    {
      name: ".mlogout",
      contents: 'echo "Bye. Matsh is no longer available. Try reloading this page to get new process.',
    },
  ],
  directories: [
    dirAbout,
    dirSkills,
    dirWorks,
  ],
}

export default dirMattsunkun;