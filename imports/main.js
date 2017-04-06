// @flow
// This is the main entry file. index.js can be likened to index.html
import React from "react";

/* eslint-disable no-unused-vars */
// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Text from "material-ui/Text";

// Importing Area51 components.
import Folder from "./components/Folder";
/* eslint-enable no-unused-vars */

// Final class.
export default class App extends React.Component<any, any, any> {
  constructor() {
    super();

    this.paperStyle = {
      height: 500,
      width: "100%",
    };
  }

  paperStyle = {};

  render() {
    return (
      <MuiThemeProvider>
        <Paper elevation={1} style={this.paperStyle}>
          <AppBar><Toolbar><Text type="title" colorInherit>Area51</Text></Toolbar></AppBar>
          <Folder />
        </Paper>
      </MuiThemeProvider>
    );
  }
}
