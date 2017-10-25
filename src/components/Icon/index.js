import React from 'react'
import classNames from 'classnames'

function Icon ({ type = '#icon-xiazai', className = '' }) {
  return (
    <svg className={classNames('iconfont', className)} aria-hidden="true">
      <use xlinkHref={type} />
    </svg>
  )
}

export default Icon
