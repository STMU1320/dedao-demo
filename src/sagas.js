import { fork } from 'redux-saga/effects'

import homeSaga from './views/home/saga'

export default function *rootSaga () {
  yield fork(homeSaga)
}
