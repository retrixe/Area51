// @flow

import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
/* eslint-disable no-unused-vars */
// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";

// Importing Area51 components.
import Folder from "./components/Folder";
/* eslint-enable no-unused-vars */

// Injecting onTouchTap.
injectTapEventPlugin();

// Final class.
export default class App extends React.Component<void, Object, any> {
  paperStyle = {};

  constructor(props: any) {
    super(props);

    this.paperStyle = {
      height: 500,
      width: "100%"
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Area51" showMenuIconButton={false} />
          <Paper zDepth={1} rounded={false} style={this.paperStyle}>
            <Folder />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
