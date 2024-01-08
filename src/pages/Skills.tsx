import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Box } from "@mui/material";

const Skills = () => {
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

      const boxA = Matter.Bodies.rectangle(400, 200, 80, 80, { render: { fillStyle: "red" } });
      const boxB = Matter.Bodies.rectangle(450, 50, 80, 80, {
        render: {
          fillStyle: "green",
          // sprite: {
          //   texture: `${process.env.PUBLIC_URL}/images/unibirth.png`,
          //   xScale: 1,
          //   yScale: 1,
          // }
        },

      });
      const ground = Matter.Bodies.rectangle(400, 610, 810, 60, {
        isStatic: true,

      });

      const circPython = Matter.Bodies.circle(500, 500, 25, {
        // density: 0.0005,
        // frictionAir: 0.06,
        // restitution: 0.3,
        // friction: 0.01,
        render: {
          sprite: {
            texture: `${process.env.PUBLIC_URL}/images/icons/python.png`,
            xScale: 1,
            yScale: 1,
          }
        }
      });

      const myArray = [1, 2, 3, 4, 5];
      Matter.Composite.add(
        engine.world,
        [
          boxA, boxB, circPython, ground,
        ]
      );
      Matter.Composite.add(
        engine.world,
        myArray.map(item =>
          Matter.Bodies.circle(item * 100, item * 100, 25, {
            // density: 0.0005,
            // frictionAir: 0.06,
            // restitution: 0.3,
            // friction: 0.01,
            render: {
              sprite: {
                texture: `${process.env.PUBLIC_URL}/images/icons/python.png`,
                xScale: 1,
                yScale: 1,
              }
            }
          })
        )
      );

      // Matter.Render.setPixelRatio(render, "auto")
      Matter.Render.run(render);

      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Box ref={containerRef} style={{ border: "2px solid #FFF" }} />
    </>
  );
};

export default Skills;
