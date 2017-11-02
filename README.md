# Area51 (WIP)

## Description

### Status

#### Dependencies: [![dependencies Status](https://david-dm.org/ibujs/area51/status.svg?style=flat-square)](https://david-dm.org/ibujs/area51) [![devDependencies Status](https://david-dm.org/ibujs/area51/dev-status.svg?style=flat-square)](https://david-dm.org/ibujs/area51?type=dev)

#### Recommended node versions: [![node LTS](https://img.shields.io/badge/node%20LTS-^8.9.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/) [![node current](https://img.shields.io/badge/node%20current-^9.0.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/current/)

#### Least node version needed: [![node](https://img.shields.io/badge/node-%3E%3D4-brightgreen.svg?style=flat-square)](https://github.com/nodejs/LTS#lts-schedule)

#### Is the code in master working? Safe to compile? [![CircleCI](https://img.shields.io/circleci/project/github/retrixe/Area51.svg?style=flat-square)](https://circleci.com/gh/retrixe/Area51)

#### Is the code acclimatized? [![Code Climate](https://img.shields.io/codeclimate/github/retrixe/Area51.svg?style=flat-square)](https://codeclimate.com/github/retrixe/Area51) [![Code Climate](https://img.shields.io/codeclimate/issues/github/retrixe/Area51.svg?style=flat-square)](https://codeclimate.com/github/retrixe/Area51/issues)

Project Area51, a small project to enable access to stored files. Basically, specify a folder to it on your local filesystem, and you'll be able to access it from anywhere, being able to download your files and entering folders. I developed this to bypass my school's website blocking stuff and get quick access to my files and stuff (like fetching random scripts which wreck the system lol). Yes, there is no authentication or uploading files support right now, but I'll add it later :P

This project is based entirely on Meteor (framework for full-stack development), React and ES2017/ESNext JavaScript. Thus it serves as an example for React, Meteor and ES2017+.

## Supported browsers :3

- Chrome 51+
- Firefox 45+
- Opera 38+
- Microsoft Edge 14+ (Version shipping with Windows 10 Anniversary Update)
- Safari 9+
- iOS 9+

INTERNET EXPLORER NOT SUPPORTED. Not even IE 11. GO upgrade your browser. Please? No. Go mess with .babelrc and compile it from scratch. Blame Microsoft or go use Edge.

## Installation

### Getting started

Setting this up requires Meteor to be installed, because it's not much of a one-click-to-install app right now. I might make it easier to install in the unforseeable future (perhaps never if this thing doesn't get an issue from someone ELSE using it, not expecting that to happen) but not now. [Click here](https://www.meteor.com/install) to download the latest version of Meteor.

Next, download the code in this repository (1st release not published yet) by [clicking here](https://github.com/ibujs/Area51/archive/master.zip) and unzip it in a folder, or clone this repository.

Finally, open a command prompt window in the folder where the app is located (Google exists for a reason, if you don't know) and execute the following commands (with an internet connection):

```zsh
> meteor npm install
> npm start
```

You can then navigate to localhost:3000 to see the application running.

### Configuration

Right now when you start it, it looks like a mock-up of the app. You can't configure it as of yet.

Note: This section requires update.

## Development

You're welcome to throw some pull requests and issues at me. This is the application's development structure.

### Set up a development environment

This guide requires you to know some basic command line commands, like how to navigate the filesystem. It requires the knowledge of how to download a GitHub repository (preferably using Git cloning) and some regular computer know-how.

Download and install [Node.js](https://nodejs.org) and [Meteor](https://www.meteor.com). If you go up this README near the top, there are two badges which tell us the recommended versions for this app, but you can go down to Node 4 without losing any functionality, since Meteor internally uses Node 8. When Node 4 is no longer supported, we will also withdraw official support for it. Once you've installed it, clone this repository in your Documents folder or somewhere where you know you will find it, not some random place. Open a command prompt/terminal inside the application's folder and type:

```zsh
> meteor npm install
> meteor
```

This will start the application and will be accessible at localhost:3000. Any edits you make to the applications will be near-immediately reflected on the display, or will require you to reload the site in case of an issue.

### Debugging

`meteor debug` will cause Node 8 to start listening on port 9229 for debugger connections. If you are using a debugger or code editor that supports this, you can attach to port 9229. A VSCode attach to debugger configuration is setup, node-debugger for Atom is a handy plugin which sort-of works, and WebStorm can be setup for debugging as well. If you do not use these editors, then you can use [Google Chrome or Vivaldi for debugging purposes as well.](https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4)

### Recommended development tools :3

- [ ] Atom with linter-eslint and linter-flow package, or Visual Studio Code with the FlowType and ESLint plugins.
- [ ] Node.js v6/v7
- [ ] Yarn package manager instead of npm

### Development CHEAT SHEET :3

#### The basic project structure :3

Note: This is not up to date.

```none
Area51
|
|--  .meteor - Contains the Meteor configuration, and on starting the app, installs the dev_bundle there.
|--  .vscode - Contains VSCode configuration.
|--  client - Contains client-side code
|       |_ components - Single-use components with logic.
|--  imports - Contains reusable components, and certain single-use components for import.
|--  node_modules - Contains modules used by app (created on `npm/yarn install`)
|--  public - Contains static content to serve.
|--  server - Contains server-side code
|--  tests - Contains unit tests :P testing with Ava :P
|--  .babelrc - Defines transpilation presets with Babel (what to transform into legacy JS from modern JS).
|--  .eslintrc.js - Contains rules for how code should be written with ESLint. Uses airbnb preset.
|--  .flowconfig - Contains configuration for type checking with Flow.
|--  .gitignore - What to ignore when pushing to GitHub (like generated directories).
|--  circle.yml - Setting up CI servers, enables us to continuously test code.
|--  package.json - Contains project information and it's version, dependencies, and Ava configuration.
|--  settings.json - In development, will contain all configuration for the app.
|__  yarn.lock - Locks the dependencies to a certain version when using yarn package manager (it's awesome, yarn > npm).
```

#### Coding standards :3

- Everything is in ES6/ES2015, ES7/ES2016 and ES2017, as well as ESNext (including stage-0).
- Please lint your code with ESLint and type check it with Flow. ESLint follows the airbnb coding standard.
- Write tests for code you push (well, there aren't any tests right now, so let's encourage them :P)