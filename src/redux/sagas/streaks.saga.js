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
        current_streak: streaks.current_streak,
        longest_streak: streaks.longest_streak,
      }
    })
  }
  catch (error) {
    console.log('Error in streaks.saga POST', error);
  }
}

function* resetStreak(action) {
  const id = action.payload.id;
  try {
    yield axios({
      method: 'PUT',
      url: `/api/streaks/reset`,
      data: id,
    })
    yield put({
      type: 'RESET_STREAK_STORE',
    })
  }
  catch (error) {
    console.log('Error in streaks.saga POST', error);
  }
}

function* streaksSaga() {
  yield takeEvery('GET_STREAKS', getStreaks);
  yield takeEvery('UPDATE_STREAKS', updateStreaks);
  yield takeEvery('RESET_STREAK', resetStreak);
}

export default streaksSaga;