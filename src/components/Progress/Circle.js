import React from 'react'

function CircleProgress ({
  r = 50,
  showBg = true,
  showNum = false,
  strokeWidth = 5,
  percent = 0,
  bgColor = '#ddd',
  fgColor = '#00A5E0',
  textColor = '#666',
  className,
  style,
  ...otherProps
}) {
  const _r = r - strokeWidth
  const perimeter = Math.PI * 2 * _r
  const cirProps = {
    ...otherProps,
    cx: r,
    cy: r,
    r: _r,
    strokeWidth,
    fill: 'none',
  }
  return (
    <svg
      width={r * 2}
      height={r * 2}
      className={className}
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {showBg && <circle {...cirProps} stroke={bgColor} />}
      {percent > 0 &&
        <circle
          {...cirProps}
          stroke={fgColor}
          transform={`rotate(-90, ${r}, ${r})`}
          strokeLinecap="round"
          strokeDasharray={`${perimeter * percent} ${perimeter * (1 - percent)}`}
        />}
      {showNum &&
        <text
          x={r}
          y={r}
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={r * 0.4}
        >
          {' '}{`${percent * 100}%`}{' '}
        </text>}
    </svg>
  )
}

export default CircleProgress
