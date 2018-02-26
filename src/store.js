import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import Perf from 'react-addons-perf'
import { reducers, sagas } from './model'

const win = window
// win.Perf = Perf

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

const storeEnhancers = compose(
  applyMiddleware(...middlewares, sagaMiddleware),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f,
)


export default function configureStore (initialState = {}) {
  const store = createStore(reducers, initialState, storeEnhancers)
  sagaMiddleware.run(sagas)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./model').reducers
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
