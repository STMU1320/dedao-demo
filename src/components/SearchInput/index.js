import React from 'react'
import classNames from 'classnames'
import { config } from 'utils'

import Icon from '../Icon'
import styles from './style.less'

function SearchInput ({
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  className = '',
}) {
  const inputProps = {
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
  }
  return (
    <div className={classNames(styles.searchInput, className)}>
      <Icon type={config.icon.search} className={styles.searchIcon} />
      <input {...inputProps} />
    </div>
  )
}

export default SearchInput
