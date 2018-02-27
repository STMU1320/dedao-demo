import React from 'react'
import { Icon, Progress } from 'components'
import { config } from 'utils'

function List () {
  return (
    <div>
      <Icon type={config.icon.play} />
      <Progress percent={0.9}/>
    </div>
  )
}

export default List
