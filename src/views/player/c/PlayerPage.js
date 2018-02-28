import React from 'react'
import classNames from 'classnames'
import { Icon, Button, Progress } from 'components'
import { config, timeFormat } from 'utils'
import styles from '../style.less'

const durationFormat = timeFormat({ day: 'D:', hour: ':', minute: ':', second: '' }, { m: '0', s: '0' })

export default function Page ({
  // loading,
  audio,
  onAudioToggle,
  onChangeCrtTime,
  onPanelChange,
  status,
  progress,
  audioIndex,
  audioList,
}) {
  const detail = audio.audio_detail || {}
  const statusIcon = status === config.PLAYING ? config.icon.pause2 : config.icon.play2
  const audioDuration = detail.duration
  const current = Math.ceil(progress * audioDuration / 100)
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
      <div className={styles.playBtns}>
        <div className={styles.progress}>
          <Progress type="line" percent={progress / 100} height={1} width="100vw" fgColor="#ffa42f" bgColor="#999" />
          <span style={{ left: `${progress}%` }}>{`${durationFormat(current)} / ${durationFormat(audioDuration)}`}</span>
        </div>
        <a className={classNames(styles.changeBtn, styles.back)} onClick={onChangeCrtTime.bind(null, -15)}><Icon type={config.icon.change} /> <span>15</span></a>
        <a className={styles.circle}><Icon type={config.icon.arrow} style={{ transform: 'matrix(-1,0,0,1,0,0)' }} /></a>
        <a className={classNames(styles.circle, styles.large)} onClick={onAudioToggle}><Icon type={statusIcon} /></a>
        <a className={styles.circle}><Icon type={config.icon.arrow} /></a>
        <a className={styles.changeBtn} onClick={onChangeCrtTime.bind(null, 15)}><Icon type={config.icon.change} /> <span>15</span></a>
      </div>
      <div className={styles.bottomNav}>
        <Button type="nav" icon={config.icon.list}>{`${audioIndex + 1}/${audioList.length}`}</Button>
        <Button type="nav" icon={config.icon.document}>文稿</Button>
        <Button type="nav" icon={config.icon.like}>1320</Button>
        <Button type="nav" icon={config.icon.download2}>下载</Button>
        <Button type="nav" icon={config.icon.share}>分享</Button>
      </div>
    </div>
  </div>)
}
