// @flow
import React from "react";
/* eslint-disable no-unused-vars */
// Importing material-ui components.
import ListItem from "material-ui/List/ListItem";

// Importing icons.
import FileIcon from "material-ui/svg-icons/editor/insert-drive-file";
import FolderIcon from "material-ui/svg-icons/file/folder";
/* eslint-enable no-unused-vars */

export default (props: Object) => {
  const listItems = props.list.map((metadata) => {
    if (metadata.type === "folder") {
      return (
        <ListItem
          key={metadata.name}
          onClick={props.onItemClick} primaryText={metadata.name} leftIcon={<FolderIcon />}
        />
      );
    }
    return (
      <ListItem
        key={metadata.name}
        onClick={props.onItemClick} primaryText={metadata.name} leftIcon={<FileIcon />}
      />
    );
  });
  return (
    <div>
      {listItems}
    </div>
  );
};
