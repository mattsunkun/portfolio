
import { TypeAnimation } from "react-type-animation";

const DynamicLine: React.FC<{ line: string, wait: number, setIntro?: React.Dispatch<React.SetStateAction<boolean>> }> = (props) => {
  const remain: number = 60 * 60 * 1000
  return (
    <>
      <TypeAnimation
        sequence={[
          "",
          props.wait,
          props.line,
          remain,
          "",
          () => {
            if (props.setIntro) {
              props.setIntro(false);
            }
          },
        ]}
        wrapper="span"
        cursor={false}
        repeat={0}
        speed={70}
        omitDeletionAnimation={false}
      />
    </>
  )
}

export default DynamicLine;