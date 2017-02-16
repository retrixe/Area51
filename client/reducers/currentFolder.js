import { updateKey } from "../actions/index.js";

export default function(state=[], action) {
  switch (action.type) {
  case updateKey:
  // eslint-disable-next-line
    console.log(action.payload);
    return action.payload;
  }
  return state;
}
