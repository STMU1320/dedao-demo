import React from 'react'
import classnames from 'classnames'
import { config } from 'utils'
import Icon from '../Icon'
import styles from './style.less'

function Loading ({ tip = '读取中...', style, className }) {
  return (
    <div className={classnames(styles.wrap, className)} style={style}>
      <Icon type={config.icon.loading} className={styles.icon} />
      <span>{tip}</span>
    </div>
  )
}

export default Loading
