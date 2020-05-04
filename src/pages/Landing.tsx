import React, { useState } from 'react';

import { TextField } from '@rmwc/textfield';
import '@rmwc/textfield/styles';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
import style from './Landing.module.scss';

export default function Landing() {
  const [state, setState] = useState({
    nickName: '',
    next: false,
    url: '',
    play: false,
  });

  return (
    <div>
      {!state.next ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            outlined
            label="Nick Name"
            value={state.nickName}
            onChange={(e) =>
              setState({ ...state, nickName: e.currentTarget.value })
            }
          />
          <Button
            label="Next"
            onClick={() => setState({ ...state, next: true })}
          />
        </form>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <Button
            label="New Game"
            outlined
            onClick={() => setState({ ...state, play: true })}
          />
          <TextField
            outlined
            label="Nick Name"
            value={state.url}
            onChange={(e) => setState({ ...state, url: e.currentTarget.value })}
          />
          <Button
            label="Join"
            onClick={() => setState({ ...state, play: true })}
          />
        </form>
      )}
    </div>
  );
}
