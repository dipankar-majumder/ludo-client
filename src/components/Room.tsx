import React from 'react';
import style from './Room.module.scss';

export function Room({ color = 'red' }: { color?: string }) {
  return (
    <div className={style[color]}>
      <div className={style.border}>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
      </div>
    </div>
  );
}

export const Final = () => {
  return (
    <div className={style.finalContainer}>
      <div className={style.square1}> </div>
      <div className={style.square2}> </div>
      <div className={style.square3}> </div>
      <div className={style.square4}> </div>
    </div>
  );
};
