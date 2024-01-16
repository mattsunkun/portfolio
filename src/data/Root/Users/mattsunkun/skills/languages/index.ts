import { directory } from "src/data/Root";

const dirLanguages: directory = {
  name: "languages",
  files: [

    {
      name: "Basic",
      contents: "初めて触ったプログラミング言語です． 高校の授業のときに図形描画プログラムを作成しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-basic-480-9.png`,
        imgRightsLink: "https://icons8.jp/icon/10241/bas",
      },
    },
    {
      name: "C",
      contents: "大学の授業で習いました． C言語のセグメンテーションフォルトが一番嫌いです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-c-480.png`,
        imgRightsLink: "https://icons8.jp/icon/40670/c%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0"
      },
    },
    {
      name: "C++",
      contents: "ぷよぷよのようなアプリを作る実習で使いました． いつか競技プログラミングのメイン言語にしたいです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cpp-480.png`,
        imgRightsLink: "https://icons8.jp/icon/40669/c%2B%2B",
      },
    },
    {
      name: "C#",
      contents: "一番実務経験のある言語です．　オブジェクト指向を意識した実装のしやすい言語だと思います．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-cs-480.png`,
        imgRightsLink: "https://icons8.jp/icon/45490/c-%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%97-%E3%83%AD%E3%82%B42",
      },
    },
    {
      name: "CSS",
      contents: "ウェブアプリを作るときに使っています．　ソースコードはほぼコピペで動かしているため，あまりわからないです．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-css-480.png`,
        imgRightsLink: "https://icons8.jp/icon/21278/css3",
      },
    },
    {
      name: "Google Apps Script",
      contents: "簿記アプリを作成する上で利用しました．　良い開発環境の整え方が見つからない言語の一つだと思います．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/flaticon-gas-480.png`,
        imgRightsLink: "https://www.flaticon.com/free-icons/google-apps-script",
      },
    },
    {
      name: "HTML",
      contents: "素のHTMLで書くことはほとんどありませんが，　ウェブ開発のバイトで素のHTMLを使ったこともあります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-html-480.png`,
        imgRightsLink: "https://icons8.jp/icon/20909/html-5",
      },
    },
    {
      name: "JavaScript",
      contents: "独特な性質にあまり慣れない言語です．　初めての開発バイトや，拡張機能の作成に利用しました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-javascript-480.png`,
        imgRightsLink: "https://icons8.jp/icon/108784/javascript",
      },
    },
    {
      name: "Latex",
      contents: "大学のレポート作成に使いました．　アンダースコアを表示するのにエスケープが必要なのが好きじゃ無いです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/techicons-latex-384.png`,
        imgRightsLink: "https://techicons.dev/icons/latex",

      },
    },
    {
      name: "Shell(Unix系)",
      contents: "基本的な使い方は把握しています．　大学ではBash，個人開発ではZsh(MacOSの標準)を使っています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-shellUnix-480-9.png`,
        imgRightsLink: "https://icons8.jp/icon/9MJf0ngDwS8z/%E3%83%90%E3%83%83%E3%82%B7%E3%83%A5",
      },
    },
    {
      name: "Shell(Windows)",
      contents: "最低限の使い方把握しています．　バイトでコマンドプロンプトや，PowerShellを使うことがあります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-shellWindows-480-9.png`,
        imgRightsLink: "https://icons8.jp/icon/WbRVMGxHh74X/%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB",
      },
    },
    {
      name: "SQL",
      contents: "友人と作ったウェブアプリのデータベース問い合わせにおいて， 問い合わせ処理を使いました．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-sql-480.png`,
        imgRightsLink: "https://icons8.jp/icon/m4jPUWKxN9UY/sql",
      },
    },
    {
      name: "Perl",
      contents: "大学のコンパイラを作る実習のときに使いました．　Perlの初見でも読みやすいコードが好きです．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-perl-480.png`,
        imgRightsLink: "https://icons8.jp/icon/55311/perl",
      },
    },
    {
      name: "PHP",
      contents: "大学1年生の頃にウェブ開発しようとしたとき(挫折しました．．)ちょろっと触りました．　今はあまり覚えていません．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/techicons-php-384.png`,
        imgRightsLink: "https://techicons.dev/icons/php",
      },
    },
    {
      name: "Python",
      contents: "大学の授業で初めて触った言語です．今でも機械学習や，競技プログラミングにおいてよく使う言語です．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-python-480.png`,
        imgRightsLink: "https://icons8.jp/icon/13441/python",
      },
    },
    {
      name: "R",
      contents: "大学のデータマイニング授業で利用しました．今では使い方をほとんど覚えていません．．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icon-icons-r-384.png`,
        imgRightsLink: "https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB-%E3%82%BF%E3%82%A4%E3%83%97-r/130212",
      },

    },
    {
      name: "TypeScript",
      contents: "ウェブ開発をする時は今では必ず使用しています．　静的型付けは保守がしやすくて助かります．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/languages/icons8-typescript-480.png`,
        imgRightsLink: "https://icons8.jp/icon/uJM6fQYqDaZK/%E3%82%BF%E3%82%A4%E3%83%97%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88",
      },
    },

  ],
  directories: [

  ],
}

export default dirLanguages;