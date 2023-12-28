
import { eKinds } from "../data";
import GridSkills from "../components/GridSkills";
const Qualifications = () => {
  return (
    <>
      <GridSkills kind={eKinds.it} />
      <GridSkills kind={eKinds.nonIt} />
    </>
  );
};

export default Qualifications;