// @flow
import React from "react";
// Importing redux + react-redux and actions.
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateCurrentFolder } from "../actions/index";

/* eslint-disable no-unused-vars */
// Importing material-ui components.
import List from "material-ui/List/List";

// Importing the ListCreator.
import ListCreator from "./ListCreator";
/* eslint-enable no-unused-vars */

class File extends React.Component {
  render() {
    return (
      <List>
        <ListCreator onItemClick={this.props.updateCurrentFolder} />
      </List>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCurrentFolder }, dispatch);
}

export default connect(null, mapDispatchToProps)(File);
