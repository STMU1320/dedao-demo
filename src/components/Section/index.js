import React from 'react'
import styles from './style.less'
import DHeader from './Header'

function Section ({
  header,
  Header,
  Body,
  Footer,
}) {
  return (
    <section className={styles.section}>
      { Header || <DHeader data={header} /> }
      { Body && Body}
      { Footer && Footer}
    </section>
  )
}

export {
  DHeader as Header,
  Section,
}
