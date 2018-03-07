import { request, config } from 'utils'

export default function getDocmentById (id) {
  return request({
    url: `${config.apiPrefix}getDocment?id=${id}`,
  })
}
