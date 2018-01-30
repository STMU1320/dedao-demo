import { combineReducers } from 'redux'
import homeModel from './views/home/model'

function createReducer ({ namespace = '', reducers, ...options }) {
  return function reducer (state = options.state || {}, action) {
    const property = namespace && action.type.split(`${namespace}/`)[1]
    if (reducers.hasOwnProperty(property)) {
      return reducers[property](state, action)
    }
    return state
  }
}

export default combineReducers({
  home: createReducer(homeModel),
})
