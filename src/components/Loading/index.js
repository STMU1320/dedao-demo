import React from 'react'
import styles from './style.less'

function Loading ({ tip = '读取中...' }) {
  return (
    <div className={styles.wrap}>
      <span>{tip}</span>
    </div>
  )
}

export default Loading
