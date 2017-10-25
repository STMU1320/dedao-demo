import { call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from './actions'
import * as api from './api'

function *getHeaderData () {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const [b, h] = yield [call(api.getBanner), call(api.getHotSearch)]
    yield put({ type: actionTypes.save, payload: { banner: b.c.list } })
    yield put({ type: actionTypes.save, payload: { hotSearch: h.c } })
  } catch (e) {
    console.log(e)
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}

function *homeSaga () {
  yield takeEvery(actionTypes.fetchHeader, getHeaderData)
}


export default homeSaga
