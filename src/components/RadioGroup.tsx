// Core
import React, { Component } from 'react';
// Types
import { PizzaParamsRadio } from '../availabelData';
// Components
import { RadioSelectionField } from '../elements/index';

type RadioGroupProps = {
  data: Array<PizzaParamsRadio>;
  title: string;
  nameGroup: string;
};
type RadioGroupState = {
  value: string;
};

export class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
  constructor(props: RadioGroupProps) {
    super(props);

    this.state = {
      value: this.props.data[0].value,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({
      value: value,
    });
  }

  render() {
    const { data, title, nameGroup } = this.props;

    return (
      <div>
        <p>{title}</p>
        {data.map(({ value, name }, i) => {
          return (
            <RadioSelectionField
              key={name}
              name={nameGroup}
              value={value}
              checked={this.state.value === value}
              onChangeValue={this.onChangeValue}
            />
          );
        })}
      </div>
    );
  }
}
