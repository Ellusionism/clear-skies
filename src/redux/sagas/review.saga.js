import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* updateDefaultReview(action) {
  try {
    const id = action.payload;
    const response = yield axios({
      method: 'GET',
      url: `/api/review/${id}`,
    })
    yield put ({
      type: 'SET_DEFAULT_REVIEW',
      payload: response.data,
    })
  }
  catch (error) {
    console.log('Error in review.saga GET', error);
  }
}

function* reviewSaga() {
  yield takeEvery('UPDATE_DEFAULT_REVIEW', updateDefaultReview);
}

export default reviewSaga;