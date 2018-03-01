import React from 'react'
import { history } from 'utils'
import styles from './style.less'

function TipPage ({ title = '404', detail = '您访问的资源不存在，点击页面返回' }) {
  return (
    <div className={styles.errorWrap} onClick={history.goBack}>
      <h1>{title}</h1>
      <h5>{detail}</h5>
    </div>
  )
}

export default TipPage
