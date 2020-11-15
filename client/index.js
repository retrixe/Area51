import 'isomorphic-unfetch' // Polyfill fetch.
import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Files from './files'
import Login from './login'
import theme from './theme'

// Allow an SSR props for initial value.
const Index = (props) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/files/:path*'><Files initialFiles={props.initialFiles} /></Route>
          <Route path='/'><Login /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

Index.propTypes = {
  initialFiles: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    file: propTypes.bool,
    folder: propTypes.bool,
    symlink: propTypes.bool
  }))
}

ReactDOM.hydrate(<Index initialFiles={window.initialFiles || []} />, document.getElementById('app'))
