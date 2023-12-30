
import { eKinds } from "../data";
import GridSkills from "../components/GridSkills";
import { eQualification } from "../data/qualification";
import GridQualifications from "../components/gridCards/GridQualifications";
const Qualifications = () => {
  return (
    <>
      {
        (Object.values(eQualification)).map((item) => (
          <GridQualifications kind={item} />
        ))
      }
    </>
  );
};

export default Qualifications;