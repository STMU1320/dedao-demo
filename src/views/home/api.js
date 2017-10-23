import { request } from 'utils'

export function getUserInfo (data) {
  return request({
    url: 'http://localhost:8080/test.json',
    data,
  })
}

export function test () {
  return request({
    url: '/api/test',
  })
}
