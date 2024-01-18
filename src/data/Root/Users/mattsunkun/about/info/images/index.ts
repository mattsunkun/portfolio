import { directory } from "src/data/fileSystem";

const dirImages: directory = {
  name: "images",
  files: [
    {
      name: "profile",
      contents: "",
      meta: {
        img: `${process.env.PUBLIC_URL}/images/about/profile.jpg`,
      }
    }
  ],
  directories: [
  ],
}

export default dirImages;