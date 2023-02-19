import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const review = (state = [], action) => {
  switch (action.type) {
    case 'SET_DEFAULT_REVIEW':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  review,
});