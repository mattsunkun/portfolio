import React, { useEffect, useRef, useState, useContext } from "react";
import Matter, { MouseConstraint } from "matter-js";
import { Box, Switch, Typography } from "@mui/material";
import dirLanguages from "src/data/Root/Users/mattsunkun/skills/languages";
import { directory, file } from "src/data/Root";
import dirFrameworks from "src/data/Root/Users/mattsunkun/skills/frameworks";
import dirSoftware from "src/data/Root/Users/mattsunkun/skills/software";
import { darkModeContext, tBooleanSet } from 'src/App';
import dirSkills from "src/data/Root/Users/mattsunkun/skills";
import LinkLine from "./LinkLine";

// const SkillViewer: React.FC = React.memo(()) => {
//   const [fily, setFily] = useState();

//   return (
//     <>
//       {

//       }
//     </>
//   );
// }

const cstrSurgical = "XSS";

// Matterとスキルファイルの対応関係を保持するMap
const mapSkills: Map<Matter.Body, file> = new Map();
type tKinds = {
  name: string,
  matters: Matter.Body[],
}
const mapKinds: tKinds[] = []
// props.dirSkills.directories.map((dir) => {
//   return {
//     dir,
//     matters: []
//   }
// })

const Matters: React.FC<{ dirSkills: directory, W?: number, H?: number }> = (props) => {


  let fi: file | undefined = undefined;
  const [flag, setFlag] = useState(true);
  const initFile: file = // dirSkills.files[0]
  {
    name: "タイトル",
    contents: "下記のアイコンをタップすると，詳細が表示されます．",
    meta: {
      imgRightsLink: "",
      urls: [
        "",
      ]
    }
  }
  // 現在のモード
  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) ?? {}) as tBooleanSet;

  // mapKinds = props.dirSkills.directories.map((dir) => {
  //   return {
  //     dir,
  //     matters: []
  //   }
  // })


  // 縦横の大きさ
  const canvasWidth = props.W ?? 280;
  const canvasHeight = props.H ?? 400;
  const innerFrameSize = 2;
  const outerFrameSize = 3;
  const outerFramePadding = 10;
  const tallTimes = 3;

  const engine = Matter.Engine.create();
  // skills
  const radius: number = 30;
  const padding: number = 0;
  const space: number = radius * 2 + padding;
  const sep: number = Math.floor(canvasWidth / space);
  const pad: number = (canvasWidth - sep * space) / 2;
  const createMatterSkills = (dirSkills: directory,
    // mapSkills: Map<Matter.Body, file>, mapKinds: tKinds[], 
    y: number): Matter.Body[] => {
    // console.log(mapSkills)
    let ans: Matter.Body[] = [];

    // console.log(radius, padding, space, sep, pad)
    dirSkills.files.forEach((file, ind) => {


      const matterSkill = Matter.Bodies.rectangle(
        pad + ((ind % sep + 0.5) * space),
        y - Math.floor(ind / sep) * space,
        radius * 2,
        radius * 2,
        {
          render: {
            sprite: {
              texture: file.meta?.img ? file.meta?.img : `${process.env.PUBLIC_URL}/images/icons/utils/icons8-no-480.png`,
              xScale: radius * 0.005,
              yScale: radius * 0.005,
            }
          }
        }
      );
      ans.push(matterSkill);
      mapSkills.set(matterSkill, file);
      mapKinds
        .filter((mapKind) => { return mapKind.name === dirSkills.name })
        ?.forEach((mapKind) => { mapKind.matters.push(matterSkill) })

    })
    return ans;
  };

  // 描画する場所
  const containerRef = useRef(undefined);

  // 一回だけ実行するフラグ.
  let ignore = false;

  useEffect(() => {
    if (!ignore) {


      props.dirSkills.directories.forEach((dir) => {
        mapKinds.push({ name: dir.name, matters: [] })
      })
      console.table(mapKinds)

      // 初期処理
      const render = Matter.Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          width: canvasWidth,
          height: canvasHeight,
          // wireframeBackground: "transparent",
          background: "rgba(255,255,255,1.0)",
          // hasBounds: true,
          pixelRatio: 1,
          wireframes: false,
        },

      });

      // 壁
      const createWalls = (x: number, y: number, w: number, h: number, engine: Matter.Engine) => {
        Matter.Composite.add(
          engine.world,
          [
            Matter.Bodies.rectangle(
              x, y, w, h,
              {
                isStatic: true,
                render: {
                  fillStyle: "red",
                }
              }
            ),
          ]
        )
      }
      const thick: number = 100;
      // top
      createWalls(0, -thick - canvasHeight * (tallTimes - 2), canvasWidth * 2, thick * 2, engine);
      // bottom
      createWalls(0, canvasHeight + thick, canvasWidth * 2, thick * 2, engine);
      // left
      createWalls(-thick, 0, thick * 2, canvasHeight * tallTimes, engine);
      // right
      createWalls(thick + canvasWidth, 0, thick * 2, canvasHeight * tallTimes, engine);



      let numFiles = 0;
      props.dirSkills.directories.forEach((dir) => {
        Matter.Composite.add(
          engine.world,
          [
            ...createMatterSkills(dir,
              // mapSkills, mapKinds, 
              canvasHeight - numFiles * space)
          ]
        );
        numFiles += Math.ceil(dir.files.length / sep);
      })



      // クリックを可能にする．
      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine,
        {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: true },
          }
        });
      render.mouse = mouse;
      Matter.Composite.add(
        engine.world,
        mouseConstraint
      );


      // Matterをクリックしたとき
      Matter.Events.on(mouseConstraint, "mousedown", e => {
        const matter = e.source.body;
        const file = mapSkills.get(matter);
        // matter.area = 0;
        // 
        if (file) {
          let name = document.getElementById(`${cstrSurgical}Name`)
          let contents = document.getElementById(`${cstrSurgical}Contents`)
          let imgRightsLink = document.getElementById(`${cstrSurgical}imgRightsLink`)
          if (name && contents && imgRightsLink) {
            name.innerHTML = file.name;
            contents.innerHTML = file.contents;
            imgRightsLink.innerHTML = `Icon credit: <a href="${file.meta?.imgRightsLink}" target="_blank" style="text-decoration: underline; color: white;">here</a>`;
          }

        }
        // AAA
        // console.table(mapSkills)
        // console.table(mapKinds)
        // console.log(matter)



      });


      // 開始処理
      Matter.Render.run(render);
      Matter.Runner.run(
        Matter.Runner.create(),
        engine
      );

    }
    return () => {
      // 一度描画フラグ
      ignore = true;
    };
  }, []);

  return (
    <>
      {/* 全体フレーム */}
      <Box
        sx={{
          border: `${outerFrameSize}px solid #${isDarkMode ? "FFF" : "000"}`,
          padding: `${outerFramePadding}px`,
          width: canvasWidth + (outerFramePadding + outerFrameSize + innerFrameSize) * 2,
        }}
      >
        {props.dirSkills.directories.map((dir) => {
          return <Switch
            id={dir.name}
            defaultChecked
            onChange={(event) => {
              // BBB

              // setFlag(!flag);
              const isGo = event.target.checked
              if (isGo) {
                Matter.Composite.add(
                  engine.world,
                  createMatterSkills(dir,
                    // mapSkills, mapKinds, 
                    0)
                );
              }
              else {
                mapKinds.filter((mapKind) => {
                  return mapKind.name === dir.name;
                })?.forEach((kind) => {
                  kind.matters.forEach((matter) => {
                    Matter.World.remove(engine.world, matter)
                  })

                });

              }

              // console.table(mapSkills)
              // console.table(mapKinds)

            }}
          />
        })}


        <Box >
          {/* 説明文 */}
          <Box
            sx={{
              margin: "2px",
              border: `${outerFrameSize}px solid #${isDarkMode ? "FFF" : "000"}`,
              borderRadius: "12px",
            }}
          >
            {/* ジャンル */}
            {/* <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
          >
            {props.dirSkills.name.toUpperCase()}
          </Typography> */}
            {/* skills.name */}
            <Typography
              id={`${cstrSurgical}Name`}
              variant="h4"
              fontWeight="bold"
              textAlign="center"
            >
              <br />
            </Typography>
            {/* skills.contents */}
            <Typography variant="body2"
              id={`${cstrSurgical}Contents`}
              sx={{
                overflow: "auto",
                overflowY: "scroll",
                minHeight: "60px",
                maxHeight: "60px",
                textAlign: "center",
              }}
              padding={2}

            >
              <br />
            </Typography>
            {/* アイコン著作権 */}
            <Box
              id={`${cstrSurgical}imgRightsLink`}
              sx={{
                textAlign: "end",
                fontSize: "12px",

              }}
              padding={2}
            >
              <br />
            </Box>
          </Box>

          {/* Matters */}
          <Box ref={containerRef}
            sx={{
              width: canvasWidth + innerFrameSize * 2,
              height: canvasHeight + innerFrameSize * 2,
            }}
            style={{
              border: `${innerFrameSize}px solid #${isDarkMode ? "FFF" : "000"}`,

            }} />
        </Box>

      </Box>

    </>
  );
};

export default Matters;
