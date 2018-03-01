import React from 'react'
import classNames from 'classnames'
import { isEmpty, history } from 'utils'
import Icon from '../Icon'
import styles from './style.less'

function Button ({ children = '', icon, type = 'ghost', className, link, onClick, ...otherProps }) {
  const defaultClass = !isEmpty(link) ? 'nav' : type
  const btnClick = () => {
    typeof link === 'string' && history.push(link)
    onClick && onClick()
  }
  return (<button {...otherProps} onClick={btnClick} className={classNames(styles.button, styles[defaultClass], className)}>
    {children}
    { icon && <Icon type={icon} className={styles.icon} /> }
  </button>)
}

export default Button
