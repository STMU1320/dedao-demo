import React from 'react'
import { config } from 'utils'
import Icon from '../Icon'
import styles from './style.less'

function PlayBtn ({ progress, status, onClick, ...otherProps }) {
  return (
    <a className={styles.btnWrap} onClick={onClick} {...otherProps}>
      <Icon type={status ? config.icon.pause : config.icon.play} className={styles.icon} />
    </a>
  )
}

export default PlayBtn
