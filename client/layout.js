import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Layout = ({ children }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant='h6'>Area51</Typography>
      </Toolbar>
    </AppBar>
    <div style={{ padding: 8, marginTop: '5em' }}>{children}</div>
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
const LayoutMemo = React.memo(Layout)
export default LayoutMemo
