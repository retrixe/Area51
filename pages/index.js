// @flow
// This can be likened to a index.html.
// For the main code, go to ../imports/main.js
// This will soon be merged with main.js.

/* eslint-disable no-unused-vars */
import React from "react";
import App from "../imports/main";
import Head from "next/head";

// Fix material-ui bug and enable faster onClick called onTouchTap.
import injectTapEventPlugin from "react-tap-event-plugin";
/* eslint-enable no-unused-vars */

// Injecting onTouchTap.
// injectTapEventPlugin();
if (typeof window !== "undefined") injectTapEventPlugin();

// CSS here.
const myCSS = `
@import url('https://fonts.googleapis.com/css?family=Roboto');
`;

// index.html type component.
export default () => (
  <div>
    <Head>
      <link rel="icon" type="image/png" href="/static/assets/icon.png" />
      <title>Area51</title>
    </Head>
    <App />
    <style>{myCSS}</style>
  </div>
);