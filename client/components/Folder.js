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

export default class Folder extends React.Component<any, any, any> {
  constructor() {
    super();

    this.state = {
      listItem: [
        {
          name: "Please wait, data is being fetched from the server.",
          type: "dataFetch",
        },
      ],
      currentFolder: folderToShow,
    };
  }

  componentDidMount() {
    const goToParentDirectory = {
      name: "Go to parent directory",
      type: "..",
    };
    Meteor.call("getFolderContents", folderToShow, (err, result) => {
      this.setState({ listItem: [goToParentDirectory, ...result] });
    });
  }

  onItemClick(type: string, addition: string) {
    if (type === "folder") {
      Meteor.call("joinPaths", this.state.currentFolder, addition, (err, result) => {
        this.setState({ currentFolder: result });
        const goToParentDirectory = {
          name: "Go to parent directory",
          type: "..",
        };
        Meteor.call("getFolderContents", folderToShow, (error, files) => {
          this.setState({ listItem: [goToParentDirectory, ...files] });
        });
      });
    } else if (type === "file") {
      console.log("hellooooo! wheeeee! cookies! I'm a fileeee!");
    } else {
      console.log("hellooo! wheeee! wanna go up! cookies!!!!!");
    }
  }

  render() {
    return (
      <List>
        <ListCreator list={this.state.listItem} onItemClick={(t, a) => this.onItemClick(t, a)} />
      </List>
    );
  }
}
