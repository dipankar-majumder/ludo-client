import React from 'react';

export const SocketContext = React.createContext<{
  socket?: SocketIOClient.Socket;
  setSocket?: React.Dispatch<
  React.SetStateAction<SocketIOClient.Socket | undefined>
  >;
}>({});
