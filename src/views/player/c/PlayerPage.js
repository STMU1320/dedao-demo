import React from 'react'
import { Icon, Button } from 'components'
import { config } from 'utils'
import styles from '../style.less'

export default function Page ({
  loading,
  audio,
  onClick,
  onPanelChange,
  status,
  progress,
}) {
  const { detail } = audio
  return (<div className={styles.pageWrap}>
    <div className={styles.cover} >
      <img src={detail.icon} alt="bg" className={styles.bgImg} />
      <Icon type={config.icon.arrow} onClick={onPanelChange} className={styles.arrow} />
      <div className={styles.audioInfo}>
        <img src={detail.icon} alt="cover" />
        <h4>{detail.share_title}</h4>
        <p style={{ opacity: 0.7 }}>
          <Button icon={config.icon.down}>定时</Button>
          <Button icon={config.icon.down} style={{ margin: '0 1rem' }}>备注</Button>
          <Button icon={config.icon.down}>音速</Button>
        </p>
      </div>
    </div>
    <div className={styles.panel}>
      panel
    </div>
  </div>)
}
