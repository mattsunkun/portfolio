import { directory } from "src/data/Root";

const dirHardware: directory = {
  name: "hardware",
  files: [
    {
      name: "Raspberry Pi",
      contents: "LANのお勉強などに役立てています． ファンを持っていないので，手持ち扇風機を当てて作業しています．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/hardware/techicons-raspberrypi-384.png`,
        imgRightsLink: "https://techicons.dev/icons/raspberrypi",
      }
    },
    {
      name: "Cisco",
      contents: "ルーターとして1812JとAPとしてAIR-CAP3602I-Q-K9を触りました． まだ基本操作しかできず，ネットワーク構築はできていません．",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/icons/hardware/icon-icons-cisco-512.png`,
        imgRightsLink: "https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E3%82%B7%E3%82%B9%E3%82%B3-%E3%83%AD%E3%82%B4/169399",
      }
    },
  ],
  directories: []
};

export default dirHardware;