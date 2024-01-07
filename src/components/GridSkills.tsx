
import { Grid, Typography } from "@mui/material";
import Card from "../components/Card";
import abilities, { eKinds } from "../data";
import LineSection from "../components/LineSection";

const GridSkills: React.FC<{ kind: eKinds }> = (props) => {

  return (
    <>
      {/* <LineSection line={props.kind} />
      <Grid container spacing={4}>
        {
          abilities.map((ability) => (
            ability.kind === props.kind && (
              <Card
                key={ability.id}
                {...ability}
              />
            )
          ))
        }
      </Grid> */}
      aaa

    </>
  );
};

export default GridSkills;