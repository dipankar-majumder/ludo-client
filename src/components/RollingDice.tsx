import React, { useEffect } from 'react';
import style from './RollingDice.module.scss';

export default () => {
  return (
    <div className={style.main}>
      <div className={style.diceContainer}>
        <div className={style.dice}>
          <div className={style.front}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={style.back}>
            <span />
          </div>
          <div className={style.right}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={style.left}>
            <span />
            <span />
          </div>
          <div className={style.top}>
            <span />
            <span />
            <span />
          </div>
          <div className={style.bottom}>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
