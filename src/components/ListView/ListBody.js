import React from 'react'
import { Loading } from 'components'
import ListItem from './ListItem'

import styles from './style.less'

class ListBody extends React.Component {
  componentDidMount () {}

  handle
  render () {
    const { data, children, onItemClick, loading, ...otherProps } = this.props
    return (
      <ul className={styles.listBody} {...otherProps}>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <ListItem key={item.title || item.detail || index} {...item} onClick={onItemClick} />
          ))}
        {children}
        { loading && <Loading style={{ height: '4rem' }} tip="加载中..." /> }
      </ul>
    )
  }
}

export default ListBody
