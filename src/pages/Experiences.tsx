
import { eKinds } from "../data";
import GridExperiences from "../components/gridCards/GridExperiences";
import { eExperience } from "../data/experience";
const Experiences = () => {
  return (
    <>
      {
        (Object.values(eExperience)).map((item) => (
          <GridExperiences kind={item} />
        ))
      }
    </>
  );
};

export default Experiences;