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
