import React from 'react';
import Room from '../components/Room';
import style from './Play.module.scss';
import Track from '../components/Track';

const Final = () => {
  return (
    <div className={style.finalContainer}>
      <div className={style.square}> </div>
      <div className={style.square}> </div>
      <div className={style.square}> </div>
      <div className={style.square}> </div>
    </div>
  );
};

export default function Play() {
  return (
    <div className={style.container}>
      <Room />
      <Track />
      <Room />
      <Track horizontal />
      <Final />
      <Track horizontal />
      <Room />
      <Track />
      <Room />
    </div>
  );
}
