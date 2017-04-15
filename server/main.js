// @flow
/* eslint-env node */
// Import Meteor :3
// flow-disable-next-line
import { Meteor } from "meteor/meteor";
// Import fs to access the filesystem.
import fs from "fs";

Meteor.methods({
  getFolderContents(folder) {
    return fs.readdirSync(folder);
  },
});
