import {
  NEW_MESSAGE,
  NEW_MESSAGEUSER,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
} from 'src/actions';

const initialState = {
  toggleSettings: false,
  search: '',
  inputEmail: '',
  inputPassword: '',
  messageUser: [{
    id: 1,
    nameUser: null,
    text: '',
  }],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        search: action.message,
      };
    case NEW_MESSAGEUSER: {
      const tab = [...state.messageUser];
      const ids = state.messageUser.map((message) => message.id);
      const idMax = Math.max(...ids);
      const addData = {
        id: idMax + 1,
        nameUser: 'Corentin',
        text: action.message,
      };
      tab.push(addData);
      return {
        ...state,
        messageUser: tab,
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        toggleSettings: !state.toggleSettings,
      };
    case CHANGE_INPUT_VALUE: {
      if (action.nature === 'email'){
        return {
        ...state,
          inputEmail: action.message,
        }
      };
      if (action.nature === 'password'){
        return {
          ...state,
          inputPassword: action.message,
        }
      };
    }
    default:
      // de base on retourne le state courant
      return state;
  }
};

export default reducer;
