import React, { Component } from 'react';

type SelectionFieldProps = {
  value: string;
};
type SelectionFieldState = {};

export class SelectionField extends Component<
  SelectionFieldProps,
  SelectionFieldState
> {

  render() {
    const { value } = this.props;

    return <span style={{margin: '10px'}} >{value}</span>;
  }
}
