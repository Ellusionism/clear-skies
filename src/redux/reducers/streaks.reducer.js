import { combineReducers } from 'redux';

const streaks = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STREAKS':
      return action.payload;
    case 'RESET_STREAK_STORE':
      return {...streaks, current_streak: 0};
    default:
      return state;
  }
};

export default combineReducers({
  streaks,
});