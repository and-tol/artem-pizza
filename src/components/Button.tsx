import React, { Component } from 'react';

type ButtonProps = {
   children?: React.ReactNode
}
type ButtonState = {
  title: string;
  price?: number;
}

export class Button extends Component<ButtonProps, ButtonState> {}