import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { config } from 'utils'

import Mini from './c/MiniPlayer'
import PlayerPage from './c/PlayerPage'
import styles from './style.less'

class PlayBar extends React.Component {
  videoEle = null
  timer = null
  getvideoEle = ele => {
    this.videoEle = ele
  }

  componentWillReceiveProps (nextProps) {
    const { status, audio } = nextProps
    if (audio.id !== this.props.audio.id) {
      this.videoEle.src = audio.detail.mp3_play_url
      this.videoEle.currentTime = 0
      this.handlePlay()
    } else if (status !== config.PLAYING) {
      this.handlePause()
    } else {
      this.handlePlay()
    }
  }

  componentWillUnmount () {
    this.videoEle = null
    clearInterval(this.timer)
    this.timer = null
  }

  handlePlay = () => {
    const { dispatch } = this.props
    if (this.timer) clearInterval(this.timer)
    this.videoEle.play()
    dispatch({ type: 'player/save', payload: { status: config.PLAYING } })
    this.timer = setInterval(() => {
      const progress = +(this.videoEle.currentTime / this.videoEle.duration).toFixed(2) * 100
      dispatch({ type: 'player/save', payload: { progress: Math.ceil(progress) } })
    }, 1000)
  }

  handlePause = () => {
    if (this.timer) clearInterval(this.timer)
    const { dispatch } = this.props
    this.videoEle.pause()
    dispatch({ type: 'player/save', payload: { status: config.PAUSE } })
  }

  handlePlayEnded = () => {
    const { dispatch } = this.props
    dispatch({ type: 'player/save', payload: { status: config.STOP } })
  }

  handlePlayToggle = () => {
    const { audio } = this.props
    if (audio.id) {
      if (this.videoEle.paused) {
        this.handlePlay()
      } else {
        this.handlePause()
      }
    }
  }

  render () {
    const { mini, audio, loading, status, visible, progress } = this.props
    const playerProps = { loading, status, audio, progress }
    return (<div className={classNames(styles.playBar, mini ? styles.mini : styles.playerPage)} style={{ display: visible ? 'block' : 'none' }}>
      {
        mini ? <Mini {...playerProps} onClick={this.handlePlayToggle} /> : <PlayerPage {...playerProps} />
      }
      <video ref={this.getvideoEle} height="0" width="0" onEnded={this.handlePlayEnded} onError={this.handlePlayEnded} />
    </div>)
  }
}

function mapStateToProps ({ player }) {
  // const { loading, audio, mini, status, visible } = player
  return {
    ...player,
  }
}

export default connect(mapStateToProps)(PlayBar)
