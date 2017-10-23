import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSagas from './sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()

const storeEnhancers = compose(
  applyMiddleware(...middlewares, sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)


export default function configureStore (initialState = {}) {
  const store = createStore(rootReducer, initialState, storeEnhancers)
  sagaMiddleware.run(rootSagas)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
