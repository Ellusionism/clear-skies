import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import {useSelector} from 'react-redux';

function* postMorningAnswers(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/morning-reflection',
      data: action.payload
    })
    yield put({
      type: 'UPDATE_MORNING_REFLECTION',
      payload: action.payload.user_id,
    })
  }
  catch (error) {
    console.log('Error in morning.reflection.saga POST', error);
  }
}

function* updateMorningReflection(action) {

  try {
    const id = action.payload
    const response = yield axios({
      method: 'GET',
      url: `/api/morning-reflection/${id}`,
    })
    yield put({
      type: 'SET_MORNING_REFLECTION',
      payload: response.data[0],
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