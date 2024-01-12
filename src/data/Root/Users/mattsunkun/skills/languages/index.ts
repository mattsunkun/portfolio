import { directory } from "src/data/Root";

const dirLanguages: directory = {
  name: "languages",
  files: [

    {
      name: "Basic",
      contents: "初めて触ったプログラミング言語です．高校の授業のときに図形描画プログラムを作成しました．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-basic-480.png` },
    },
    {
      name: "C",
      contents: "大学の授業で習いました．C言語でセグメンテーションフォルトが起きるのが一番嫌いです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-c-480.png` },
    },
    {
      name: "C++",
      contents: "ぷよぷよのようなアプリを作る実習で使いました．いつか競技プログラミングのメイン言語にしたいです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cpp-480.png` },
    },
    {
      name: "C#",
      contents: "一番実務経験のある言語です．オブジェクト指向で実装するときに，非常に使いやすい言語だと思います．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cs-480.png` },
    },
    {
      name: "CSS",
      contents: "ウェブアプリを作るときに使っています．ソースはほぼコピペで動かしているため，全然わからないです．．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-css-480.png` },
    },
    {
      name: "Google Apps Script",
      contents: "簿記アプリを作成する上で利用しました．個人的には，JavaScriptよりも独特な性質を持っていると思います．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/flaticon-gas-480.png` },
    },
    {
      name: "HTML",
      contents: "素のHTMLで書くことはほとんどありませんが，ウェブ開発のバイトで，素のHTMLを使ったこともあります．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-html-480.png` },
    },
    {
      name: "JavaScript",
      contents: "独特な性質にあまり慣れない言語です．初めての開発バイトや，拡張機能の作成に利用しました．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-javascript-480.png` },
    },
    {
      name: "Latex",
      contents: "大学のレポート作成に使いました．アンダースコアを表示するのにエスケープが必要なのが好きじゃ無いです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-latex-480.png` },
    },
    {
      name: "Shell(Unix系)",
      contents: "基本的な使い方は把握しています．大学ではBash，個人開発ではZsh(MacOSの標準)を使っています．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-shellUnix-480.png` },
    },
    {
      name: "Shell(Windows)",
      contents: "最低限の使い方把握しています．バイトでコマンドプロンプトや，PowerShellを使うことがあります．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-shellWindows-480.png` },
    },
    {
      name: "SQL",
      contents: "大学の授業でも習ったが，友人と作ったウェブアプリのバックエンドにおいても利用したことがあります．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-sql-480.png` },
    },
    {
      name: "Perl",
      contents: "大学の授業でコンパイラを作る実習のときに使いました．初見でも読みやすいコードなのが好きです．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-perl-480.png` },
    },
    {
      name: "PHP",
      contents: "大学1年生の頃にウェブ開発しようとしたとき(挫折..)ちょろっと触りました．今はあまり覚えていません．．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-php-480.png` },
    },
    {
      name: "Python",
      contents: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-python-480.png` },
    },
    {
      name: "R",
      contents: "大学のデータマイニング授業で利用しました．今では使い方をほとんど覚えていません．．",
      meta: { img: `${process.env.PUBLIC_URL}/images/icons/languages/icon-icons-r-480.png` },

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

export default dirLanguages;