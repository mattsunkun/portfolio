import { directory } from "src/data/Root";

const dirsLanguages: directory = {
  name: "languages",
  files: [
    {
      name: "C",
      contents: "大学の授業で習いました．セグメンテーションフォルトが一番嫌いです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-c-480.png` },
    },
    {
      name: "C++",
      contents: "ぷよぷよのようなアプリを作る大学の実習で習いました．競技プログラミングにて，これで戦えるようになりたいです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cpp-480.png` },
    },
    {
      name: "C#",
      contents: "一番実務経験のある言語です．オブジェクト指向の本質を掴みやすいと感じます．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cs-480.png` },
    },
    {
      name: "CSS",
      contents: "ウェブアプリを作るときに使っている．ほぼコピペで動かしているため，全然わからない．．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-css-480.png` },
    },
    {
      name: "HTML",
      contents: "素のHTMLで書くことはほとんどありませんが，ウェブ開発のバイトで，少し使ったこともあります．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-html-480.png` },
    },
    {
      name: "JavaScript",
      contents: "独特な性質にあまり慣れない言語です．初めての開発バイトや，拡張機能の作成に利用しました．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-javascript-480.png` },
    },
    {
      name: "MySQL",
      contents: "友人と作ったウェブアプリのバックエンドで使いました．ん．これ言語っていうよりはソフトウェアか？",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-mysql-480.png` },
    },
    {
      name: "Perl",
      contents: "大学の授業でコンパイラを作る実習のときに使いました．初見で読みやすいコードなのが好きです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-perl-480.png` },
    },
    {
      name: "PHP",
      contents: "大学1年生の頃にちょろっと触りました．今は全く覚えていません．．．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-php-480.png` },
    },
    {
      name: "Python",
      contents: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-python-480.png` },
    },
    {
      name: "TypeScript",
      contents: "ウェブ開発をする時は今では必ず使用しています．静的型付けは保守がしやすくて助かります．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-typescript-480.png` },
    },
  ],
  directories: [

  ],
}

export default dirsLanguages;