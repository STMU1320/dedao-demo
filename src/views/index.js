import React from 'react'

import { Router, Route, Switch, Link } from 'react-router-dom'
import { history, isEmpty } from 'utils'

import Home from 'bundle-loader?lazy&name=home!./home'
import Player from 'bundle-loader?lazy&name=player!./player'
import List from 'bundle-loader?lazy&name=list!./list'
import ErrorPage from 'bundle-loader?lazy&name=error!./error'
import NotFound from 'bundle-loader?lazy&name=notfound!./404'
import Loading from 'components/Loading'

import Bundle from './Bundle'
import styles from './index.less'

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
)

const DynamicRouter = ({ Component, routes, ...attr }) => (
  <Route
    {...attr}
    render={props => {
      return isEmpty(routes)
        ? <Component {...props} />
        : <Component {...props}>
          <Switch>
            {routes.map(route => (
              <DynamicRouter key={route.path} {...route} />
              ))}
          </Switch>
        </Component>
    }}
  />
)

const appRoutes = [
  {
    path: '/',
    Component: createComponent(Home),
    exact: true,
  },
  {
    path: '/player',
    Component: createComponent(Player),
  },
  {
    path: '/list',
    Component: createComponent(List),
  },
  {
    path: '/error',
    Component: createComponent(ErrorPage),
  },
  {
    path: '*',
    Component: createComponent(NotFound),
  },
]

const PlayBar = createComponent(Player)

const App = () => (
  <Router history={history}>
    <div className="wrap">
      <ul className={styles.nav}>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/player">播放页面</Link></li>
        <li><Link to="/list">列表页面</Link></li>
      </ul>
      <PlayBar />
      <Switch>
        {appRoutes.map(route => <DynamicRouter key={route.path} {...route} />)}
      </Switch>
    </div>
  </Router>
)

export default App
