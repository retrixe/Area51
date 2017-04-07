# Area51 (WIP)
#### Dependencies: [![dependencies Status](https://david-dm.org/ibujs/area51/status.svg?style=flat-square)](https://david-dm.org/ibujs/area51) [![devDependencies Status](https://david-dm.org/ibujs/area51/dev-status.svg?style=flat-square)](https://david-dm.org/ibujs/area51?type=dev)
#### Recommended node versions: [![node LTS](https://img.shields.io/badge/node%20LTS-6.10.2-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/) [![node current](https://img.shields.io/badge/node%20current-7.8.0-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/current/)
#### Minimum node version needed: [![node](https://img.shields.io/badge/node-%3E%3D4-brightgreen.svg?style=flat-square)](https://github.com/nodejs/LTS#lts-schedule)
#### Is the code in master working? Safe to compile? [![CircleCI](https://img.shields.io/circleci/project/github/ibujs/Area51.svg?style=flat-square)](https://circleci.com/gh/ibujs/Area51)

Project Area51, a tiny project to enable access to stored files. Basically, specify a folder to it on your local filesystem, and you'll be able to access it from anywhere, being able to download your files and entering folders. I developed this to bypass my school's website blocking stuff and get quick access to my files and stuff (like fetching random scripts which wreck the system lol). Yes, there is no authentication or uploading files support right now, but I'll add it later :P
This project is based entirely on Next.js (framework for SSR rendering), Express, React and ES2017/ESNext JavaScript. Thus it serves as an example for React SSR using Next.js, and also requesting data from Express from the front-end. (NOTE that I am just beginning work on the Express back-end.)

# Supported browsers:
- Chrome 41+
- Firefox 31 ESR+
- Opera 28+
- All releases of Microsoft Edge (gj Microsoft with the ES6+ support)
- Safari 9+
- iOS 9+
INTERNET EXPLORER NOT SUPPORTED. Not even IE 11. GO upgrade your browser.
Please? No. Go mess with .babelrc and compile it from scratch. Blame Microsoft or go use Edge.

# Installation
## Getting started
Setting this up requires Node.js, because it's not much of a one-click-to-install app right now. I might make it easier to install in the unforseeable future (maybe never if this thing doesn't get an issue from someone ELSE using it, not expecting that to happen) but not now. [Click here](https://nodejs.org/en/download/) to download the latest LTS version (anything equal to or above Node 4) of node.js for Windows and macOS, and [click here](https://nodejs.org/en/download/package-manager/) to install the newest version of node.js on most Linux distributions.
Next, download the code in this repository (1st release not published yet) by [clicking here](https://github.com/ibujs/Area51/archive/master.zip) and unzip it in a folder, or simply clone this repository.
Finally, open a command prompt window in the folder where the app is located (Google exists for a reason, if you don't know) and execute the following commands (with an internet connection):
```
> npm install
> npm run build
> npm start
```
You can then navigate to localhost:3000 to see the application running.
## Configuration
Right now when you start it, it looks like a mock-up of the app. You can't configure it as of yet.
# Development?
You're welcome to throw some pull requests and issues at me. This is how this app is being developed.
## Set up a development environment
This guide requires you to know some basic command line commands, like how to navigate the filesystem. It requires the knowledge of how to download a GitHub repository (preferably using Git cloning) and some regular computer know-how.

Download and install [Node.js](https://nodejs.org). If you go up this README near the top, there are two badges which tell us the recommended versions for this app, but you can go down to version 4 without losing much functionality. When version 4 is discontinued, we will also withdraw support for it. Once you've installed it, clone this repository in your Documents folder or somewhere where you know you will find it, not some random place. Open a command prompt/terminal inside the application's folder and type:
```
> npm install
> npm run dev
```
This will start the application and will be accessible at localhost:3000. Any edits you make to the applications will be near-immediately reflected on the display, or will require you to reload the site in case of an issue.

## Recommended development tools.
- [ ] Atom with linter-eslint and linter-flow package, or Visual Studio Code with the flowtype and ESLint plugins.
- [ ] Node.js v6/v7
- [ ] Yarn package manager instead of npm

## Development CHEAT SHEET!
### The basic directory structure.
```
Area51
|
|--  .meteor - Contains the Meteor configuration, and on starting the app, installs the dev_bundle there.
|--  .vscode - Contains VSCode configuration.
|--  imports - Contains reusable components, and certain single-use components for import.
|--  node_modules - Contains modules used by app (created when npm install is run)
|--  client - Contains client-side code
|       |_ components - Single-use components with logic.
|--  public - Contains static content to be served.
|__  tests - Contains unit tests :P
```

### Coding standards.
- Everything can be coded in ES6/ES2015, ES7/ES2016 and ES2017, as well as ESNext.
- Please lint your code with ESLint and type check it with Flow (command to do this coming soon, rn use plugins for your code editor). ESLint follows the airbnb coding standard.