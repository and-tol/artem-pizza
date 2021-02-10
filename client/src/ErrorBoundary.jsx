import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2> Что-то пошло не так ...</h2>
        </div>
      );
    }

    return this.props.children;
  }
}
