import { Grid } from "@mui/material";
import Card from "../components/Card";
// import GridWorks from "../components/grids/GridWorks";
import works, { eWork } from "../data/work";
import LineSection from "../components/LineSection";

const Works = () => {
  return (
    <>
      {/* <h1>作ったプロダクト一覧，失敗と成功に分けて，動画編集，blenderも入れたい．</h1> */}

      {
        (Object.values(eWork)).map((kind) => (
          <>
            <LineSection line={kind} />
            <Grid container spacing={4}>
              {works.map((work) => (
                (work.work === kind) && (
                  <Card
                    key={work.id}
                    {...work}
                  />
                )
              ))}
            </Grid>
          </>
        ))
      }





    </>
  );
};

export default Works;