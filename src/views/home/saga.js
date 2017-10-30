import { call, put, takeEvery } from 'redux-saga/effects'
import { history } from 'utils'
import { actionTypes } from './actions'
import * as api from './api'

function *getData (apipath, reduxFiled, response) {
  try {
    yield put({ type: actionTypes.save, data: { loading: true } })
    const { c } = yield call(api[apipath])
    yield put({ type: actionTypes.save, payload: { [reduxFiled]: !response ? c : c[response] } })
  } catch (e) {
    history.push('error')
  } finally {
    yield put({ type: actionTypes.save, data: { loading: false } })
  }
}

function *getHeaderData () {
  yield getData('getHotSearch', 'hotSearch')
  yield getData('getBanner', 'banner', 'list')
}

function *getLiveData () {
  yield getData('getLive', 'live', 'data')
}

function *getFreeData () {
  yield getData('getFree', 'free')
}
function *getBookRadio () {
  yield getData('getBookRadio', 'bookRadio', 'data')
}
function *getLastArea () {
  yield getData('getLastArea', 'lastArea', 'list')
}

function *homeSaga () {
  yield takeEvery(actionTypes.fetchHeader, getHeaderData)
  yield takeEvery(actionTypes.fetchLive, getLiveData)
  yield takeEvery(actionTypes.fetchFree, getFreeData)
  yield takeEvery(actionTypes.fetchBookRadio, getBookRadio)
  yield takeEvery(actionTypes.fetchLastArea, getLastArea)
}


export default homeSaga
