// @flow
// This can be likened to a index.html.

/* eslint-disable no-unused-vars */
import App from "./main";
import Head from "next/Head";
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