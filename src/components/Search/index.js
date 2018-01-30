import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { config, history } from 'utils'
import SearchInput from '../SearchInput'
import Icon from '../Icon'
import styles from './style.less'

class Search extends PureComponent {
  static handlePrevent (e) {
    e.preventDefault()
  }

  constructor (...arg) {
    super(...arg)
    this.state = {
      fold: true,
      value: '',
    }
  }

  handleFocus () {
    this.setState({ fold: false })
  }

  handleFold () {
    if (!this.state.fold) {
      this.setState({ fold: true })
    } else {
      history.push('404')
    }
  }

  handleItemClick (e) {
    if (e.target.nodeName === 'LI') {
      const newState = {
        ...this.state,
        value: e.target.innerText,
      }
      this.setState(newState)
    }
  }

  handleChange (e) {
    const { onChange } = this.props
    const newState = {
      ...this.state,
      value: e.target.value,
    }
    this.setState(newState)
    onChange && onChange(e.target.value)
  }


  render () {
    const {
      data,
      opacity = 0,
    } = this.props
    const { fold, value = '' } = this.state
    return (
      <div
        className={styles.searchComponent}
        onTouchMove={this.handlePrevent}
        style={{ height: `${fold ? 'auto' : '100vh'}` }}>
        <div
          style={{ backgroundColor: `rgba(255, 255, 255, ${fold ? opacity / 100 : 1})` }}
          className={classNames(styles.header, { [styles.dark]: !fold || opacity > 60 })}
          >
          <SearchInput
            placeholder={data.default_keyword && data.default_keyword.name}
            className={styles.headerLift}
            onChange={this.handleChange.bind(this)}
            value={value}
            onFocus={this.handleFocus.bind(this)}
          />
          <a onClick={this.handleFold.bind(this)}>
            {fold ? <Icon type={config.icon.download} className={classNames({ gray: opacity > 60 })} /> : '取消'}
          </a>
        </div>
        {!fold &&
        <div className={styles.content}>
          <p>热门搜索</p>
          {
            data.hot_keyword_list && data.hot_keyword_list.length > 0 &&
            <ul onClick={this.handleItemClick.bind(this)}>
              { data.hot_keyword_list.map(item => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          }
        </div>
        }
      </div>
    )
  }
}

export default Search
