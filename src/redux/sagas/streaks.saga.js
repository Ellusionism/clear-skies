import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* createStreaks(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/streaks',
      data: action.payload,
    })
  }
  catch (error) {
    console.log('Error in streaks.saga POST', error);
  }
}

function* streaksSaga() {
  yield takeEvery('CREATE_STREAKS', createStreaks);
}

export default streaksSaga;