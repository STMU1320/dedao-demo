import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './views'
import configerStore from './store'
import './reset.css'
import './app.less'
import './icon/iconfont'

const appRoot = document.createElement('div')
appRoot.classList.add('app-root')
document.body.appendChild(appRoot)
const store = configerStore()
function renderWithHotReload (RootElement) {
  render(
    <AppContainer>
      <Provider store={store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    appRoot
  )
}

renderWithHotReload(App)
if (module.hot) {
  module.hot.accept('./views/index', () => {
    const Root = require('./views').default
    renderWithHotReload(Root)
  })
}
