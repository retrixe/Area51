// @flow
/* eslint-env node */
/* global Restivus */
// Import Meteor :3 and Mongo :3
import { Meteor } from 'meteor/meteor'

// Import fs and path to access the filesystem. And mime to get MIMETypes.
import { readdirSync, lstatSync } from 'fs'
import { join, sep } from 'path'

// Create the Meteor methods.
Meteor.methods({
  // This method enables the client to get the contents of any folder.
  getFolderContents (folder: string): Array<{ name: string, type: string }> {
    // Get folder contents and create initial variables the loop will write to.
    const folderContents: Array<string> = readdirSync(folder)
    const folderContentsWithTypes = []
    let i
    // Define the function to get the type of a directory item.
    const getType = () => {
      if (lstatSync(`${folder}/${folderContents[i]}`).isDirectory()) {
        return 'folder'
      }
      return 'file'
    }
    // Start the loop.
    for (i = 0; i < folderContents.length; i += 1) {
      // Push objects to folderContentsWithTypes.
      folderContentsWithTypes.push({ name: folderContents[i], type: getType() })
    }
    // Return folderContentsWithTypes.
    return folderContentsWithTypes
  },

  // Pass it some paths and get a combination of those paths.
  joinPaths (...paths): string {
    return join(...paths)
  },

  goUpOneDirectory (pathy: string): string {
    const pathyArray: Array<string> = pathy.split(sep)
    if (pathyArray[0] === '') {
      pathyArray[0] = '/'
    }
    const newArray = []
    for (let x = 0; x < pathyArray.length - 1; x += 1) {
      newArray.push(pathyArray[x])
    }
    return join(...newArray)
  }
})

// Create a Restivus API.
// flow-disable-next-line
const Api = new Restivus({
  prettyJson: true
})

Api.addRoute('/:_filePath', {
  get () {
    // var file = __dirname + '/upload-folder/dramaticpenguin.MOV';

    // var filename = path.basename(file);
    // var mimetype = mime.lookup(file);

    // Set em' headers.
    // this.response.setHeader('Content-disposition', 'attachment; filename=' + filename)
    // this.response.setHeader('Content-type', mimetype)

    // var filestream = fs.createReadStream(file);
    // filestream.pipe(res);
  }
})
