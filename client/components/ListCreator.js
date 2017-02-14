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
  render() {
    return (
      <blabla>
        <ListItem primaryText="Folder" leftIcon={<FolderIcon />} />
        <ListItem primaryText="File" leftIcon={<FileIcon />} />
      </blabla>
    );
  }
}
