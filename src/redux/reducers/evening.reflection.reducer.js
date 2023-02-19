import { combineReducers } from 'redux';

const eveningAnswers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EVENING_REFLECTION':
      return action.payload ? action.payload : state;
    default:
      return state;
  }
};

export default combineReducers({
  eveningAnswers,
});