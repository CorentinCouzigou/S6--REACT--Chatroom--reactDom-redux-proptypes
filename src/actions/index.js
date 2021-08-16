export const NEW_MESSAGE = 'NEW_Message';
export const NEW_MESSAGEUSER = 'NEW_MessageUser';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const toggleSettings = (message) => ({
  type: TOGGLE_SETTINGS,
  message,
});
export const newMessage = (message) => ({
  type: NEW_MESSAGE,
  message,
});
export const newMessageUser = (message) => {
  return ({
    type: NEW_MESSAGEUSER,
    message,
  })
};
export const ChangeInputValue = (message, nature) => ({
  type: CHANGE_INPUT_VALUE,
  message,
  nature,
});
