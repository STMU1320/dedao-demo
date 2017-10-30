import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.less'

function Header ({
  data = {},
}) {
  return (
    <h4 className={styles.sectionTitle}>
      <span className={styles.avatar}>
        { data.img && <i><img src={data.img} alt="avatar" /></i>}
        {data.name}
      </span>
      {data.right && <Link to={data.route || '404'} className={styles.right}>{data.right}</Link>}
    </h4>
  )
}

export default Header
