import { directory } from "src/data/fileSystem";

const dirExperiences: directory = {
  name: "experiences",
  files: [
    {
      name: "中津川プロジェクト",
      contents: "中津川市にて，高大連携で2泊3日で大学の授業などを体験した．(参加/)",
      meta: {
        start: new Date(2018, 8, 6),
        // end: 
        urls: ["https://chet.educa.nagoya-u.ac.jp/?page_id=86"],
        priority: 2,
      }
    },
    {
      name: "学びの杜・学術コース_インフラ工学探究講座",
      contents: "名古屋大学の教員を中心とする研究者たちが，各学問領域における物の見方・考え方等を解説．(受講/)",
      meta: {
        start: new Date(2018, 8, 16),
        //         end: 
        urls: ["http://chet.educa.nagoya-u.ac.jp/wp-content/uploads/photo/f99e70c9248da84b274e8c0b9cf5694e.pdf"],
        priority: 2,
      }
    },
    {
      name: "ニューヨーク研修",
      contents: "高校1年生の頃，ニューヨークの学生(Bard高校)と交換留学をしました．お互いに，調べたことを相手の高校で発表することがメインの研修です．自分がニューヨークに行った際には，英語で連分数の魅力について語りました．(参加/)",
      meta: {
        start: new Date(2018, 12, 1),
        //         end: 
        urls: ["https://bhsec.bard.edu/manhattan/"],
        priority: 1
      }
    },
    {
      name: "イオン1%クラブ",
      contents: "イオン株式会社出資の下で，Ambassador(大使)として，タイの高校生と交換留学をした．(参加/)",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/about/thailand.jpeg`,
        start: new Date(2019, 1, 1),
        //         end: 
        urls: ["https://www.youtube.com/watch?v=gNuWDFUdfTg"],
        priority: 1,
      }
    },
    {
      name: "アプリ開発団体jack",
      contents: "大学入学と同時に入ったサークルです．ハッカソン，アイディアソン，LT会などが定期的に催されているサークルです．(参加/)",
      meta: {
        start: new Date(2021, 4, 15),
        //        end: 
        urls: ["https://github.com/jack-app"],
        priority: 0,
      }
    },
    {
      name: "日光街道",
      contents: "高校の頃の友人4,5人で東京の日本橋から栃木の日光東照宮まで(約147km)，「足のみ」を使って歩き切りました．途中，足がボロボロになり，非常に過酷な旅でしたが，達成感がありました．(踏破/)",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/about/nikko.jpg`,
        start: new Date(2022, 3, 1),
        //         end: 
        urls: ["https://ja.wikipedia.org/wiki/%E6%97%A5%E5%85%89%E8%A1%97%E9%81%93"],
        priority: 1,
      }
    },
    {
      name: "GOOD_SPEEDインターンシップ",
      contents: "当時，投資のIRに興味があり，就業型のインターンシップに参加しました．投資家に自社をアピールするには何が重要かを学びました．(参加/終了)",
      meta: {
        start: new Date(2022, 4, 1),
        end: new Date(2022, 9, 1),
        urls: ["https://www.goodspeed.ne.jp/"],
        priority: 1,
      }
    },
    {
      name: "0-1ゼミ(自主ゼミ)",
      contents: "情報系の分野を自主的に学習する自主ゼミです．名古屋大学の1,2年生を中心に20名ほどが参加しており，そのテーマは一冊の本を輪読形式で読み進めるものから，互いの得意分野を発表し合うものなど色々ありました．例えば，機械学習，TCP/IP，デザインパターンについて学びました．(参加/)",
      meta: {
        start: new Date(2022, 4, 25),
        //        end: 
        urls: ["https://github.com/zero-one-seminar"],
        priority: 0,
      }
    },
    {
      name: "初動画配信",
      contents: "大好きな「風来のシレン」というゲームのiOSバージョンを配信しました．環境構築が大変でした．(実施/)",
      meta: {
        start: new Date(2022, 6, 28),
        //        end: 
        urls: ["https://www.youtube.com/watch?v=8pQETLH_PWQ"],
        priority: 1,
      }
    },
    {
      name: "第3回DENSOクラウドコンテスト",
      contents: "デンソー主催のAWSを利用したコンテスト．複数の課題が与えられ，AWSを利用することで，それらの課題を素早く解決するコンテストに参加しました．(参加/)",
      meta: {
        start: new Date(2023, 2, 5),
        //        end: 
        urls: ["https://www.denso.com/global/en/"],
        priority: 0,
      }
    },
    {
      name: "横浜から小田原まで",
      contents: "高校の頃の友人4,5人で横浜から小田原まで「足のみ」を使って歩き切りました．日光街道よりは過酷ではありませんでしたが，それなりに大変な旅でした．(踏破/)",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/about/odawara.jpeg`,
        start: new Date(2023, 3, 4),
        //         end: 
        urls: ["https://ja.wikipedia.org/wiki/%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%B8%82"],
        priority: 2,
      }
    },
    {
      name: "NTTデータ東海_1dayインターンシップ",
      contents: "エンジニアとして働く上で，相手に物事を伝える方法について学びました．(参加/)",
      meta: {
        start: new Date(2023, 7, 3),
        //        end: 
        urls: ["https://www.nttdata-tokai.co.jp/"],
        priority: 0,
      }
    },
    {
      name: "株式会社イー・ビー・エル_1dayインターンシップ",
      contents: "ネットワークに関するインターンシップでした．基本的なネットワーク確認方法・ADの構築・近年のセキュリティ動向について学びました．(参加/)",
      meta: {
        start: new Date(2023, 8, 29),
        //         end: 
        urls: ["https://www.ebl.co.jp/"],
        priority: 0,
      }
    },
  ],
  directories: [

  ],
}

export default dirExperiences;