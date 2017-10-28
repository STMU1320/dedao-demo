import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'components/Icon'
import styles from '../style.less'

const NavBar = ({
  data = [{
    icon: '#icon-iconbook',
    text: '电子书',
    route: '/book',
    bg: '#63a5f1',
  },
  {
    icon: '#icon-play1',
    text: '每天听本书',
    route: '/listen',
    bg: '#fe908f',
  },
  {
    icon: '#icon-store',
    text: '商城',
    route: '/store',
    bg: '#ffa42f',
  },
  {
    icon: '#icon-book2',
    text: '系列',
    route: '/series',
    bg: '#a29eff',
  },
  {
    icon: '#icon-all01',
    text: '全部',
    route: '/allCategory',
    bg: '#ffa42f',
  }],
}) => {
  return (
    <ul className={styles.navbar}>
      {data.length > 0 &&
      data.map(item => (
        <li key={item.route}>
          <Link to={item.route}>
            <i style={{ backgroundColor: `${item.bg}` }}>
              <Icon type={item.icon} />
            </i>
            {item.text}
          </Link>
        </li>
      ))
      }
    </ul>
  )
}

export default NavBar
