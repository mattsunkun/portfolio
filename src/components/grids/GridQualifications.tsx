
import { Grid } from "@mui/material";
import LineSection from "../LineSection";
import qualifications, { eQualification } from "../../data/qualification";
import QualificationCard from "./cards/QualificationCard";

const GridQualifications: React.FC<{ kind: eQualification }> = (props) => {

  return (
    <>
      <LineSection line={props.kind} />
      <Grid container spacing={4}>
        {
          qualifications.map((item) => (
            (item.kind === props.kind) && (
              <QualificationCard
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

export default GridQualifications;