import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actionCreator } from './actions'
import Loading from 'components/Loading'

import styles from './style.less'

class Home extends Component {
  setUserInfo () {
    const { dispatch } = this.props
    dispatch(actionCreator.setData({
      name: 'test',
      age: 100,
    }))
  }
  getUserInfo () {
    const { dispatch } = this.props
    dispatch(actionCreator.fetchData({ id: 2 }))
  }

  render () {
    const { name, age, loading } = this.props
    return (
      <div className={styles.container}>
        {loading
          ? <Loading />
          : <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={this.setUserInfo.bind(this)} className={styles.btn}>设置信息</button>
            <button onClick={this.getUserInfo.bind(this)} className={styles.btn}>获取信息</button>
          </div>
        }
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  dispatch: PropTypes.func,
}

export default connect(({ home }) => ({
  name: home.name,
  age: home.age,
  loading: home.loading,
}))(Home)
