import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* createEveningReflection(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/evening-reflection',
      data: action.payload,
    })
    yield put({
      type: 'SET_EVENING_REFLECTION',
      payload: action.payload,
    })
  }
  catch (error) {
    console.log('Error in evening.reflection.saga POST', error);
  }
}

function* getEveningReflectionStore(action) {
  try {
    const id = action.payload
    const response = yield axios({
      method: 'GET',
      url: `/api/evening-reflection/${id}`,
    })
    yield put({
      type: 'SET_EVENING_REFLECTION',
      payload: response.data[0],
    })
  }
  catch (error) {
    console.log('Error in evening.reflection.saga POST', error);
  }
}


function* eveningReflectionSaga() {
  yield takeEvery('CREATE_EVENING_REFLECTION', createEveningReflection)
  yield takeEvery('GET_REFLECTION_STORE', getEveningReflectionStore);
}

export default eveningReflectionSaga;