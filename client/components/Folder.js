// @flow
/* eslint-env node */
import React from "react";
// Importing redux + react-redux and actions.
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateCurrentFolder } from "../actions/index";

// Importing meteor (to get folder contents)
// flow-disable-next-line
import { Meteor } from "meteor/meteor"; //eslint-disable-line

/* eslint-disable no-unused-vars */
// Importing material-ui components.
import List from "material-ui/List/List";

// Importing the ListCreator.
import ListCreator from "../../imports/ui/components/ListCreator";
/* eslint-enable no-unused-vars */

class Folder extends React.Component<any, any, any> {
  componentDidMount() {
    this.state = {
      //folderContents: Meteor.call("readFolder", JSON.parse("settings.json"), function(error, result) {
      //  if (error) {
      //    return error;
      //  } else {
      //    return result;
      //  }
      //})
    };
  }

  render() {
    return (
      <List>
        <ListCreator onItemClick={() => this.props.updateCurrentFolder} />
      </List>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCurrentFolder }, dispatch);
}

export default connect(null, mapDispatchToProps)(Folder);
