import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      >
        {this.props.text}
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
