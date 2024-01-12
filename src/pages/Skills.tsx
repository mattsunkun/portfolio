import React, { useEffect, useRef, useState } from "react";
import Matter, { MouseConstraint } from "matter-js";
import { Box, Typography } from "@mui/material";
import dirLanguages from "src/data/Root/Users/mattsunkun/skills/languages";
import { directory, file } from "src/data/Root";
import dirFrameworks from "src/data/Root/Users/mattsunkun/skills/frameworks";
import dirLibraries from "src/data/Root/Users/mattsunkun/skills/libraries";
import dirSoftware from "src/data/Root/Users/mattsunkun/skills/software";

const Skills = () => {

  const [selectSkill, setSelectSkill] = useState<string>("asdf");

  // const diMatter: { [name: string]: Matter.Body } = {};
  const mapSkills: Map<Matter.Body, file> = new Map();
  const containerRef = useRef(undefined);
  let ignore = false;
  const canvasWidth = 1100;
  const canvasHeight = 600;
  useEffect(() => {
    if (!ignore) {
      const engine = Matter.Engine.create();
      const render = Matter.Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          width: canvasWidth, // Set the width of the canvas
          height: canvasHeight, // Set the height of the canvas
          // background: 'blue',
          wireframeBackground: "transparent",
          // hasBounds: true,
          pixelRatio: 1,
          wireframes: false,
        },

      });

      // 地面
      Matter.Composite.add(
        engine.world,
        [
          Matter.Bodies.rectangle(
            400, 610, 2010, 60,
            {
              isStatic: true
            }
          )
        ]
      );

      // skills
      const createMatterSkills = (dirSkills: directory, mapSkills: Map<Matter.Body, file>, y: number): Matter.Body[] => {
        let ans: Matter.Body[] = [];
        const radius: number = 30;
        const padding: number = 0;
        dirSkills.files.forEach((file, ind) => {

          const matterSkill = Matter.Bodies.circle((ind + 1) * (radius * 2 + padding), y, radius,
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
        })
        return ans;
      };

      Matter.Composite.add(
        engine.world,
        [
          ...createMatterSkills(dirLanguages, mapSkills, 50),
          ...createMatterSkills(dirFrameworks, mapSkills, 100),
          // ...createMatterSkills(dirLibraries, mapSkills),
          // ...createMatterSkills(dirSoftware, mapSkills),
        ]
      );

      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine,
        {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: true },
          }
        }
      )
      render.mouse = mouse;
      Matter.Composite.add(
        engine.world,
        mouseConstraint
      )
      Matter.Events.on(mouseConstraint, "mousedown", e => {
        // const a = 
        // console.log(e.source.body)
        const file = mapSkills.get(e.source.body);
        if (file) {
          setSelectSkill(`${file.name} ${file.contents}`);

        }
      }
      )


      // Matter.Events.on(mouseConstraint, "mousedown", (event) => {
      //   const bodiesUnderMouse = Matter.Query.point(engine.world.bodies, event.mouse.position);

      //   if (bodiesUnderMouse.length > 0) {
      //     // マウスで掴んでいるオブジェクトの処理
      //     const grabbedObject = bodiesUnderMouse[0];
      //     console.log("Grabbed Object:", grabbedObject);
      //   }
      // });


      Matter.Render.run(render);

      Matter.Runner.run(
        Matter.Runner.create(),
        engine
      );

    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Typography>
        <a target="_blank" href="https://icons8.com/icon/WbRVMGxHh74X/%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB">コンソール</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
        // needless
        Image by <a href="https://pixabay.com/users/patbec-27165555/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7172337">patbec</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7172337">Pixabay</a>
        <a href="https://www.flaticon.com/free-icons/google-apps-script" title="google apps script icons">Google apps script icons created by Freepik - Flaticon</a>
        techicons

        libraries:
        - pythons
        - matter.js
        - three.js
        - .js系s
        - mui
        software:
        - git
        - shotcut
        - docker
        hardware:
        - raspberry
        - cisco
        platform:
        - aws
        - Render
        - vercel
        - detaspace

      </Typography>
      <Typography variant="h3">
        {selectSkill}
      </Typography>
      <Box ref={containerRef} style={{ border: "2px solid #FFF" }} />
    </>
  );
};

export default Skills;
