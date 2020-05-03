import React from 'react';
import style from './Track.module.scss';

const Box = () => {
  return <div className={style.box}> </div>;
};

export default function Track({
  horizontal = false,
}: {
  horizontal?: boolean;
}) {
  return (
    <div className={`${style.container} ${horizontal && style.horizontal}`}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}
