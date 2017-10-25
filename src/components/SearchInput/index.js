import React from 'react'
import classNames from 'classnames'

import Icon from '../Icon'
import styles from './style.less'

function SearchInput ({
  placeholder,
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={classNames(styles.searchInput, className)}>
      <Icon type="#icon-search" className={styles.searchIcon} />
      <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  )
}

export default SearchInput
