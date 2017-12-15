# Area51 (WIP)

## Description

### Status

#### Dependencies: [![dependencies Status](https://david-dm.org/ibujs/area51/status.svg?style=flat-square)](https://david-dm.org/ibujs/area51) [![devDependencies Status](https://david-dm.org/ibujs/area51/dev-status.svg?style=flat-square)](https://david-dm.org/ibujs/area51?type=dev)

#### Recommended node versions: [![node LTS](https://img.shields.io/badge/node%20LTS-^8.9.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/) [![node current](https://img.shields.io/badge/node%20current-^9.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/current/)

#### Least node version needed: [![node](https://img.shields.io/badge/node-%3E%3D4-brightgreen.svg?style=flat-square)](https://github.com/nodejs/LTS#lts-schedule)

#### Is the code in master working? Safe to compile? [![CircleCI](https://img.shields.io/circleci/project/github/retrixe/Area51.svg?style=flat-square)](https://circleci.com/gh/retrixe/Area51)

#### Is the code acclimatized? [![Code Climate](https://img.shields.io/codeclimate/github/retrixe/Area51.svg?style=flat-square)](https://codeclimate.com/github/retrixe/Area51) [![Code Climate](https://img.shields.io/codeclimate/issues/github/retrixe/Area51.svg?style=flat-square)](https://codeclimate.com/github/retrixe/Area51/issues)

Project Area51, a small project to enable access to stored files. Specify a folder to it on your local filesystem, and you'll be able to access it from anywhere, being able to download your files and entering folders. I developed this to get quick access to my files from anywhere, though it's mainly a side project. Authentication and uploading files is in the works.

This project is built with Meteor (framework for full-stack development), React and ES2017/ESNext JavaScript w/ Flow static typing.

## Supported browsers

- Chrome 51+
- Firefox 45+
- Opera 38+
- Microsoft Edge 14+ (Version shipping with Windows 10 Anniversary Update)
- Safari 9+
- iOS 9+

IE is not supported out of the box, but you may tweak with .babelrc to support Internet Explorer till version 9. You can add polyfills like es5-shim to go even further, but React does not officially support this.

## Installation

### Getting started

[Click here](https://www.meteor.com/install) to first download the latest version of Meteor. Next, download the code in this repository (1st release not published yet) by [clicking here](https://github.com/ibujs/Area51/archive/master.zip) and unzip it in a folder, or clone this repository.

Open a command prompt window in the folder where the app is located and execute the following commands (with an internet connection):

```zsh
> meteor npm install
> npm start
```

You can then navigate to localhost:3000 to see the application running.

A one-click setup process is in the works.

### Configuration

The configuration file is `settings.json` and should be present in the root folder. It has one key, folderToShow, which is the path to the folder Area51 will display.

```json
{
  "folderToShow": "C:\\"
}
```

## Development

### Set up a development environment

Download and install [Node.js](https://nodejs.org) and [Meteor](https://www.meteor.com). Once you have installed them, clone this repository. Open a command prompt/terminal inside the application's folder and type:

```zsh
> meteor npm install
> meteor
```

This will start the application and will be accessible at localhost:3000. Hot reloading is present in Meteor.

### Debugging

`meteor debug` will cause Node 8 to start listening on port 9229 for debugger connections. If you are using a debugger or code editor that supports this, you can attach to port 9229. A VSCode launch configuration is setup which will automatically launch Meteor and debug it for you. node-debugger for Atom is a plugin which sort-of works, and WebStorm can be setup for debugging as well. If you do not use these editors, then you can use [Google Chrome or Vivaldi for debugging purposes as well.](https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4)

### Recommended development tools

- [ ] Atom with linter-eslint and linter-flow package, or;
- [ ] Visual Studio Code with the FlowType and ESLint plugins.
- [ ] Yarn package manager instead of npm

### Development guidelines

- Everything is in ES6/ES2015, ES7/ES2016 and ES2017, as well as ESNext (including stage-0).
- Please lint your code with ESLint and type check it with Flow. ESLint follows the airbnb coding standard.