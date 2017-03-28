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
if (typeof window !== "undefined") injectTapEventPlugin();

// CSS here.
const myCSS = `/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/Fcx7Wwv8OzT71A3E1XOAjvesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}`;

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