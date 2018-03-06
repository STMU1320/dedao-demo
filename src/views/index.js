import React from 'react'

import { Router, Route, Switch, Redirect } from 'react-router-dom'
import classNames from 'classnames'
import { Button } from 'components'
import { history, isEmpty, config } from 'utils'

import Player from 'bundle-loader?lazy&name=player!./player'
import List from 'bundle-loader?lazy&name=list!./list'
import ErrorPage from 'bundle-loader?lazy&name=error!./error'
import NotFound from 'bundle-loader?lazy&name=notfound!./404'
import Developing from 'bundle-loader?lazy&name=developing!./developing'
import Loading from 'components/Loading'
import Home from 'bundle-loader?lazy&name=home!./home'

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

function NavBar ({ data, nHistory }) {
  return (<ul className={styles.nav}>
    {
      data.map(item => (
        <li key={item.link}><Button link={item.link} className={classNames({ active: item.link === nHistory.location.pathname })} icon={item.icon}>{item.text}</Button></li>
      ))
    }
  </ul>)
}

const navData = [
  {
    link: '/',
    icon: config.icon.browse,
    text: '发现',
  },
  {
    link: '/today',
    icon: config.icon.flag,
    text: '今日学习',
  },
  {
    link: '/account_book',
    icon: config.icon.createtask,
    text: '知识账本',
  },
  {
    link: '/purchased',
    icon: config.icon.task,
    text: '已购',
  },
  {
    link: '/profile',
    icon: config.icon.people,
    text: '我的',
  },
]

const appRoutes = [
  {
    path: '/',
    Component: createComponent(Home),
    exact: true,
  },
  {
    path: '/today',
    Component: () => <Redirect to="/developing" />,
  },
  {
    path: '/account_book',
    Component: () => <Redirect to="/developing" />,
  },
  {
    path: '/purchased',
    Component: () => <Redirect to="/developing" />,
  },
  {
    path: '/profile',
    Component: createComponent(List),
  },
  {
    path: '/developing',
    Component: createComponent(Developing),
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

const App = () => {
  return (<Router history={history}>
    <div className="wrap">
      <NavBar data={navData} nHistory={history} />
      <PlayBar />
      <Switch>
        {appRoutes.map(route => <DynamicRouter key={route.path} {...route} />)}
      </Switch>
    </div>
  </Router>)
}

export default App
