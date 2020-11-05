import React, { Component } from 'react';
import PropTypes from 'prop-types';

type SelectionFieldProps = {
  value: string;
};
type SelectionFieldState = {};

export class SelectionField extends Component<
  SelectionFieldProps,
  SelectionFieldState
> {
  constructor(props: SelectionFieldProps) {
    super(props);
  }

  render() {
    const { value } = this.props;

    return <span style={{margin: '10px'}} >{value}</span>;
  }
}
