import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from 'bundle-loader?lazy&name=home!./home/view'
import Player from 'bundle-loader?lazy&name=player!./player'
import List from 'bundle-loader?lazy&name=list!./list'
import Loading from 'components/Loading'

import Bundle from './Bundle'
import styles from './index.less'


const createComponent = component => () => (
  <Bundle load={component}>
    {Component => (Component ? <Component /> : <Loading />)}
  </Bundle>
)

const App = () => (
  <Router>
    <div className="wrap">
      <ul className={styles.nav}>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/player">播放页面</Link></li>
        <li><Link to="/list">列表页面</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/player" component={createComponent(Player)} />
        <Route path="/list" component={createComponent(List)} />
      </Switch>
    </div>
  </Router>
)

export default App
