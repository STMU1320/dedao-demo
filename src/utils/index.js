import classnames from 'classnames'
import lodash from 'lodash'
import request from './request'
import * as config from './config'
import history from './history'

function number (num, length = 2) {
  if (typeof num !== 'number') {
    return 0
  }
  return num.toFixed(length)
}

function currency (money, unit = '￥') {
  let _money = number(money, 2)
  let suffix = ''
  const prefix = _money < 0 ? '-' : ''
  if (_money > 1000000) {
    suffix = '万'
    _money = (_money / 10000).toFixed(2)
  }
  _money = `${prefix}${unit}${Math.abs(_money)}${suffix}`
  return _money
}

function timeFormat (day = '天', hour = '小时', minute = '分', second = '秒') {
  const oneMinute = 60
  const oneHour = 60 * oneMinute
  const oneDay = 24 * oneHour
  return function (duration) {
    let _day = Math.floor(duration / oneDay)
    let _hour = Math.floor((duration % oneDay) / oneHour)
    let _minute = Math.floor((duration % oneHour) / oneMinute)
    let _second = duration % oneMinute

    return `${_day ? _day + day : ''}${_hour ? _hour + hour : ''}${_minute ? _minute + minute : ''}${_second + second}`
  }
}

function isEmpty (value) {
  if (value == null || value === '') {
    return true
  } else if (Array.isArray(value)) {
    return value.length === 0
  } else if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }
  return false
}

export { request, lodash, classnames, config, history, currency, number, timeFormat, isEmpty }
