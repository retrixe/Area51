// @flow
/* eslint-env browser */
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import ListItemIcon from "material-ui/List/ListItemIcon";

// Importing icons.
import FileIcon from "material-ui-icons/InsertDriveFile";
import FolderIcon from "material-ui-icons/Folder";
import ArrowBackIcon from "material-ui-icons/ArrowBack";
/* eslint-enable no-unused-vars */

export default (props: Object) => {
  const listItems = props.list.map((metadata) => {
    if (metadata.type === "folder") {
      return (
        <ListItem
          button
          key={metadata.name}
          onClick={() => props.onItemClick(metadata.type, metadata.name)}
        >
          <ListItemIcon><FolderIcon /></ListItemIcon>
          <ListItemText primary={metadata.name} />
        </ListItem>
      );
    } else if (metadata.type === "..") {
      return (
        <ListItem
          button
          key={metadata.name}
          onClick={() => props.onItemClick(metadata.type, metadata.name)}
        >
          <ListItemIcon><ArrowBackIcon /></ListItemIcon>
          <ListItemText primary={metadata.name} />
        </ListItem>
      );
    } else if (metadata.type === "dataFetch") {
      return (
        <ListItem key={metadata.name}>
          <ListItemText primary={metadata.name} />
        </ListItem>
      );
    }
    return (
      <ListItem
        button
        key={metadata.name}
        onClick={() => props.onItemClick(metadata.type, metadata.name)}
      >
        <ListItemIcon><FileIcon /></ListItemIcon>
        <ListItemText primary={metadata.name} />
      </ListItem>
    );
  });
  return (
    <div>
      {listItems}
    </div>
  );
};
