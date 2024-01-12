import React, { useEffect, useRef, useState } from "react";
import Matter, { MouseConstraint } from "matter-js";
import { Box, Typography } from "@mui/material";
import dirsLanguages from "src/data/Root/Users/mattsunkun/skills/languages";
import { file } from "src/data/Root";

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
      let mattersLanguages: Matter.Body[] = [];
      dirsLanguages.files.forEach((file, ind) => {
        const matterLanguage = Matter.Bodies.circle(ind * 100 + 100, 100, 50,
          {
            render: {
              sprite: {
                texture: file.meta?.img ? file.meta?.img : `${process.env.PUBLIC_URL}/images/icons/icons8-no-480.png`,
                xScale: 0.2,
                yScale: 0.2,
              }
            }
          }
        );
        mattersLanguages.push(matterLanguage);
        mapSkills.set(matterLanguage, file);
        // diMatter[file.name] = matterLanguage;
      })
      Matter.Composite.add(
        engine.world,
        mattersLanguages,
        // dirsLanguages.files.map((file, ind) =>

        //   Matter.Bodies.circle(ind * 100 + 100, 100, 50,
        //     {
        //       render: {
        //         sprite: {
        //           texture: file.meta?.img ? file.meta?.img : `${process.env.PUBLIC_URL}/images/icons/icons8-no-480.png`,
        //           xScale: 0.2,
        //           yScale: 0.2,
        //         }
        //       }
        //     }
        //   )
        // )
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
        icons by 8
        frameworks:
        - fastapi
        - django
        libraries:
        - pythons
        - matter.js
        - three.js
        - .js系s
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
