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
    uri: '',
    play: false,
  });

  const { socket } = React.useContext(SocketContext);

  return (
    <div>
      <Button
        label="New Game"
        outlined
        onClick={() => {
          setState({ ...state, play: true });
          socket?.emit('new_game', (roomName: string) => {
            // eslint-disable-next-line no-console
            console.log(roomName);
          });
        }}
      />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <TextField
          outlined
          label="Join URI"
          value={state.uri}
          onChange={e => setState({ ...state, uri: e.currentTarget.value })}
        />
        <Button
          type="submit"
          label="Join"
          onClick={() => {
            setState({ ...state, play: true });
            socket?.emit(
              'join_game',
              state.uri,
              (room: string, error: unknown) => {
                if (error) {
                  // eslint-disable-next-line no-console
                  console.log(`join_game => Error: ${error}`);
                }
                // eslint-disable-next-line no-console
                console.log(`join_game => roomID: ${room}`);
              },
            );
          }}
        />
      </form>
    </div>
  );
}
