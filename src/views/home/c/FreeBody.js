import React from 'react'
import classnames from 'classnames'
import { Section, PlayButton } from 'components'
import { config, isEmpty } from 'utils'
import styles from '../style.less'

const { Header } = Section

function FreeBody ({
  list = [],
  playing = {},
  progress,
  onItemClick,
}) {
  return (
    <div className={styles.freebody}>
      {list.length > 0 ?
          list.map((item, index) => (
            <div className={styles.bodyItem} key={item.id || `freebody${index}`}>
              {item.title && <Header data={{ name: item.title, img: item.avatar, right: item.right_title }} />}
              {!isEmpty(item.audio_list) && item.audio_list.map(ii => {
                const isActive = playing.id === ii.id
                const playStatus = playing.status === config.PLAYING && isActive
                return (
                  <p className={classnames(styles.detailItem, { [styles.active]: isActive })} key={ii.id} onClick={onItemClick.bind(null, !playStatus, ii.id, item.audio_list)}>
                    <PlayButton status={playStatus} active={isActive} progress={isActive ? progress : 0} style={{ marginRight: '.5rem' }} />
                    {ii.audio_detail.title}
                  </p>
                )
              })}
            </div>
          ))
          : '没有数据'
        }
    </div>
  )
}

export default FreeBody
