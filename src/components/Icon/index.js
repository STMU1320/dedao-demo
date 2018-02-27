import React from 'react'
import classNames from 'classnames'

function Icon ({ type = '#icon-xiazai', className = '', ...otherProps }) {
  return (
    <svg className={classNames('iconfont', className)} {...otherProps} aria-hidden="true">
      <use xlinkHref={type} />
    </svg>
  )
}

export default Icon
