import React, { Component } from 'react';
import PropTypes from 'prop-types';

type RadioSelectionFieldProps = {
  label: string;
  id: string;
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
    const { label, id, name, value } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type='radio' id={id} name={name} value={value}>
          {value}
        </input>
      </div>
    );
  }
}
