// @flow
/* eslint-env node */
// Import Meteor :3
// flow-disable-next-line
import { Meteor } from "meteor/meteor";
// Import fs and path to access the filesystem.
import fs from "fs";
import path from "path";

Meteor.methods({
  getFolderContents(folder) {
    const folderContents = fs.readdirSync(folder);
    const folderContentsWithTypes = [];
    let i;
    const getType = () => {
      if (fs.lstatSync(`${folder}/${folderContents[i]}`).isDirectory()) {
        return "folder";
      }
      return "file";
    };
    for (i = 0; i < folderContents.length; i += 1) {
      folderContentsWithTypes.push({ name: folderContents[i], type: getType() });
    }
    return folderContentsWithTypes;
  },
  joinPaths(...paths) {
    path.join(paths);
  },
});
