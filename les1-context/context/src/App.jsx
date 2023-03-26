import React, { useState } from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;
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

// const App = () => {
//   const [theme, setTheme] = useState(themes.dark);

//   const toggleTheme = () => {
//     theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
//   };

//   console.log('render');

//   return (
//     <div id="root">
//       <div>
//         <ThemeContext.Provider value={theme}>
//           <ThemedButton text="Dynamic Theme" onClick={toggleTheme} />
//         </ThemeContext.Provider>
//         <ThemedButton text="Default Theme" onClick={toggleTheme} />
//       </div>
//     </div>
//   );
// };

export default App;
