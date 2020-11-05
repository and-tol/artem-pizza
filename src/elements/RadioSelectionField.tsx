import React, { Component } from 'react';
import PropTypes from 'prop-types';

type RadioSelectionFieldProps = {
  name: string;
  value: string;
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

    this.state = { isChecked: false };
  }

  render() {
    const { name, value } = this.props;

    return (
      <div>
        <label>
          <input
            type='radio'
            name={name}
            value={value}
            checked={this.state.isChecked}
          />
          {value}
        </label>
      </div>
    );
  }
}
