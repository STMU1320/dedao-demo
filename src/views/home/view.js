import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactSwipe from 'react-swipe'
import { history } from 'utils'

import Loading from 'components/Loading'
import Icon from 'components/Icon'
import SearchInput from 'components/SearchInput'

import { actionCreator } from './actions'
import styles from './style.less'

const HeaderSearch = ({ onChange, data }) => {
  return (
    <div className={styles.header}>
      <SearchInput
        placeholder={data.default_keyword && data.default_keyword.name}
        className={styles.headerLift}
        onChange={onChange}
      />
      <span>
        <Icon type="#icon-xiazai" />
      </span>
    </div>
  )
}

const Banner = ({ list, swipeConfig, current }) => {
  return (
    <div className={styles.bannerWrap}>
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
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }
  componentDidMount () {
    this.fetchHeader()
  }

  fetchHeader () {
    const { dispatch } = this.props
    dispatch(actionCreator.fetchHeader())
  }

  render () {
    const { loading, banner, hotSearch } = this.props
    const { currentIndex } = this.state
    const swipeConfig = {
      startSlide: 0,
      continuous: true,
      disableScroll: false,
      stopPropagation: true,
      auto: 5000,
      callback: i => {
        this.setState({
          currentIndex: i,
        })
      },
    }
    return loading
      ? <Loading />
      : <div className={styles.container}>
        <HeaderSearch data={hotSearch} />
        <Banner list={banner} swipeConfig={swipeConfig} current={currentIndex} />
      </div>
  }
}

Home.propTypes = {
  banner: PropTypes.array,
  hotSearch: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ home: { loading, banner, hotSearch } }) => ({
  banner,
  hotSearch,
  loading,
}))(Home)
