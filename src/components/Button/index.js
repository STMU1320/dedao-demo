import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import styles from './style.less'

function Button ({ children = '', icon, type = 'ghost', className, ...otherProps }) {
  return (<button {...otherProps} className={classNames(styles.button, styles[type], className)}>
    {children}
    { icon && <Icon type={icon} className={styles.icon} /> }
  </button>)
}

export default Button
