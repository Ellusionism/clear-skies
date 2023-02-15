import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postEveningAnswers(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/evening-reflection',
      data: action.payload
    })
  }
  catch (error) {
    console.log('Error in evening.reflection.saga POST', error);
  }
}


function* userSaga() {
  yield takeEvery('POST_EVENING_ANSWERS', postEveningAnswers);
}

export default userSaga;