import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';




function* postMorningAnswers(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/morning-reflection',
      data: action.payload
    })
    yield put({
      type: 'UPDATE_MORNING_REFLECTION',
    })
  }
  catch (error) {
    console.log('Error in morning.reflection.saga POST', error);
  }
}

function* updateMorningReflection() {
  try {
    yield axios({
      method: 'GET',
      url: '/api/morning-reflection',
    })
    yield put({
      type: 'SET_MORNING_REFLECTION',
      payload: response.data,
    })
  } catch (error) {
    console.error('Error in morning.reflection.saga GET', error);
  }
}


function* userSaga() {
  yield takeEvery('POST_MORNING_ANSWERS', postMorningAnswers);
  yield takeEvery('UPDATE_MORNING_REFLECTION', updateMorningReflection);
}

export default userSaga;