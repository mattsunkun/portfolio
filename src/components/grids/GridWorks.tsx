
import { Grid } from "@mui/material";
import LineSection from "../LineSection";
import works, { eWork } from "../../data/work";
import WorkCard from "./cards/WorkCard";

const GridWorks: React.FC<{ kind: eWork }> = (props) => {

  return (
    <>
      <LineSection line={props.kind} />
      <Grid container spacing={4}>
        {
          works.map((work) => (
            (work.work === props.kind) && (
              <WorkCard
                key={work.id}
                {...work}
              />
            )
          ))
        }
      </Grid>
    </>
  );
};

export default GridWorks;