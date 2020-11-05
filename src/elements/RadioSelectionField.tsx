import React, { Component } from 'react';
import PropTypes from 'prop-types';

type RadioSelectionFieldProps = {
  name: string;
  value: string;
};
type RadioSelectionFieldState = {};

export class RadioSelectionField extends Component<
  RadioSelectionFieldProps,
  RadioSelectionFieldState
> {
  constructor(props: RadioSelectionFieldProps) {
    super(props);
  }

  render() {
    const { name, value } = this.props;

    return (
      <div>
        <label>
          <input type='radio' name={name} value={value} />
          {value}
        </label>
      </div>
    );
  }
}
