import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.less'

function Header ({
  data = {},
}) {
  return (
    <h4 className={styles.sectionTitle}>
      <span>{data.name}</span>
      <Link to={data.route || '404'} className={styles.right}>{data.right}</Link>
    </h4>
  )
}

export default Header
