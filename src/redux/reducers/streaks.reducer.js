import { combineReducers } from 'redux';

const streaks = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STREAKS':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  streaks,
});