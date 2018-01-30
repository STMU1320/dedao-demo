import React from 'react'
import { Section } from 'components'
import Icon from 'components/Icon'
import { config } from 'utils'
import styles from '../style.less'

const { Header } = Section

function FreeBody ({
  list = [],
}) {
  return (
    <div className={styles.freebody}>
      {list.length > 0 ?
          list.map((item, index) => (
            <div className={styles.bodyItem} key={item.id || `freebody${index}`}>
              {item.title && <Header data={{ name: item.title, img: item.avatar, right: item.rightTitle }} />}
              {item.list && item.list.length > 0 && item.list.map(ii => (
                <p className={styles.detailItem} key={ii.alias_id}>
                  <Icon type={config.icon.play} />
                  {ii.title}
                </p>
              ))}
            </div>
          ))
          : '没有数据'
        }
    </div>
  )
}

export default FreeBody
