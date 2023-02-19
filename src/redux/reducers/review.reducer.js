import { combineReducers } from 'redux';

const review = (state = [], action) => {
  switch (action.type) {
    case 'SET_DEFAULT_REVIEW':
      return action.payload;
    default:
      return state;
  }
};

const chartData = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHART_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  review,
  chartData,
});