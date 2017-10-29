import React from 'react'
import { history } from 'utils'
import styles from './style.less'

function NotFound () {
  return (
    <div className={styles.errorWrap} onClick={history.goBack}>
      <h1>404</h1>
      <h5>您访问的资源不存在，点击页面返回</h5>
    </div>
  )
}

export default NotFound
