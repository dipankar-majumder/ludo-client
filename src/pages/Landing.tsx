/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { TextField } from '@rmwc/textfield';
import '@rmwc/textfield/styles';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import style from './Landing.module.scss';

import { SocketContext } from '../contexts';

export default function Landing() {
  const [state, setState] = React.useState({
    nickName: '',
    next: false,
    url: '',
    play: false,
  });

  const { socket } = React.useContext(SocketContext);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Button
          label="New Game"
          outlined
          onClick={() => setState({ ...state, play: true })}
        />
        <TextField
          outlined
          label="Join URI"
          value={state.url}
          onChange={e => setState({ ...state, url: e.currentTarget.value })}
        />
        <Button
          label="Join"
          onClick={() => setState({ ...state, play: true })}
        />
      </form>
    </div>
  );
}
