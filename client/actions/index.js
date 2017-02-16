export const updateKey = "UPDATE_KEY";
export function updateCurrentFolder() {
  // eslint-disable-next-line
  console.log("Action is called.");
  return {
    type: updateKey,
    payload: "Folder"
  };
}
