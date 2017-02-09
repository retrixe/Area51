// @flow
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Importing Material UI components below.
/* eslint-disable no-unused-vars */
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
/* eslint-enable no-unused-vars */

// Injecting onTouchTap.
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    if (this.state.show) {
      return (
        <MuiThemeProvider>
          <Button raised label="Click me!" primary />
          <p>Hello!</p>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <Button raised label="Click me!" primary />
        </MuiThemeProvider>
      );
    }
  }
}
