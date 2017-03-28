// @flow
// This is the main entry file. index.js can be likened to index.html
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";

// Importing Area51 components.
import Folder from "./components/Folder";

// Importing redux.
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
/* eslint-enable no-unused-vars */

// Setting up redux.
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Final class.
export default class App extends React.Component<void, Object, any> {
  paperStyle = {};
  muiTheme = getMuiTheme({ userAgent: false });

  constructor(props: any) {
    super(props);

    this.paperStyle = {
      height: 500,
      width: "100%"
    };
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={this.muiTheme}>
          <div>
            <AppBar title="Area51" showMenuIconButton={false} />
            <Paper zDepth={1} rounded={false} style={this.paperStyle}>
              <Folder />
            </Paper>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
