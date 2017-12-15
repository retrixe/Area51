// @flow
/* eslint-env node */
/* global Restivus */
// Import Meteor :3 and Mongo :3
import { Meteor } from 'meteor/meteor'

// Import fs and path to access the filesystem. And mime to get MIMETypes.
import { readdirSync, lstatSync, readFileSync } from 'fs'
import { join, sep, basename } from 'path'
import { lookup } from 'mime'

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
    // Start the loop to push folderContents.
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

Api.addRoute('/file/:_filePath', {
  get () {
    // Get basename.
    const filename = basename(this.urlParams._filePath)
    const mimetype = lookup(this.urlParams._filePath)

    // Set em' headers.
    this.response.writeHead({
      // Filename.
      'Content-disposition': `attachment; filename=${filename}`,
      // Type of file.
      'Content-type': mimetype
    })

    // Read the file and write data to response to client.
    const file = readFileSync(this.urlParams._filePath)
    this.response.write(file)
    // this.done() is quite self-explanatory.
    this.done()
  }
})
