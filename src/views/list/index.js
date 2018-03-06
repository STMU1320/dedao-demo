import React from 'react'
import { ListView } from 'components'

// import { config } from 'utils'

function generateArray (length) {
  let index = 0
  const arr = []
  while (index < length) {
    arr[index++] = {
      title: `title${index}`,
      detail: `item-detail-${index}`,
    }
  }
  return arr
}

class List extends React.Component {
  state = {
    items: generateArray(50),
    loading: false,
    hasMore: true,
    page: 1,
  };
  handleScroll = (scroll, event) => {
    let { loading, hasMore, page } = this.state
    const { target } = event
    if (!loading && hasMore) {
      if (scroll.height - 50 < scroll.top + target.offsetHeight) {
        this.setState({ loading: true })
        setTimeout(() => {
          this.setState({
            page: ++page,
            hasMore: page < 4,
            items: generateArray(50 * page),
            loading: false,
          })
        }, 3000)
      }
    }
  }

  render () {
    const { items, loading } = this.state
    return (<div style={{ height: 'calc(100vh - 5rem)' }}>
      <ListView listData={items} title="列表Demo" onScroll={this.handleScroll} loading={loading} />
    </div>)
  }
}

export default List
