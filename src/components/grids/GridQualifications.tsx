
import { Box, Grid } from "@mui/material";
import LineSection from "../LineSection";
import qualifications, { eQualification } from "../../data/qualification";
import QualificationCard from "./cards/QualificationCard";

const GridQualifications: React.FC<{ kind: eQualification }> = (props) => {

  return (
    <>
      <Box padding={2} marginTop={3}>
        <LineSection line={props.kind} />
      </Box>
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