import React from 'react'
import styles from './style.less'

function Layout () {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>item1</div>
      <div className={styles.item}>item2</div>
      <div className={styles.item}>item3</div>
    </div>
  )
}

export default Layout
