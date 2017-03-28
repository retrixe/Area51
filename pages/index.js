// @flow
// This can be likened to a index.html.
// For the main code, go to ../imports/main.js
// This will soon be merged with main.js.

/* eslint-disable no-unused-vars */
import App from "../imports/main";
import Head from "next/head";
/* eslint-enable no-unused-vars */

// CSS here.
const myCSS = `
@import url('https://fonts.googleapis.com/css?family=Roboto');
`;

// index.html type component.
export default () => (
  <div>
    <head>
      <link rel="icon" type="image/png" href="/static/assets/icon.png" />
      <title>Area51</title>
    </head>
    <App />
    <style jsx>{myCSS}</style>
  </div>
);