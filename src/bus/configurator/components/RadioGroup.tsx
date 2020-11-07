// Core
import React, { Component } from 'react';
// Types
import { PizzaParamsRadio } from '../../../availabelData';


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
      <fieldset style={{width: '300px', maxWidth: '300px'}}>
        <legend>{title}</legend>
        {data.map(({ value, name }, i) => {
          return (
            <div key={name} style={{ display: 'inline-block' }}>
              <label style={{margin: '10px'}} >
                <input
                  type='radio'
                  name={nameGroup}
                  value={value}
                  checked={this.state.value === value}
                  onChange={this.onChangeValue}
                />
                {value}
              </label>
            </div>
          );
        })}
      </fieldset>
    );
  }
}
