import React from 'react'
import { Header } from 'components/Section'
import Loading from 'components/Loading'
import { currency, timeFormat } from 'utils'
import styles from '../style.less'

function BookBody ({ data = {}, name = '' }) {
  return Object.keys(data).length > 0
    ? <div className={styles.bookItem}>
      <Header data={{ name }} />
      <dl className={styles.bookContent}>
        <dt><img src={data.audio_icon} alt="cover" /></dt>
        <dd>
          <h4>{data.audio_title}</h4>
          <p className={styles.intro}>{data.audio_summary}</p>
          <p className={styles.contentFooter}>
            <span>{timeFormat()(data.duration)}</span>
            <span className="text-hightlight">
              {currency(data.audio_price)}
            </span>
          </p>
        </dd>
      </dl>
    </div>
    : <Loading />
}

export default BookBody
