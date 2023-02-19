import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const morningAnswers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MORNING_REFLECTION':
      return action.payload ? action.payload : state;
    default:
      return state;
  }
};

export default combineReducers({
  morningAnswers,
});