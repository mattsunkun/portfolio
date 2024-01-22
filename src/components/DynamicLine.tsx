
import { TypeAnimation } from "react-type-animation";

const DynamicLine: React.FC<{ line: string, wait: number }> = (props) => {
  const remain: number = 1000 * 1000// Math.pow(10, 1000)
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
            // first = false;
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