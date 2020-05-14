import React from 'react';
import { Room, Final } from '../components/Room';
import style from './Play.module.scss';
import Track from '../components/Track';
import Dice from '../components/Dice';

export default function Play() {
  return (
    <>
      <div className={style.container}>
        <Room color="red" />
        <Track color="green" />
        <Room color="green" />
        <Track color="red" />
        <Final />
        <Track color="yellow" />
        <Room color="blue" />
        <Track color="blue" />
        <Room color="yellow" />
      </div>
      <Dice />
    </>
  );
}
