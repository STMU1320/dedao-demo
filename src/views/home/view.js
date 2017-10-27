import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ReactSwipe from 'react-swipe'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Search from 'components/Search'
import Container from 'components/Container'
// import Icon from 'components/Icon'
// import { history } from 'utils'

import { actionCreator } from './actions'
import styles from './style.less'


const Banner = ({ list, swipeConfig, current, getEle }) => {
  return (
    <div className={styles.bannerWrap} ref={getEle}>
      <ReactSwipe
        className={styles.banner}
        swipeOptions={swipeConfig}
        key={list.length}
      >
        {list.map(item => (
          <div className={styles.imgWrap} key={item.log_id}>
            <img src={item.m_img} alt={item.m_title} />
          </div>
        ))}
      </ReactSwipe>
      <ul className={styles.pointer}>
        {list.map((item, index) => <li key={item.log_id} className={current === index ? styles.active : ''} />)}
      </ul>
    </div>
  )
}

class Home extends Component {
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
      <div style={{ height: '300vh', background: '#eee' }}>test</div>
      <div style={{ height: '0.2rem', background: 'red' }}></div>
    </Container>)
  }
}

Home.propTypes = {
  banner: PropTypes.array,
  hotSearch: PropTypes.object,
  dispatch: PropTypes.func,
  scrollTop: PropTypes.number,
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
