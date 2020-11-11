import React, { FC } from 'react';
import { Configurator } from './bus/configurator';


export const App: FC = function() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Configurator />
    </div>
  );
};