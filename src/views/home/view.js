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
import BookBody from './c/BookBody'
import { actionCreator } from './actions'
import styles from './style.less'


class Home extends Component {
  static propTypes = {
    banner: PropTypes.array,
    hotSearch: PropTypes.object,
    live: PropTypes.object,
    free: PropTypes.object,
    bookRadio: PropTypes.object,
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
    this.getBannerDom = this.getBannerDom.bind(this)
    this.getFirstPageData = this.getFirstPageData.bind(this)
  }
  componentDidMount () {
    this.getFirstPageData()
  }

  getFirstPageData () {
    const { dispatch } = this.props
    dispatch(actionCreator.fetchHeader())
    dispatch(actionCreator.fetchLive())
    dispatch(actionCreator.fetchFree())
    dispatch(actionCreator.fetchBookRadio())
  }
  getBannerDom (dom) {
    this.banner = dom
  }
  handleScroll (top) {
    this.setState({
      ...this.state,
      opacity: Math.round((top / (this.banner.offsetHeight - 45)) * 100),
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
      bookRadio,
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

    const bookRadioProps = {
      header: { name: bookRadio.title, right: '查看全部' },
      Body: <BookBody data={bookRadio.data} name={bookRadio.sub_title} />,
      Footer: <div className={styles.bookFooter}>{bookRadio.data && bookRadio.data.adv_words}</div>,
    }

    return (<Container
      scrollTop={scrollTop}
      onScroll={this.handleScroll.bind(this)}
      onScrollend={this.handleScrollend.bind(this)}
    >
      <Search data={hotSearch} opacity={opacity} />
      <Banner
        getEle={this.getBannerDom}
        list={banner}
        swipeConfig={swipeConfig}
        current={currentIndex} />
      <NavBar />
      <Live data={live} />
      <Section {...freeProps} />
      <Section {...bookRadioProps} />
    </Container>)
  }
}

function mapStateToProps ({ home }) {
  const {
    banner,
    hotSearch,
    live,
    free,
    bookRadio,
    loading,
    scrollTop,
  } = home
  return {
    banner,
    hotSearch,
    live,
    free,
    bookRadio,
    loading,
    scrollTop,
  }
}

export default connect(mapStateToProps)(Home)
