import React from 'react'
import Icon from 'components/Icon'
import { classnames, history } from 'utils'
import styles from '../style.less'

const Live = ({
  data = {
    title: '',
    intro: '',
    reservation_num: 0,
  },
}) => {
  return (
    <section className={styles.section}>
      <h5><span style={{ display: 'flex', alignItems: 'center' }}><Icon type="#icon-video" className="primary" />{data.status ? '正在直播' : '直播未开始'}</span><span>{data.reservation_num}预约</span></h5>
      <div className={styles.sectionContent} onClick={() => { history.push('404') }}>
        <h4>{data.title}</h4>
        <p className={classnames('text-light', styles.intro)}>{data.intro}</p>
      </div>
    </section>
  )
}

export default Live
