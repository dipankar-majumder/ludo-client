import React from 'react';
import style from './Room.module.scss';

export default function Room() {
  return (
    <div className={style.container}>
      <div className={style.border}>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
        <div className={style.place}> </div>
      </div>
    </div>
  );
}
