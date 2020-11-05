// Core
import React, { Component } from 'react';
// InterfaceData
import { availabelData } from './availabelData';
// Components
import { RadioSelectionField } from './elements';

type ConfiguratorState = {};
type ConfiguratorProps = {};

export class Configurator extends Component<
  ConfiguratorProps,
  ConfiguratorState
> {
  constructor(props: ConfiguratorProps) {
    super(props);
  }
  render() {
    const { pizzaSize } = availabelData;
    return (
      <section>
        <div>
          <p>Размер</p>
          {pizzaSize.map(({ size, name }) => {
            return <RadioSelectionField key={name} name={name} value={size} />;
          })}
        </div>
      </section>
    );
  }
}
