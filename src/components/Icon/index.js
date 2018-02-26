import React from 'react'
import classNames from 'classnames'

function Icon ({ type = '#icon-xiazai', className = '', style }) {
  return (
    <svg className={classNames('iconfont', className)} style={style} aria-hidden="true">
      <use xlinkHref={type} />
    </svg>
  )
}

export default Icon
