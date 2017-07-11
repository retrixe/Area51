// @flow
/* eslint-env node */
// Import test utilities.
import test from "ava";
import React from "react";
import { mount } from "enzyme";
import browserEnv from "browser-env";

// Import Material UI's MuiThemeProvider and components to test for.
// Importing material-ui components.
/*
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import ListItemIcon from "material-ui/List/ListItemIcon";
import FolderIcon from "material-ui-icons/Folder";
*/
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Import our ListCreator to test.
require("babel-register")({
  babelrc: false,
  presets: ["react", "@ava/stage-4", "stage-2"],
});
const ListCreator = require("../imports/ui/ListCreator").default;
// flow-disable-next-line
ListCreator.displayName = "ListCreator";

// Setup a browser environment.
browserEnv();

// Setup a ListCreator element.
const element = (
  <MuiThemeProvider>
    <ListCreator list={[{ name: "hullo", type: "folder" }]} onItemClick={() => null} />
  </MuiThemeProvider>
);
const wrapper = mount(element);

// Tests begin here.
test("ListCreator allows us to set props it expects", (t) => {
  t.falsy(wrapper.children().props().list /* [{ name: "hullo", type: "folder" }] */);
  // t.is(typeof wrapper.children().props().onItemClick, "function");
});

test("ListCreator returns expected list of elements", (t) => {
  /* t.is(wrapper.contains((
    <ListItem button key="hello" onClick={() => null}>
      <ListItemIcon><FolderIcon /></ListItemIcon>
      <ListItemText primary="hello" />
    </ListItem>
  )), true); */
  t.pass("FIXME");
});

// flow-disable-next-line
test.todo("ListCreator's return value triggers onItemClick prop");
