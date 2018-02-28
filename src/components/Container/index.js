import React, { Component } from 'react'
import Loading from '../Loading'

let timer = null
let lastScrollTop = 0

class Container extends Component {
  constructor (...arg) {
    super(...arg)
    this.handleWindowScroll = this.handleWindowScroll.bind(this)
  }
  componentDidMount () {
    const { scrollTop = 0 } = this.props
    window.addEventListener('scroll', this.handleWindowScroll, false)
    scrollTop && window.scrollTo(0, scrollTop)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleWindowScroll)
    timer && clearTimeout(timer)
    timer = null
    lastScrollTop = null
  }

  handleWindowScroll () {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    const { onScrollEnd, onScroll } = this.props
    lastScrollTop = scrollTop
    onScroll && onScroll(scrollTop)
    // end事件需要更好模拟
    if (!timer && onScrollEnd) {
      timer = setTimeout(() => {
        onScrollEnd(lastScrollTop)
        timer && clearTimeout(timer)
        timer = null
      }, 500)
    }
  }
  render () {
    const { children } = this.props
    return (
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        { children || <Loading /> }
      </div>
    )
  }
}

export default Container
