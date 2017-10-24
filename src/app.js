import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from 'views'
import configerStore from './store'
import './reset.css'
import './app.css'

const appEnter = document.createElement('div')
document.body.appendChild(appEnter)
const store = configerStore()
function renderWithHotReload (RootElement) {
  render(
    <AppContainer>
      <Provider store={store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    appEnter
  )
}

renderWithHotReload(App)
if (module.hot) {
  module.hot.accept('./views/index', () => {
    const Root = require('./views').default
    renderWithHotReload(Root)
  })
}
