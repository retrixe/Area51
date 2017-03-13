import { Meteor } from "meteor/meteor";
import fs from "fs";

Meteor.methods({
  readFolder: function(folder) {
    return fs.readdirSync(folder);
  }
});