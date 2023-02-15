import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const eveningAnswers = (state = '', action) => {
  switch (action.type) {
    case 'SET_EVENING_ANSWERS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  eveningAnswers,
});