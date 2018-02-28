import React from 'react'
import Icon from 'components/Icon'
import { config } from 'utils'
import styles from '../style.less'

function Header ({
  name,
  status,
  onPlay,
}) {
  const statusIcon = status ? config.icon.pause2 : config.icon.play2
  return (
    <h4 className={styles.freeHeader}>
      <span>{name}</span>
      <a className={styles.palyBtn} onClick={onPlay}>
        <Icon type={statusIcon} />
        {status ? '正在播放' : '连续播放'}
      </a>
    </h4>
  )
}

export default Header
