// @flow
/* eslint-env browser */
// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

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
class App extends React.Component<any, any, any> {
  constructor() {
    super();

    this.paperStyle = {
      marginTop: "10px",
      width: "100%",
    };
  }

  paperStyle = {};

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={{ position: "relative" }}>
            <Toolbar><Text type="title" colorInherit>Area51</Text></Toolbar>
          </AppBar>
          <Paper elevation={4} style={this.paperStyle} square>
            <Folder />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
