// @flow
/* eslint-env browser */

// Importing React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

// Importing Material UI components below.
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

// Importing Area51 components.
import Folder from './components/Folder'

// Flow.
type State = {
  paperStyle: {
    marginTop: string,
    width: string | number,
  }
}

// Final class.
class App extends React.Component<{}, State> {
  constructor () {
    super()

    this.state = {
      paperStyle: {
        marginTop: '10px',
        width: '100%'
      }
    }
  }

  render () {
    return (
      <div>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar><Typography type='title' color='inherit'>Area51</Typography></Toolbar>
        </AppBar>
        <Paper elevation={4} style={this.state.paperStyle} square>
          <Folder />
        </Paper>
      </div>
    )
  }
}

// flow-disable-next-line
ReactDOM.render(<App />, document.getElementById('main'))
