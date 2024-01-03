
import { eKinds } from "../data";
import GridSkills from "../components/grids/GridSkills";
import skills, { eSkill } from "../data/skill";
const Skills = () => {
  return (
    <>
      <h1>python, c, c#，資格，業務などをIT系と分けて具体的な業務経験とともに</h1>
      {
        (Object.values(eSkill)).map((kind) => (
          <GridSkills kind={kind} />
        ))
      }
    </>
  );
};

export default Skills;