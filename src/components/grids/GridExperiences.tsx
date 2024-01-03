
import { Grid } from "@mui/material";
import LineSection from "../LineSection";
import experiences, { eExperience } from "../../data/experience";
import ExperienceCard from "./cards/ExperienceCard";

const GridExperiences: React.FC<{ kind: eExperience }> = (props) => {

  return (
    <>
      <LineSection line={props.kind} />
      <Grid container spacing={4}>
        {
          experiences.map((item) => (
            (item.kind === props.kind) && (
              <ExperienceCard
                key={item.id}
                {...item}
              />
            )
          ))
        }
      </Grid>
    </>
  );
};

export default GridExperiences;