// @flow
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import List from "material-ui/List/List";

// Importing the ListCreator.
import ListCreator from "./ListCreator";
/* eslint-enable no-unused-vars */

export default class File extends React.Component {
  render() {
    return (
      <List>
        <ListCreator />
      </List>
    );
  }
}
