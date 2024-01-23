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
        "Matsh provides the most basic shell commands (supports some of the Tab Completion).",
        // 最後の行が長くないと，消える時おかしくなる．DynamicLineの秒数を落とすと言ってることがわかるよ．
        'Why not give me a command 🌲"tree"🌲 to navigate this File System.',
        // "should done: tabCompExeARgs, tabCompHidden",
      ].join("\n"),
    },
    {
      name: ".mlogout",
      contents: "echo Bye. Matsh is no longer available. Try reloading this page to get a new process.",
    },
  ],
  directories: [
    // {
    //   name: ".test",
    //   files: [
    //     {
    //       name: "fA",
    //       contents: "",
    //     },
    //     {
    //       name: "C",
    //       contents: "",
    //     },
    //   ],
    //   directories: [
    //     {
    //       name: "A",
    //       files: [
    //         // {
    //         //   name: "A-A",
    //         //   contents: "",
    //         // },
    //         // {
    //         //   name: "A-C",
    //         //   contents: "",
    //         // },
    //       ],
    //       directories: [
    //         {
    //           name: "AA",
    //           files: [
    //             // {
    //             //   name: "AA-A",
    //             //   contents: "",
    //             // },
    //             // {
    //             //   name: "AA-C",
    //             //   contents: "",
    //             // },
    //           ],
    //           directories: [
    //             {
    //               name: "AAA",
    //               files: [
    //                 {
    //                   name: "AAA-A",
    //                   contents: "",
    //                 },
    //                 {
    //                   name: "AAA-C",
    //                   contents: "",
    //                 },
    //               ],
    //               directories: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       name: "B",
    //       files: [
    //         {
    //           name: "B-A",
    //           contents: "",
    //         },
    //         {
    //           name: "B-C",
    //           contents: "",
    //         },
    //       ],
    //       directories: [
    //         {
    //           name: "BB",
    //           files: [
    //             {
    //               name: "BB-A",
    //               contents: "",
    //             },
    //             {
    //               name: "BB-C",
    //               contents: "",
    //             },
    //           ],
    //           directories: [],
    //         },
    //       ],
    //     },
    //     {
    //       name: "D",
    //       files: [
    //         {
    //           name: "D-A",
    //           contents: "",
    //         },
    //         {
    //           name: "D-C",
    //           contents: "",
    //         },
    //       ],
    //       directories: [],
    //     },
    //   ]
    // },
    dirAbout,
    dirSkills,
    dirWorks,
  ],
}

export default dirMattsunkun;