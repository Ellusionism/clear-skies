import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitMorningAnswers() {
  try {
    yield axios.post('/api/morning-reflection', )
    };

    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* userSaga() {
  yield takeEvery('FETCH_USER', fetchUser);
}

export default userSaga;