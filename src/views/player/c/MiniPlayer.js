import React from 'react'
import { VelocityComponent } from 'velocity-react'
import { Icon, Loading, PlayButton } from 'components'
import { config } from 'utils'

import defaultCover from '../../../../assets/images/defaultCover.png'
import styles from '../style.less'

const defaultDetail = {
  icon: defaultCover,
  title: '无',
  share_title: '未知',
}

export default function Mini ({
  loading,
  audio,
  onClick,
  onClose,
  onPanelChange,
  status,
  progress,
  visible,
}) {
  const statusIcon = status === config.PLAYING
  const detail = audio.audio_detail || defaultDetail
  return (
    <VelocityComponent
      component=""
      animation={{ opacity: visible ? 1 : 0, bottom: visible ? '0rem' : '-5rem' }}
      duration={500}
    >
      <div className={styles.miniContent}>
        <Icon type={config.icon.close} onClick={onClose} />
        <div className={styles.audioInfo}>
          <img src={detail.icon} alt="cover" />
          <div>
            <h4>{detail.title}</h4>
            <p>{detail.share_title}</p>
          </div>
        </div>
        <Icon
          type={config.icon.arrow}
          onClick={onPanelChange}
          style={{ transform: 'rotate(-90deg)' }}
        />
        {loading
          ? <Loading tip="" />
          : <PlayButton
            status={statusIcon}
            progress={progress}
            onClick={onClick}
            />}
      </div>
    </VelocityComponent>
  )
}
