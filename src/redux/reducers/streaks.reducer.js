import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const streaks = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STREAKS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  streaks,
});