/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import style from './App.module.scss';
import Play from './pages/Play';
import Landing from './pages/Landing';

function App() {
  const [state, setState] = useState({ nav: 'landing' });

  return (
    <div className={style.App}>
      <nav>
        <div
          onClick={() => {
            setState({ nav: 'landing' });
          }}
          role="button"
        >
          Landing
        </div>
        <div
          onClick={() => {
            setState({ nav: 'play' });
          }}
          role="button"
        >
          Play
        </div>
      </nav>
      {state.nav === 'play' && <Play />}
      {state.nav === 'landing' && <Landing />}
    </div>
  );
}

export default App;
