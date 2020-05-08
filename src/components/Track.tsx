import React from 'react';
import style from './Track.module.scss';

const Box = ({ color = '' }: { color?: string }) => {
  return <div className={`${style.box} ${style[color]}`}> </div>;
};

export default function Track({ color = 'red' }: { color?: string }) {
  return (
    <div
      className={`${style.container} ${
        color === 'red' || color === 'yellow' ? style.landscape : ''
      }`}
    >
      {Array.from(Array(18).keys()).map(el => {
        if (
          color === 'red' &&
          (el === 1 ||
            el === 7 ||
            el === 8 ||
            el === 9 ||
            el === 10 ||
            el === 11)
        )
          return <Box key={el} color="red" />;
        if (
          color === 'green' &&
          (el === 5 ||
            el === 4 ||
            el === 7 ||
            el === 10 ||
            el === 13 ||
            el === 16)
        )
          return <Box key={el} color="green" />;
        if (
          color === 'blue' &&
          (el === 12 ||
            el === 13 ||
            el === 10 ||
            el === 7 ||
            el === 4 ||
            el === 1)
        )
          return <Box key={el} color="blue" />;
        if (
          color === 'yellow' &&
          (el === 16 ||
            el === 10 ||
            el === 9 ||
            el === 8 ||
            el === 7 ||
            el === 6)
        )
          return <Box key={el} color="yellow" />;
        return <Box key={el} />;
      })}
    </div>
  );
}
