# To-do list for making this app work :3
## (for now, this is it's purpose, later it'll become a roadmap of sorts :P)

## What to do on a "per-React component" basis:
#### App component (aka main thing):
- [ ] NOT REQUIRED: Fix state type in component.

#### Folder component (the list of files and folders)
- [ ] Read the filesystem, get a list of files and folders, and pass 'em to ListCreator.
- [ ] THUS VERY IMPORTANT FOR THE ABOVE LINE, WORK OUT NODE.JS APIs ON NEXT.JS because I'm unable to import "fs" from `imports/components/Folder.js`
- [ ] NOT REQUIRED: Fix it's state types blabla Flow stuff.
- [ ] Fix the parameters it passes to ListCreator

#### ListCreator component (generates a list from certain parameters) 
- [ ] Set up ".." element.
- [ ] Enhance key support using IDs.
- [ ] Set up folder reactions and file reactions to inform Folder of files and folders clicked.

## What to do on the entire app:
- [ ] Write Express server.
- [ ] Write tests for all components and stuff.
- [ ] Shift to Meteor for v2.0.