import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* createMorningReflection(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/morning-reflection',
      data: action.payload,
    })
  }
  catch (error) {
    console.log('Error in morning.reflection.saga POST', error);
  }
}

function* getMorningReflectionStore(action) {
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


function* morningReflectionSaga() {
  yield takeEvery('CREATE_MORNING_REFLECTION', createMorningReflection);
  yield takeEvery('GET_REFLECTION_STORE', getMorningReflectionStore);
}

export default morningReflectionSaga;