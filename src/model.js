import * as sagaEffects from 'redux-saga/effects'
import { combineReducers } from 'redux'
import homeModel from './views/home/model'
import playerModel from './views/player/model'

function createReducer ({ namespace = '', reducers, ...options }) {
  return function reducer (state = options.state || {}, action) {
    const property = namespace && action.type.split(`${namespace}/`)[1]
    if (Object.prototype.hasOwnProperty.call(reducers, property)) {
      return reducers[property](state, action)
    }
    return state
  }
}

function createSagas ({ namespace, effects }) {
  return function *() {
    for (const key in effects) {
      if (Object.prototype.hasOwnProperty.call(effects, key)) {
        yield sagaEffects.takeEvery(`${namespace}/${key}`, effects[key].bind(effects, sagaEffects))
      }
    }
  }
}

export function *sagas () {
  yield sagaEffects.fork(createSagas(homeModel))
  yield sagaEffects.fork(createSagas(playerModel))
}

export const reducers = combineReducers({
  home: createReducer(homeModel),
  player: createReducer(playerModel),
})
