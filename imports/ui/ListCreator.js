// @flow
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import ListItem from "material-ui/List/ListItem";

// Importing icons.
import FileIcon from "material-ui/svg-icons/editor/insert-drive-file";
import FolderIcon from "material-ui/svg-icons/file/folder";
/* eslint-enable no-unused-vars */

export default class ListCreator extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <blabla>
        <ListItem onClick={this.props.onItemClick}
         primaryText="Folder" leftIcon={<FolderIcon />} />
        <ListItem onClick={this.props.onItemClick}
         primaryText="File" leftIcon={<FileIcon />} />
      </blabla>
    );
  }
}
