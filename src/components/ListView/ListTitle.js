import React from 'react'
import { Icon } from 'components'
import { config } from 'utils'

import styles from './style.less'

function ListTitle ({ children, onBack }) {
  return (<h3 className={styles.listTitle}>
    { typeof onBack === 'function' && <Icon onClick={onBack} type={config.icon.arrow} style={{ transform: 'rotate(180deg)' }} /> }
    {children}
  </h3>)
}

export default ListTitle
