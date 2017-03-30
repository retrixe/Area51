// @flow
// This is the main entry file. index.js can be likened to index.html
import React from "react";

/* eslint-disable no-unused-vars */
// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";

// Importing Area51 components.
import Folder from "./components/Folder";
/* eslint-enable no-unused-vars */

// Final class.
export default class App extends React.Component<any, any, any> {
  constructor() {
    super();

    this.state = {
      currentFolder: "insert JSON parsing here",
    };

    this.paperStyle = {
      height: 500,
      width: "100%",
    };
  }

  paperStyle = {};
  muiTheme = getMuiTheme({ userAgent: false });


  readState() {
    return this.state;
  }

  writeToState(newState: Object) {
    this.setState(newState);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <AppBar title="Area51" showMenuIconButton={false} />
          <Paper zDepth={1} rounded={false} style={this.paperStyle}>
            <Folder readState={this.readState} writeToState={this.writeToState} />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
