import React from 'react'
import { config } from 'utils'
import Icon from '../Icon'
import Progress from '../progress'
import styles from './style.less'

function PlayBtn ({ progress = 0, status, onClick, ...otherProps }) {
  return (
    <a className={styles.btnWrap} onClick={onClick} {...otherProps}>
      <Icon type={status ? config.icon.pause : config.icon.play} className={styles.icon} />
      <Progress percent={progress / 100} showBg={false} r={11} strokeWidth={1} fgColor="#333" className={styles.progress} />
    </a>
  )
}

export default PlayBtn
