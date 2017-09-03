// @flow
/* eslint-env browser */
import React from 'react'
// Importing material-ui components.
import ListItem from 'material-ui/List/ListItem'
import ListItemText from 'material-ui/List/ListItemText'
import ListItemIcon from 'material-ui/List/ListItemIcon'

// Importing icons.
import FileIcon from 'material-ui-icons/InsertDriveFile'
import FolderIcon from 'material-ui-icons/Folder'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'

export default (props: Object): React.createElement => {
  const listItems: Array<React.createElement> = props.list.map((metadata: {
    type: string, name: string
  }): React.createElement => {
    if (metadata.type === 'folder') {
      return (
        <ListItem
          button
          key={metadata.name}
          onClick={(): void => props.onItemClick(metadata.type, metadata.name)}
        >
          <ListItemIcon><FolderIcon /></ListItemIcon>
          <ListItemText primary={metadata.name} />
        </ListItem>
      )
    } else if (metadata.type === '..') {
      return (
        <ListItem
          button
          key={metadata.name}
          onClick={(): void => props.onItemClick(metadata.type, metadata.name)}
        >
          <ListItemIcon><ArrowBackIcon /></ListItemIcon>
          <ListItemText primary={metadata.name} />
        </ListItem>
      )
    } else if (metadata.type === 'dataFetch') {
      return (
        <ListItem key={metadata.name}>
          <ListItemText primary={metadata.name} />
        </ListItem>
      )
    }
    return (
      <ListItem
        button
        key={metadata.name}
        onClick={(): void => props.onItemClick(metadata.type, metadata.name)}
      >
        <ListItemIcon><FileIcon /></ListItemIcon>
        <ListItemText primary={metadata.name} />
      </ListItem>
    )
  })
  return (
    <div>
      {listItems}
    </div>
  )
}
