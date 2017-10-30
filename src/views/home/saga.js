import { call, put, takeEvery } from 'redux-saga/effects'
import { history } from 'utils'
import { actionTypes } from './actions'
import * as api from './api'

function *getHeaderData () {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const [b, h] = yield [call(api.getBanner), call(api.getHotSearch)]
    yield put({ type: actionTypes.save, payload: { banner: b.c.list } })
    yield put({ type: actionTypes.save, payload: { hotSearch: h.c } })
  } catch (e) {
    history.push('error')
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}

function *getLiveData () {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const { c } = yield call(api.getLive)
    yield put({ type: actionTypes.save, payload: { live: c.data } })
  } catch (e) {
    history.push('error')
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}

function *getFreeData () {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const { c } = yield call(api.getFree)
    yield put({ type: actionTypes.save, payload: { free: c } })
  } catch (e) {
    history.push('error')
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}
function *getBookRadio () {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const { c } = yield call(api.getBookRadio)
    yield put({ type: actionTypes.save, payload: { bookRadio: c.data } })
  } catch (e) {
    history.push('error')
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}

function *homeSaga () {
  yield takeEvery(actionTypes.fetchHeader, getHeaderData)
  yield takeEvery(actionTypes.fetchLive, getLiveData)
  yield takeEvery(actionTypes.fetchFree, getFreeData)
  yield takeEvery(actionTypes.fetchBookRadio, getBookRadio)
}


export default homeSaga
