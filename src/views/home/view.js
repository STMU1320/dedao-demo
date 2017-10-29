import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PureRenderMixin from 'react-addons-pure-render-mixin'
import Search from 'components/Search'
import Container from 'components/Container'
import { Section } from 'components/Section'
// import Icon from 'components/Icon'
// import { history } from 'utils'

import Banner from './c/Banner'
import NavBar from './c/NavBar'
import FreeBody from './c/FreeBody'
import FreeHeader from './c/FreeHeader'
import Live from './c/Live'
import { actionCreator } from './actions'
// import styles from './style.less'


class Home extends Component {
  static propTypes = {
    banner: PropTypes.array,
    hotSearch: PropTypes.object,
    live: PropTypes.object,
    free: PropTypes.object,
    dispatch: PropTypes.func,
    scrollTop: PropTypes.number,
  }

  constructor (...props) {
    super(...props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      currentIndex: 0,
      opacity: 0,
    }
    this.getBanner = this.getBanner.bind(this)
  }
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(actionCreator.fetchHeader())
    dispatch(actionCreator.fetchLive())
    dispatch(actionCreator.fetchFree())
  }
  getBanner (dom) {
    this.banner = dom
  }
  handleScroll (top) {
    this.setState({
      ...this.state,
      opacity: Math.round((top / this.banner.offsetHeight) * 100),
    })
  }

  handleScrollend (value) {
    const { dispatch } = this.props
    dispatch(actionCreator.save({ scrollTop: value }))
  }
  render () {
    const {
      banner,
      hotSearch,
      free,
      scrollTop,
      live } = this.props
    const { currentIndex, opacity } = this.state
    const swipeConfig = {
      startSlide: 0,
      continuous: true,
      disableScroll: false,
      stopPropagation: true,
      auto: 5000,
      callback: i => {
        this.setState({
          ...this.state,
          currentIndex: i,
        })
      },
    }
    const freeProps = {
      Header: <FreeHeader name={free.name} />,
      Body: <FreeBody list={free.list} />,
    }
    return (<Container
      scrollTop={scrollTop}
      onScroll={this.handleScroll.bind(this)}
      onScrollend={this.handleScrollend.bind(this)}
    >
      <Search data={hotSearch} opacity={opacity} />
      <Banner
        getEle={this.getBanner}
        list={banner}
        swipeConfig={swipeConfig}
        current={currentIndex} />
      <NavBar />
      <Live data={live} />
      <Section {...freeProps} />
    </Container>)
  }
}

function mapStateToProps ({ home }) {
  const {
    banner,
    hotSearch,
    live,
    free,
    loading,
    scrollTop,
  } = home
  return {
    banner,
    hotSearch,
    live,
    free,
    loading,
    scrollTop,
  }
}

export default connect(mapStateToProps)(Home)
