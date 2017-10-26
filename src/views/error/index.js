import React from 'react'
import { history } from 'utils'
import styles from './style.less'

function Error () {
  return (
    <div className={styles.errorWrap} onClick={history.back}>
      <h1>Error</h1>
      <h5>我们遇到了一些问题，请点击页面重试</h5>
    </div>
  )
}

export default Error
