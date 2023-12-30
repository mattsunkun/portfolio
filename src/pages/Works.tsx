import GridWorks from "../components/gridCards/GridWorks";
import { eWork } from "../data/work";

const Works = () => {
  return (
    <>
      <h1>作ったプロダクト一覧，失敗と成功に分けて，動画編集，blenderも入れたい．</h1>
      {
        (Object.values(eWork)).map((kind) => (
          <GridWorks kind={kind} />
        ))
      }

    </>
  );
};

export default Works;