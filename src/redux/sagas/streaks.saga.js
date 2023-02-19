import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getStreaks(action) {
  const id = action.payload;
  try {
    const response = yield axios({
      method: 'GET',
      url: `/api/streaks/${id}`,
    })
    yield put({
      type: 'SET_STREAKS',
      payload: response.data[0],
    })
  }
  catch (error) {
    console.log('Error in streaks.saga GET', error);
  }
}

function* updateStreaks(action) {
  const streaks = action.payload;
  try {
    yield axios({
      method: 'PUT',
      url: `/api/streaks`,
      data: streaks,
    })
    yield put({
      type: 'SET_STREAKS',
      payload: {
        previous_reflection: streaks.previous_reflection,
        current_streak: streak.current_streak,
        longest_streak: streak.longest_streak,
      }
    })
  }
  catch (error) {
    console.log('Error in streaks.saga POST', error);
  }
}

function* streaksSaga() {
  yield takeEvery('GET_STREAKS', getStreaks);
  yield takeEvery('UPDATE_STREAKS', updateStreaks);
}

export default streaksSaga;