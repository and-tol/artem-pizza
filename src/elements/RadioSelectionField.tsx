// Core
import React, { Component } from 'react';

type RadioSelectionFieldProps = {
  name: string;
  value: string;
  checked: boolean;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type RadioSelectionFieldState = {
  isChecked: boolean;
};

export class RadioSelectionField extends Component<
  RadioSelectionFieldProps,
  RadioSelectionFieldState
> {
  constructor(props: RadioSelectionFieldProps) {
    super(props);
  }

  render() {
    const { name, value, checked, onChangeValue } = this.props;

    return (
      <div>
        <label>
          <input
            type='radio'
            name={name}
            value={value}
            checked={checked}
            onChange={onChangeValue}
          />
          {value}
        </label>
      </div>
    );
  }
}
