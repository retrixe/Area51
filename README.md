# Area51

[![node.js download](https://img.shields.io/badge/requires%20node->=10-brightgreen.svg?style=flat-square&logo=node.js&logoColor=aqua)](https://nodejs.org/en/download/) [![CircleCI](https://img.shields.io/circleci/project/github/retrixe/Area51.svg?style=flat-square&logo=circleci&logoColor=black)](https://circleci.com/gh/retrixe/Area51)

Project Area51, a small project to enable access to stored files. Specify a folder to it on your local filesystem, and you'll be able to access it from anywhere, being able to download your files and entering folders. I developed this to get quick access to my files from anywhere, though it's mainly a side project. Uploading files is in the works.

This project is built with Webpack, Babel, React and JavaScript. It supports IE 11, Firefox ESR, and the latest versions of all modern browsers. It may not render correctly on older browsers.

## Installation

### Getting started

[Click here](https://nodejs.org/en/download/) to first download the latest version of Node. Next, clone this repository by running `git clone https://github.com/retrixe/Area51.git` or download the code in this repository and unzip it in a folder.

Next, follow the steps in the configuration section to setup Area51 before trying to start it.

Then, open a command prompt/terminal window in the folder where the app is located and run the following commands:

```zsh
> yarn
> yarn build
> yarn start
```

You can then navigate to localhost:3000 to see the application running.

### Configuration

The configuration file is `config.json` and should be present in the project folder. `folder` sets the folder which Area51 will serve. The `users` object contains all the usernames and passwords in SHA-256 format for authentication. `port` is the port which Area51 will listen on.

```json
{
  "port": 3000,
  "folder": "/path/to/folder",
  "users": {
    "<username>": "<SHA-256 hash here>"
  }
}
```

## Development

It is preferable to have an editor such as [Visual Studio Code](https://code.visualstudio.com) with the ESLint extension. This project also uses Yarn v2 with PnP instead of npm/yarn v1.

### Set up a development environment

Download and install [Node.js](https://nodejs.org), then clone this repository and open a command prompt/terminal inside the application's folder and type:

```zsh
> yarn
> yarn dev
```

This will start the application and will be accessible at localhost:3000. While the server will hot reload, the client currently does not hot reload.

### Debugging

`yarn dev` will cause Node to start listening on port 9229 for debugger connections. If you are using a debugger or code editor that supports this, you can attach to port 9229. A VSCode launch configuration is setup which will automatically launch the app and help you debug it. node-debugger for Atom is a plugin which sort-of works, and WebStorm can be setup for debugging as well. If you do not use these editors, then you can use [Google Chrome or Vivaldi for debugging purposes as well.](https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4)
