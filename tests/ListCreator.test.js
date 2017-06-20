// @flow
/* eslint-env node */
// Import test utilities.
import test from "ava";
import React from "react";
import { mount } from "enzyme";
import browserEnv from "browser-env";

// Import Material UI's MuiThemeProvider.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Import our ListCreator to test.
require("babel-register")({
  babelrc: false,
  presets: ["react", "@ava/stage-4", "stage-0"],
});
const ListCreator = require("../imports/ui/ListCreator").default;

// Setup a browser environment.
browserEnv();

// Setup a ListCreator element.
const element = <MuiThemeProvider><ListCreator list={["hullo"]} onItemClick={() => null} /></MuiThemeProvider>;
const wrapper = mount(element);

// Tests begin here.
test("ListCreator allows us to set props it expects", (t) => {
  t.is(wrapper.props().list, /* ["hullo"] */undefined);
  t.is(wrapper.props().onItemClick, /* () => null */undefined);
});

// flow-disable-next-line
test.todo("ListCreator returns expected list of elements");

// flow-disable-next-line
test.todo("ListCreator's return value triggers onItemClick prop");
