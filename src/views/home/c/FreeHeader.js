import React from 'react'
import Icon from 'components/Icon'
import { config } from 'utils'
import styles from '../style.less'

function Header ({
  name,
}) {
  return (
    <h4 className={styles.freeHeader}>
      <span>{name}</span>
      <a className={styles.palyBtn}>
        <Icon type={config.icon.play2} />
        连续播放
      </a>
    </h4>
  )
}

export default Header
