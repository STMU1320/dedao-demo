import React from 'react'
import ReactSwipe from 'react-swipe'
import styles from '../style.less'

const Banner = ({ list, swipeConfig, current, getEle }) => {
  return (
    <div className={styles.bannerWrap} ref={getEle}>
      <ReactSwipe
        className={styles.banner}
        swipeOptions={swipeConfig}
        key={list.length}
      >
        {list.map(item => (
          <div className={styles.imgWrap} key={item.log_id}>
            <img src={item.m_img} alt={item.m_title} />
          </div>
        ))}
      </ReactSwipe>
      <ul className={styles.pointer}>
        {list.map((item, index) => <li key={item.log_id} className={current === index ? styles.active : ''} />)}
      </ul>
    </div>
  )
}

export default Banner
