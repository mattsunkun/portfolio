
import GridExperiences from "../components/grids/GridExperiences";
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