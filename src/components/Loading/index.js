import React from 'react'
import { config } from 'utils'
import Icon from '../Icon'
import styles from './style.less'

function Loading ({ tip = '读取中...' }) {
  return (
    <div className={styles.wrap}>
      <Icon type={config.icon.loading} className={styles.icon} />
      <span>{tip}</span>
    </div>
  )
}

export default Loading
