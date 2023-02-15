import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postMorningAnswers(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/morning-reflection',
      data: action.payload
    })
  }
  catch (error) {
    console.log('Error in morning.reflection.saga POST', error);
  }
}


function* userSaga() {
  yield takeEvery('POST_MORNING_ANSWERS', postMorningAnswers);
}

export default userSaga;