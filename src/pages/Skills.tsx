import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Box } from "@mui/material";

import ChottySvg from "../icons/python.svg"
import ChottyPng from "../icons/python.png"

// const getVerticesFromSvgPath = (pathData: string) => {
//   // pathデータをverticesに変換
//   // const vertices = Array.from(pathData).map((pathDat) => {
//   //   return Matter.Svg.pathToVertices(pathDat, 10);
//   // });
//   const parser = new DOMParser();
//   return parser.parseFromString(pathData, "image/svg+xml");
//   return Matter.Svg.pathToVertices(, 10);
// };

const g = async (path: string) => {
  const svgDoc = await fetch(path)
    .then((response) => response.text())
    .then((svgString) => {
      // SVG文字列からpathデータを抽出
      const parser = new DOMParser();
      return parser.parseFromString(svgString, "image/svg+xml");
    });
  const pathDatas = svgDoc.querySelectorAll("path");
  if (!pathDatas) return;
  // pathデータをverticesに変換
  const vertices = Array.from(pathDatas).map((pathData) => {
    return Matter.Svg.pathToVertices(pathData, 10);
  });
  return vertices;
};

var loadSvg = function (url: string) {
  return fetch(url)
    .then(function (response) { return response.text(); })
    .then(function (raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'); });
};

const getVerticesFromSvg = async (path: string) => {
  const svgString = await fetch(path).then((response) => response.text());

  const pathDataMatches = svgString.match(/d="(.*?)"/);
  if (!pathDataMatches || pathDataMatches.length < 2) {
    return null;
  }

  const pathData = pathDataMatches[1];
  const pathParser = new DOMParser();
  const pathDoc = pathParser.parseFromString(`<path d="${pathData}" />`, "image/svg+xml");

  const pathElement = pathDoc.querySelector("path");

  console.log(pathParser);
  console.log(pathDoc);
  console.log(pathElement);
  const vertices = [];

  if (pathElement) {
    // const pathElement = ...; // SVGPathElement オブジェクトを取得する方法
    console.table(pathElement instanceof SVGPathElement);
    console.log(typeof pathElement)
    const leng = pathElement.getTotalLength();

    const pointCount = 100;

    for (let i = 0; i < pointCount; i++) {
      const point = pathElement.getPointAtLength((i / pointCount) * leng);
      vertices.push([point.x, point.y]);
    }

  }
  return vertices;
};

const convertToVectors = (vertices: number[][]): Matter.Vector[][] => {
  return vertices.map(([x, y]) => [Matter.Vector.create(x, y)]);
};


const Skills = () => {
  const containerRef = useRef(undefined);
  let ignore = false;
  const canvasWidth = 1100;
  const canvaahsHeight = 600;
  useEffect(() => {
    if (!ignore) {
      const engine = Matter.Engine.create();
      const render = Matter.Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          width: canvasWidth, // Set the width of the canvas
          height: canvaahsHeight, // Set the height of the canvas
          background: 'blue',
          wireframeBackground: "transparent",
          // hasBounds: true,
          pixelRatio: 1
        },

      });
      // loadSvg('./svg/svg.svg').then(function (root) {
      //   // var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
      //   var select = function (root: any, selector: any) {
      //     return Array.prototype.slice.call(root.querySelectorAll(selector));
      //   };
      //   var vertexSets = select(root, 'path')
      //     .map(function (path: any) { return Matter.Svg.pathToVertices(path, 30); });

      //   Matter.Composite.add(engine.world, Matter.Bodies.fromVertices(400, 80, vertexSets, {
      //     render: {
      //       fillStyle: '#f19648',
      //       strokeStyle: '#f19648',
      //       lineWidth: 1
      //     }
      //   }, true));
      // });

      (async () => {

        // 頂点データの生成
        // const vertices = await getVerticesFromSvg(ChottySvg);
        // SVGのパスデータから座標データを取得
        const vertices = await getVerticesFromSvg(ChottySvg);
        // SVGの座標データをMatter.js用のデータに変換
        // const vertices = svgVertices.map(point => ({ x: point.x, y: point.y }));
        if (vertices) {
          const v = convertToVectors(vertices)

          // オブジェクトの生成
          const chotty = Matter.Bodies.fromVertices(0, 0, v, {
            label: "chotty",
            render: {
              sprite: {
                texture: ChottyPng,
                xScale: 10,
                yScale: 10,
              },
            },
          });

          Matter.Composite.add(engine.world, [chotty]);
        }
      })();
      //  }
      const boxA = Matter.Bodies.rectangle(400, 200, 80, 80, { render: { fillStyle: "red" } });
      const boxB = Matter.Bodies.rectangle(450, 50, 80, 80, { render: { fillStyle: "green" } });
      const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true, render: { fillStyle: "blue" } });

      const circPython = Matter.Bodies.circle(500, 500, 100);
      Matter.Composite.add(engine.world, [boxA, boxB, circPython, ground]);

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
