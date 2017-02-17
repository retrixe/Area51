// @flow
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

// Importing Material UI components below.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";

// Importing Area51 components.
import Folder from "./components/Folder";

// Importing redux.
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
/* eslint-enable no-unused-vars */

// Injecting onTouchTap.
injectTapEventPlugin();

// Setting up redux.
const createStoreWithMiddleware = applyMiddleware()(createStore);

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
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
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

ReactDOM.render(<App />, document.getElementById("main"));
