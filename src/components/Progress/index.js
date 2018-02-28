import React from 'react'
import Circle from './Circle'
import Line from './Line'

function Progress ({
  type = 'circle',
  ...otherProps
}) {
  return type === 'circle' ? <Circle {...otherProps} /> : <Line {...otherProps} />
}

Progress.Line = Line
Progress.Circle = Circle

export default Progress
