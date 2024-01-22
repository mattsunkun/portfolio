import React, { useContext } from 'react';
import { darkModeContext, tBooleanSet } from 'src/App';
const SpeechBubble: React.FC<{
  speech: string,
  squareLength: number,
}> = (props) => {
  const { val: isDarkMode, setVal: _ } = (useContext(darkModeContext) || {}) as tBooleanSet;

  const LENGTH: number = props.squareLength ?? -1;
  const linePad: number = 0.2;

  const fontSize: number = 10;
  const numLine: number = (props.speech.match(/\n/g)?.length ?? 0) + 1;

  const pad: number = 0.1
  const frame = {
    l: 100,
    in: 5,
  }
  const top = {
    st: 0.5,
    x: 0.1,
    y: 0.2,
  }

  return (
    <>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width={LENGTH}
        height={LENGTH}
        viewBox={`
        -${frame.l * (pad)} -${frame.l * (pad)} 
        ${frame.l * (1 + pad * 2)} ${frame.l * (1 + pad * 2 + top.y)}
        `}
      >
        <path stroke="#ccc" fill={isDarkMode ? "#222" : "#EEE"} d={
          // 下
          `M ${frame.l * (top.st - top.x)} ${frame.l} 
          L ${frame.l * top.st} ${frame.l * (1 + top.y)} 
          L ${frame.l * (top.st + top.x)} ${frame.l}` +
          `L ${frame.l - frame.in * 2} ${frame.l}` +
          // 右下
          `C 
          ${frame.l - frame.in} ${frame.l} 
          ${frame.l} ${frame.l - frame.in} 
          ${frame.l} ${frame.l - frame.in * 2}` +
          // 右
          `L ${frame.l} ${frame.in * 2}` +
          // 右上
          `C 
          ${frame.l} ${frame.in} 
          ${frame.l - frame.in} ${0} 
          ${frame.l - frame.in * 2} ${0}` +
          // 上
          `L ${frame.in * 2} ${0}` +
          // 左上
          `C 
          ${frame.in} ${0} 
          ${0} ${frame.in} 
          ${0} ${frame.in * 2}` +
          // 左
          `L ${0} ${frame.l - frame.in * 2}` +
          //左下
          `C 
          ${0} ${frame.l - frame.in} 
          ${frame.in} ${frame.l} 
          ${frame.in * 2} ${frame.l}` +
          // 終端
          `Z
  `} />
        <text
          x={frame.l / 2}
          y={frame.l / 2 - numLine * (1 + linePad) * fontSize / 2}
          font-size={`${fontSize}px`}
          fill={isDarkMode ? "#EEE" : "#222"}
          text-anchor="middle" alignment-baseline="middle"
        >
          {
            props.speech.split('\n').map((line, index) => (
              <tspan
                x={frame.l / 2}
                dy={`${1 + linePad}em`}
                key={index}>{line}</tspan>
            ))
          }

        </text>
      </svg>

    </>
  );
}

export default SpeechBubble;
