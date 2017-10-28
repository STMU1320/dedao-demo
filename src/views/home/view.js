import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

import PureRenderMixin from 'react-addons-pure-render-mixin'
import Search from 'components/Search'
import Container from 'components/Container'
import Icon from 'components/Icon'
// import { history } from 'utils'

import Banner from './c/Banner'
import NavBar from './c/NavBar'
import { actionCreator } from './actions'
import styles from './style.less'

const Live = ({
  data = {
    title: '████████',
    intro: '████████████████████',
    reservation_num: 0,
  },
}) => {
  return (
    <section className={styles.section}>
      <h5><span style={{ display: 'flex', alignItems: 'center' }}><Icon type="#icon-video" className="primary" />{data.status ? '正在直播' : '未开始'}</span><span>{data.reservation_num}预约</span></h5>
      <div className={styles.sectionContent}>
        <h4>{data.title}</h4>
        <p className={classNames('text-light', styles.intro)}>{data.intro}</p>
      </div>
    </section>
  )
}


class Home extends Component {
  static propTypes = {
    banner: PropTypes.array,
    hotSearch: PropTypes.object,
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
    const { banner, hotSearch, scrollTop } = this.props
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
      <Live />
    </Container>)
  }
}

function mapStateToProps ({ home }) {
  const {
    loading,
    banner,
    hotSearch,
    scrollTop,
  } = home
  return {
    banner,
    hotSearch,
    loading,
    scrollTop,
  }
}

export default connect(mapStateToProps)(Home)
