import { call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from './actions'
import * as api from './api'

function *fetchUser (action) {
  try {
    yield put({ type: actionTypes.SETDATA, data: { loading: true } })
    const data = yield call(api.getUserInfo, action.data)
    yield put({ type: actionTypes.SETDATA, data })
  } catch (e) {
    console.log(e)
  } finally {
    yield put({ type: actionTypes.SETDATA, data: { loading: false } })
  }
}

function *homeSaga () {
  yield takeEvery(actionTypes.FETCHDATA, fetchUser)
}


export default homeSaga
