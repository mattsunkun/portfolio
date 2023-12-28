
import { eKinds } from "../data";
import GridSkills from "../components/GridSkills";
const Skills = () => {
  return (
    <>
      <h1>python, c, c#，資格，業務などをIT系と分けて具体的な業務経験とともに</h1>
      <GridSkills kind={eKinds.language} />
      <GridSkills kind={eKinds.framework} />
      <GridSkills kind={eKinds.software} />
    </>
  );
};

export default Skills;