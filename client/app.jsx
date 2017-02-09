// @flow
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Importing Material UI components below.
/* eslint-disable no-unused-vars */
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
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
          <div>
            <RaisedButton label="Click Me!"
             onTouchTap={() => this.setState({show: false})} primary={true} />
            <p>Hello!</p>  
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <RaisedButton label="Click Me!"
           onTouchTap={() => this.setState({show: true})} primary={true} />
        </MuiThemeProvider>
      );
    }
  }
}
