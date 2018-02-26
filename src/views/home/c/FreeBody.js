import React from 'react'
import { Section, PlayButton } from 'components'
import { config, isEmpty } from 'utils'
import styles from '../style.less'

const { Header } = Section

function FreeBody ({
  list = [],
  playing = {},
  onItemClick,
}) {
  return (
    <div className={styles.freebody}>
      {list.length > 0 ?
          list.map((item, index) => (
            <div className={styles.bodyItem} key={item.id || `freebody${index}`}>
              {item.title && <Header data={{ name: item.title, img: item.avatar, right: item.right_title }} />}
              {!isEmpty(item.audio_list) && item.audio_list.map(ii => {
                const playStatus = playing.status === config.PLAYING && playing.id === ii.id
                return (
                  <p className={styles.detailItem} key={ii.id} onClick={onItemClick.bind(null, !playStatus, ii)}>
                    <PlayButton status={playStatus} style={{ marginRight: '.5rem' }} />
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
