import * as sagaEffects from 'redux-saga/effects'


import homeModel from './views/home/model'

function getSagas ({ namespace, effects }) {
  return function *() {
    for (const key in effects) {
      if (Object.prototype.hasOwnProperty.call(effects, key)) {
        yield sagaEffects.takeEvery(`${namespace}/${key}`, effects[key].bind(effects, sagaEffects))
      }
    }
  }
}


const homeSaga = getSagas(homeModel)

export default function *rootSaga () {
  yield sagaEffects.fork(homeSaga)
}
