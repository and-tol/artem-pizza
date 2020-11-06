// Core
import React, { Component } from 'react';

type CheckboxFieldProps = {
  value: string;
  name: string;
  url: string;
  price: number;
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

    this.state = {
      isChecked: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target;

    this.setState({
      isChecked: target.checked,
    });
  }

  render() {
    const { value, name, url, price } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <img src={process.env.PUBLIC_URL + url} alt={value} width='64' />
        <p>{value}</p>
        <div>
          <p>{price} ₽</p>
          <input
            type='checkbox'
            name={name}
            checked={isChecked}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}
