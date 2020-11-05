// Core
import React, { Component } from 'react';

type CheckboxFieldProps = {
  name: string;
  value: string;
};
type CheckboxFieldState = {
  isChecked: boolean;
};

export class CheckboxField extends Component<
  CheckboxFieldProps,
  CheckboxFieldState
> {
  constructor(props: CheckboxFieldProps) {
    super(props);

    state: {
      isChecked: false;
    }
  }

  render() {
    const { name, value } = this.props;

    return (
      <label>
        <input
          type='checkbox'
          name={name}
          value={value}
          checked={this.state.isChecked}
        />
      </label>
    );
  }
}
