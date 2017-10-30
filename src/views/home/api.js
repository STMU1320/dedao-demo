import { request, config } from 'utils'

export function getHotSearch () {
  return request({
    url: `${config.apiPrefix}getHotSearch`,
  })
}

export function getBanner () {
  return request({
    url: `${config.apiPrefix}getBanner`,
  })
}
export function getLive () {
  return request({
    url: `${config.apiPrefix}getLive`,
  })
}
export function getFree () {
  return request({
    url: `${config.apiPrefix}getFree`,
  })
}
export function getBookRadio () {
  return request({
    url: `${config.apiPrefix}getBookRadio`,
  })
}
export function getLastArea () {
  return request({
    url: `${config.apiPrefix}getLastArea`,
  })
}
