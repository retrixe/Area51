// @flow
/* eslint-env browser */
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import List from "material-ui/List/List";

// Import Meteor :3
// flow-disable-next-line
import { Meteor } from "meteor/meteor";

// Importing the ListCreator.
import ListCreator from "../../imports/ui/ListCreator";

// Fetching the config from settings.js to get where to initiate the file manager.
import { folderToShow } from "../../settings.json";
/* eslint-enable no-unused-vars */

// Create the class.
export default class Folder extends React.Component<any, any, any> {
  constructor() {
    super();

    this.state = {
      listItems: [
        {
          name: "Please wait, data is being fetched from the server.",
          type: "dataFetch",
        },
      ],
      currentFolder: folderToShow,
    };
  }

  componentDidMount() {
    // Fetch directory contents in async mode.
    Meteor.call("getFolderContents", folderToShow, (err, result) => {
      // set state to the go back item and the items in the directory.
      this.setState({ listItems: [{
        name: "Go to parent directory",
        type: "..",
      }, ...result] });
    });
  }

  onItemClick(type: string, addition: string) {
    if (type === "folder") {
      // Ask server to join paths.
      Meteor.call("joinPaths", this.state.currentFolder, addition, (err, result) => {
        // In callback, set currentFolder to the joint result.
        this.setState({ currentFolder: result });
        // Now get the folder contents for the result.
        Meteor.call("getFolderContents", this.state.currentFolder, (error, files) => {
          // set state to the go back item and the items in the directory.
          this.setState({ listItems: [{
            name: "Go to parent directory",
            type: "..",
          }, ...files] });
        });
      });
    } else if (type === "file") {
      console.log("hellooooo! wheeeee! cookies! I'm a fileeee!");
    } else {
      // Ask server to remove the last directory to go up one directory.
      Meteor.call("goUpOneDirectory", this.state.currentFolder, (err, result) => {
        // In callback, set currentFolder to the joint result.
        this.setState({ currentFolder: result });
        // Now get the folder contents for the result.
        Meteor.call("getFolderContents", this.state.currentFolder, (error, files) => {
          // set state to the go back item and the items in the directory.
          this.setState({ listItems: [{
            name: "Go to parent directory",
            type: "..",
          }, ...files] });
        });
      });
    }
  }

  render() {
    return (
      <List>
        <ListCreator list={this.state.listItems} onItemClick={(t, a) => this.onItemClick(t, a)} />
      </List>
    );
  }
}
