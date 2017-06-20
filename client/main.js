// @flow
/* eslint-env browser */

// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

// Importing Area51 components.
import Folder from "./components/Folder";

// Final class.
class App extends React.Component<void, {}, void> {
  constructor() {
    super();

    this.paperStyle = {
      marginTop: "10px",
      width: "100%",
    };
  }

  paperStyle: {
    marginTop: string,
    width: string | number,
  }

  paperStyle = {};

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar style={{ position: "relative" }}>
            <Toolbar><Typography type="title" color="inherit">Area51</Typography></Toolbar>
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
