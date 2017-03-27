import { updateKey } from "../actions/index.js";

export default function(state=[], action) {
  switch (action.type) {
  case updateKey:
    return action.payload;
  }
  return state;
}
