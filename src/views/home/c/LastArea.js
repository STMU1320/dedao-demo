import React from 'react'
import { Link } from 'react-router-dom'
import Loading from 'components/Loading'
import styles from '../style.less'

const LastArea = ({ list = [] }) => {
  return list.length > 0
    ? <ul className={styles.lastArea}>
      {list.map(item => (
        <li key={item.log_id}>
          <Link to="404">
            <img src={item.m_img} alt={item.m_title} />
          </Link>
        </li>
        ))}
    </ul>
    : <Loading />
}

export default LastArea
