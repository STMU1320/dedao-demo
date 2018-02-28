import React from 'react'

function LineProgress ({
  width = '100%',
  height = 5,
  showBg = true,
  strokeWidth = 0,
  percent = 0,
  bgColor = '#ddd',
  fgColor = '#00A5E0',
  className,
  style,
}) {
  let fgWidth = `${percent * 100}%`
  if (typeof width === 'number') fgWidth = Math.ceil(width * percent)
  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {showBg && <rect width={width} height={height} fill={bgColor} strokeWidth={strokeWidth} stroke={bgColor} /> }
      <rect width={fgWidth} height={height} fill={fgColor} strokeWidth={strokeWidth} stroke={fgColor} />
    </svg>
  )
}

export default LineProgress
