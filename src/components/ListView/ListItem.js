import React from 'react'
import classnames from 'classnames'
import { Icon } from 'components'

import styles from './style.less'

function ListItem ({ title, icon, detail, id, onClick, active }) {
  const iconEle = React.isValidElement(icon) ? icon : <Icon type={icon} />
  return (<li className={classnames(styles.listItem, { [styles.active]: active })} onClick={onClick && onClick.bind(this, { id, title, detail })}>
    <span className={styles.icon}>{ icon && iconEle }</span>
    <div className={styles.listItemContent}>
      { title && <h4>{title}</h4> }
      { detail && <p className={styles.detail}>{detail}</p> }
    </div>
  </li>)
}

export default ListItem
