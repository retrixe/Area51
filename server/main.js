// @flow
/* eslint-env node */
// Import Meteor :3 and Mongo :3
import { Meteor } from "meteor/meteor";

// Import fs and path to access the filesystem. And mime to get MIMETypes.
import { readdirSync, /* readFileSync, */ lstatSync } from "fs";
import { join, sep /* , parse */ } from "path";

// Import Koa (chill, we need it for something Meteor can't handle, lol..)
// (At least not without doing a lot of work setting up CollectionFS.)
// import Koa from "koa";

// Create the Meteor methods.
Meteor.methods({
  // This method enables the client to get the contents of any folder.
  getFolderContents(folder: string): Array<{ name: string, type: string }> {
    // Get folder contents and create initial variables the loop will write to.
    const folderContents: Array<string> = readdirSync(folder);
    const folderContentsWithTypes = [];
    let i;
    // Define the function to get the type of a directory item.
    const getType = () => {
      if (lstatSync(`${folder}/${folderContents[i]}`).isDirectory()) {
        return "folder";
      }
      return "file";
    };
    // Start the loop.
    for (i = 0; i < folderContents.length; i += 1) {
      // Push objects to folderContentsWithTypes.
      folderContentsWithTypes.push({ name: folderContents[i], type: getType() });
    }
    // Return folderContentsWithTypes.
    return folderContentsWithTypes;
  },

  // Pass it some paths and get a combination of those paths.
  joinPaths(...paths): string {
    return join(...paths);
  },

  goUpOneDirectory(pathy: string): string {
    const pathyArray: Array<string> = pathy.split(sep);
    if (pathyArray[0] === "") {
      pathyArray[0] = "/";
    }
    const newArray = [];
    for (let x = 0; x < pathyArray.length - 1; x += 1) {
      newArray.push(pathyArray[x]);
    }
    return join(...newArray);
  },
});

// Create our Koa app.
// const app = new Koa();

// Listen on / for any requests for files.
/* app.use((ctx) => {
  const response = ctx.response;
  const request = ctx.request;
  response.attachment(parse(request.query.path).base);
  response.body = readFileSync(request.query.path);
}); */

// Listen on port 81 (yeh. YEH.)
// app.listen(81);
