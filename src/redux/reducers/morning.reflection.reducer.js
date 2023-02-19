import { combineReducers } from 'redux';

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