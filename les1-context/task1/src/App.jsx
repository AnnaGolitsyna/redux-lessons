import React from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.light ? themes.dark : themes.light;
    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme} text="Dynamic Theme" />
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme} text="Default Theme" />
      </div>
    );
  }
}

export default App;
