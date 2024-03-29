import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getChartData(action) {
  try {
    const id = action.payload;
    const response = yield axios({
      method: 'GET',
      url: `/api/chart/${id}`,
    })
    yield put ({
      type: 'SET_CHART_DATA',
      payload: response.data,
    })
  }
  catch (error) {
    console.log('Error in chart.saga GET', error);
  }
}

function* chartSaga() {
  yield takeEvery('GET_CHART_DATA', getChartData);
}

export default chartSaga;