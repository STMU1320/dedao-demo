import React from 'react'
import DHeader from './Header'
import styles from './style.less'

function Section ({
  header,
  getEle,
  Header,
  Body,
  Footer,
}) {
  return (
    <section ref={getEle} className={styles.section}>
      { Header || <DHeader data={header} /> }
      { Body && Body}
      { Footer && Footer}
    </section>
  )
}

Section.Header = DHeader

export default Section
