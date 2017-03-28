// @flow
/* eslint-env node */
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import List from "material-ui/List/List";

// Importing the ListCreator.
import ListCreator from "../ui/ListCreator";
/* eslint-enable no-unused-vars */

export default class Folder extends React.Component<any, any, any> {
  render() {
    return (
      <List>
        <ListCreator onItemClick={() => this.props.updateCurrentFolder} />
      </List>
    );
  }
}