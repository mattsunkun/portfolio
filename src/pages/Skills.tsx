
import { Grid } from "@mui/material";
import Card from "../components/Card";
const Skills = () => {
  return (
    <>
      <h1>python, c, c#，資格，業務などをIT系と分けて具体的な業務経験とともに</h1>
      <Grid container >


        <Card
          img={process.env.PUBLIC_URL + "favicon.ico"}
          title="Python"
          since={new Date(2021, 4, 1)}
          passed={true}
          description="FastAPI"
          relevantLink="linky"
        />
      </Grid>
    </>
  );
};

export default Skills;