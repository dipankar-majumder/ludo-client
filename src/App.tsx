/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import io from 'socket.io-client';
import style from './App.module.scss';
import Play from './pages/Play';
import Landing from './pages/Landing';

import { SocketContext } from './contexts';
import { useForceUpdate } from './customHooks';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ nav?: string }>({
    nav: 'landing',
  });
  const [socket, setSocket] = React.useState<SocketIOClient.Socket>();
  React.useEffect(() => {
    setSocket(io('http://localhost:5000'));
  }, []);
  const forceUpdate = useForceUpdate();
  React.useEffect(() => {
    const checkSocketConnection = setInterval(() => {
      if (socket?.id) {
        clearInterval(checkSocketConnection);
        forceUpdate(0);
      }
      console.log('checkSocketConnection');
    }, 1000);
  });

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      <div className={style.App}>
        {`SocketID: ${socket?.id ? socket.id : 'Connecting'}`}
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
    </SocketContext.Provider>
  );
};

export default App;
