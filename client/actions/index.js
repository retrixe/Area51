export const updateKey = "UPDATE_KEY";
export function updateCurrentFolder() {
  return {
    type: updateKey,
    payload: "Folder"
  };
}
