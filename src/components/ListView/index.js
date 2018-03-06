import React from 'react'
import classnames from 'classnames'

import ListTitle from './ListTitle'
import ListBody from './ListBody'

import styles from './style.less'

class ListView extends React.Component {
  defaultStyle = { paddingTop: '4rem' }
  componentDidMount () {}

  handleScroll = e => {
    const { onScroll } = this.props
    const { scrollTop, scrollLeft, scrollHeight, scrollWidth } = e.target
    onScroll && onScroll({ top: scrollTop, left: scrollLeft, height: scrollHeight, width: scrollWidth }, e)
  }

  render () {
    const { className, style, title, listData, children, onBack, onItemClick, loading } = this.props
    return (
      <div
        className={classnames(styles.listView, className)}
        style={title != null ? { ...this.defaultStyle, ...style } : { ...style }}>
        {title != null && <ListTitle onBack={onBack}>{title}</ListTitle>}
        <ListBody onScroll={this.handleScroll} loading={loading} data={listData} onItemClick={onItemClick}>{children}</ListBody>
      </div>
    )
  }
}

export default ListView
