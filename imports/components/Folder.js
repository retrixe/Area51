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
  constructor() {
    super();

    this.state = {
      test: [{
        name: "Folder",
        type: "folder",
      },
      {
        name: "File",
        type: "file",
      }],
    };
  }

  render() {
    return (
      <List>
        <ListCreator list={this.state.test} onItemClick={() => console.log("helloooo! wheeee! cookies!")} />
      </List>
    );
  }
}
