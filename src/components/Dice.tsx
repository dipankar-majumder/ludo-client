import React, { useState } from 'react';
import style from './Dice.module.scss';
import RollingDice from './RollingDice';

export default () => {
  const [diceNumber, setDiceNumber] = useState(0);
  const [rolling, setRolling] = useState(false);

  const clickHandler = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
      setDiceNumber(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  };

  return (
    <>
      {rolling && <RollingDice />}
      {!rolling && (
        <div className={style.container}>
          <div className={style.diceWrapper} onClick={clickHandler}>
            <div className={style[`dice${diceNumber}`]}>
              {Array.from(Array(diceNumber).keys()).map(el => (
                <div key={el} />
              ))}
              {diceNumber === 0 && <div>Roll</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
