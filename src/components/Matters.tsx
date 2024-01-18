import React, { useEffect, useRef, useState, useContext } from "react";
import Matter from "matter-js";
import { Box, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import { directory, file } from "src/data/fileSystem";
import { darkModeContext, tBooleanSet } from 'src/App';
import dirSkills from "src/data/Root/Users/mattsunkun/skills";

const cstrSurgical = "XSS";
type tKinds = {
  name: string,
  matters: Matter.Body[],
}

const Matters: React.FC<{ dirSkills: directory, W?: number, H?: number }> = (props) => {
  // 現在のテーマ
  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) ?? {}) as tBooleanSet;

  // フィルターを見せるかどうかのフラグ
  const isFiltable: boolean =
    (window.innerWidth >= 900) &&
    (window.innerHeight >= 600);

  // Matterとfileの対応
  const mapSkills: Map<Matter.Body, file> = new Map();

  // Matterとdirecotryの対応
  const mapKinds: tKinds[] = []

  // canvasの大きさ
  const canvasWidth: number = props.W ?? 280;
  const canvasHeight: number = props.H ?? 400;

  // outputのフレームの太さ
  const innerFrameSize: number = 2;

  // 全体のフレームの定義
  const outerFrameSize: number = 3;
  const outerFramePadding: number = 10;

  // エンジン
  const engine = Matter.Engine.create();
  // skills
  const createMatterSkills = (
    dirSkills: directory,
    mapSkills: Map<Matter.Body, file>, mapKinds: tKinds[],
    y: number, isFromRight: boolean,
    sepSpace?: number[],
  ): Matter.Body[] => {

    // 戻り値
    let ans: Matter.Body[] = [];

    // rectangleの長さの半分
    const radius: number = isFiltable ? 40 : 20;
    // 物体同士の距離
    const padding: number = 0;
    // 物体が占有する空間
    const space: number = radius * 2 + padding;
    // 横に敷き詰められる最大値
    const sep: number = Math.floor(canvasWidth / space);
    // 物体を横に並べたときに，中央よりにするための，初期値
    const pad: number = (canvasWidth - sep * space) / 2;

    // 参照で値が欲しい人へ
    if (sepSpace?.length === 2) {
      sepSpace[0] = sep
      sepSpace[1] = space
    }

    // Matterを生成し，それをansに格納する．
    dirSkills.files.forEach((file, ind) => {

      // x座標を求める．
      let x = pad + ((ind % sep + 0.5) * space)
      // 右から始まるフラグがあった時は，反転させる．
      if (isFromRight) x = (canvasWidth - x)

      // Matterの生成
      const matterSkill = Matter.Bodies.rectangle(
        x,
        y - Math.floor(ind / sep) * space,
        radius * 2,
        radius * 2,
        {
          render: {
            sprite: {
              texture: file.meta?.img ?
                file.meta?.img :
                `${process.env.PUBLIC_URL}/images/icons/utils/icons8-no-480.png`,//nullimgageを入れる．
              xScale: radius * 0.005,
              yScale: radius * 0.005,
            }
          }
        }
      );

      // 戻り値に追加
      ans.push(matterSkill);
      // fileとのハッシュテーブルに追加
      mapSkills.set(matterSkill, file);

      // dirとのハッシュテーブルに追加
      mapKinds
        // 同じ名前のdirectoryとハッシュのキーを取得
        .filter((mapKind) => { return mapKind.name === dirSkills.name })
        // そのハッシュキーの要素に追加する．
        ?.forEach((mapKind) => { mapKind.matters.push(matterSkill) })

    })
    return ans;
  };

  // 描画する場所
  const containerRef = useRef(undefined);

  // 一回だけ実行するフラグ.
  let ignore: boolean = false;

  // 初期実行とMouseDownが書かれている．
  useEffect(() => {
    if (!ignore) {


      // dirとのハッシュテーブルの初期化を行う．
      props.dirSkills.directories.forEach((dir) => {
        mapKinds.push({ name: dir.name, matters: [] })
      })

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
      {
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
        // 壁の厚さ
        const thick: number = 100;
        // 壁で覆う物理空間の高さ
        const tallTimes = 3;
        // top
        createWalls(0, -thick - canvasHeight * (tallTimes - 2), canvasWidth * 2, thick * 2, engine);
        // bottom
        createWalls(0, canvasHeight + thick, canvasWidth * 2, thick * 2, engine);
        // left
        createWalls(-thick, 0, thick * 2, canvasHeight * tallTimes, engine);
        // right
        createWalls(thick + canvasWidth, 0, thick * 2, canvasHeight * tallTimes, engine);

      }



      // 初期Matterを生成する．
      {
        // 累積でSkillsがどれだけの段数になったか
        let numFiles = 0;

        // dirごとに，skillのmatterを生成する．
        props.dirSkills.directories.forEach((dir, ind) => {
          // sep, spaceを取得するためだけのもの
          const sepSpace = [0, 0]
          // Matter生成
          Matter.Composite.add(
            engine.world,
            [
              ...createMatterSkills(dir,
                mapSkills, mapKinds,
                canvasHeight - numFiles * sepSpace[1],
                ind % 2 === 0, // 偶奇で左右の開始位置を決定する．
                sepSpace, // sep, spaceの取得
              )
            ]
          );
          numFiles += Math.ceil(dir.files.length / sepSpace[0]);
        })

      }



      // クリック関係
      {
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

          // innerHTMLを使うという究極の外科処置
          if (file) {
            let name = document.getElementById(`${cstrSurgical}Name`)
            let contents = document.getElementById(`${cstrSurgical}Contents`)
            let imgRightsLink = document.getElementById(`${cstrSurgical}imgRightsLink`)
            if (name && contents && imgRightsLink) {
              name.innerHTML = file.name;
              contents.innerHTML = file.contents.replace(/\s/, "<br/>")
              imgRightsLink.innerHTML = `Icon credit: <a href="${file.meta?.imgRightsLink}" target="_blank" style="text-decoration: underline; color: ${isDarkMode ? "white" : "black"};">here</a>`;
            }

          }
        });

      }


      // 開始処理
      Matter.Render.run(render);
      Matter.Runner.run(
        Matter.Runner.create(),
        engine
      );

    }
    return () => {
      // 一度描画フラグを折る
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



        <Box >
          <Grid container
            justifyContent="center"
            alignContent="center"
          >
            {/* 説明文 */}
            <Box
              sx={{
                margin: "2px",
                border: `${outerFrameSize}px solid #${isDarkMode ? "FFF" : "000"}`,
                borderRadius: "12px",
                width: `${isFiltable ? "640px" : "320px"}`,
              }}
            >
              {/* skills.name */}
              <Typography
                id={`${cstrSurgical}Name`}
                variant="h4"
                fontWeight="bold"
                textAlign="center"
              >
                Tap Icon
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

                  "::-webkit-scrollbar": {
                    width: "12px",
                    right: "12px",
                    // border: "5px solid #3498db",
                  },
                  "::-webkit-scrollbar-thumb": {
                    backgroundColor: `${(isFiltable ? !isDarkMode : isDarkMode) ? "white" : "black"}}`
                  },
                  // "::-webkit-scrollbar-track": {

                  //   backgroundColor: `${isDarkMode ? "black" : "white"}`
                  // },
                }}
                padding={2}

              >
                Tap any icons displayed bellow. <br />
                My comments will be shown.
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
          </Grid>
          {/* ボタン */}
          {
            (isFiltable) ?
              < Grid container
                // spacing={5}
                justifyContent="center"
                alignContent="center"

              >
                {props.dirSkills.directories.map((dir) => {
                  return <Grid item
                    xs={6}
                    sm={4}
                    md={2}
                  >
                    {/*} <Box
                  alignItems="center"
                  display="flex"
                  paddingX={3}
                  sx={{
                    border: `2px solid #${isDarkMode ? "FFF" : "000"}`,
                  }}
                  margin={0.5}
                >

                  <Box
                  // sx={{
                  //   textAlign: "center",
                  //   alignContent: "center",
                  //   alignItems: "center",
                  //   alignSelf: "center",
                  //   justifyContent: "center"
                  // }}
                  >

                    <Switch
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
                              mapSkills, mapKinds,
                              0, dirSkills.directories.indexOf(dir) % 2 === 0)
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

                      }}
                    />

                    <Typography
                      textAlign="center"
                      variant="caption"
                    >
                      {dir.name.toLocaleUpperCase()}
                    </Typography>
                  </Box>

                </Box> */}

                    <FormControlLabel

                      label={dir.name.toLocaleUpperCase()}
                      labelPlacement="bottom"
                      control={
                        <Switch
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
                                  mapSkills, mapKinds,
                                  0, dirSkills.directories.indexOf(dir) % 2 === 0)
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

                          }}
                        />
                      }

                    />
                  </Grid>
                })}
              </Grid> :
              <><br /><br /></>

          }
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

      </Box >

    </>
  );
};

export default Matters;
