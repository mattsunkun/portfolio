
import { Grid } from "@mui/material";
import LineSection from "../LineSection";
import skills, { eSkill } from "../../data/skill";
import SkillCard from "./cards/SkillCard";

const GridSkills: React.FC<{ kind: eSkill }> = (props) => {

  return (
    <>
      <LineSection line={props.kind} />
      <Grid container spacing={4}>
        {
          skills.map((skill) => (
            skill.skill === props.kind && (
              <SkillCard
                key={skill.id}
                {...skill}
              />
            )
          ))
        }
      </Grid>
    </>
  );
};

export default GridSkills;