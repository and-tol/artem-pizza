import React, { FC } from 'react';
import { Configurator } from './bus/configurator';

export const App: FC = function() {
  return (
    <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
      <Configurator />
    </div>
  );
};
