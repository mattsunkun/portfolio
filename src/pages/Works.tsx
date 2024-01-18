import { FC } from "react";

import { Grid } from "@mui/material";
import Card from "../components/Card";
import LineSection from "../components/LineSection";
import dirJobs from "src/data/Root/Users/mattsunkun/works/jobs";
import { directory } from "src/data/fileSystem";
import dirHobbies from "src/data/Root/Users/mattsunkun/works/hobbies";

const Expand2Cards: FC<{ dir: directory }> = (props) => {
  return (
    <>
      <LineSection line={props.dir.name.toUpperCase()} />
      {
        <Grid
          container
          spacing={4}
          justifyContent="center" // 横方向の中央寄せ
          alignItems="center" // 縦方向の中央寄せ
        >
          {props.dir.files.map((file, ind) => (
            <Card
              key={ind}
              {...file}
            />
          ))}
        </Grid>
      }
    </>
  )
}
const Works = () => {
  return (
    <>
      {/* <h1>作ったプロダクト一覧，失敗と成功に分けて，動画編集，blenderも入れたい．</h1> */}
      <Expand2Cards dir={dirJobs} />
      <Expand2Cards dir={dirHobbies} />
    </>
  );
};
// (Object.values(eWork)).map((kind) => (
//   <>
//     <LineSection line={kind} />
//     <Grid
//       container
//       spacing={4}
//       justifyContent="center" // 横方向の中央寄せ
//       alignItems="center" // 縦方向の中央寄せ
//     >
//       {works.map((work) => (
//         (work.work === kind) && (
//           <Card
//             key={work.id}
//             {...work}
//           />
//         )
//       ))}
//     </Grid>
//   </>
// ))
export default Works;