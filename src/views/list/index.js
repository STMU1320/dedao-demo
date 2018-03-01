import React from 'react'
// import { Progress } from 'components'
import {
  VelocityTransitionGroup,
  velocityHelpers,
  VelocityComponent,
} from 'velocity-react'

// import { config } from 'utils'

const Animations = {
  // Register these with UI Pack so that we can use stagger later.
  In: velocityHelpers.registerEffect({
    calls: [
      [
        {
          transformPerspective: [800, 800],
          transformOriginX: ['50%', '50%'],
          transformOriginY: ['100%', '100%'],
          marginBottom: 0,
          opacity: 1,
          rotateX: [0, 130],
        },
        1,
        {
          easing: 'ease-out',
          display: 'block',
        },
      ],
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [
        {
          transformPerspective: [800, 800],
          transformOriginX: ['50%', '50%'],
          transformOriginY: ['0%', '0%'],
          marginBottom: -30,
          opacity: 0,
          rotateX: -70,
        },
        1,
        {
          easing: 'ease-out',
          display: 'block',
        },
      ],
    ],
  }),
}

class List extends React.Component {
  state = {
    itemCount: 0,
    items: [],
    duration: 500,
    mini: false,
  };

  componentWillMount () {
    this.whenAddButtonClicked()
  }

  whenAddButtonClicked = () => {
    this.addRows(1)
  };

  whenAdd5ButtonClicked = () => {
    this.addRows(5)
  };

  whenOptionClicked = event => {
    this.setState({ duration: parseInt(event.target.value) })
  };

  addRows = count => {
    let { items } = this.state

    for (let i = 0; i < count; ++i) {
      const item = {
        title: '9658',
        i: this.state.itemCount + i,
      }

      items = [item].concat(items)
    }

    this.setState({
      items: items.slice(0, 6),
      itemCount: this.state.itemCount + count,
    })
  };

  handleToggle = () => {
    this.setState({
      mini: !this.state.mini,
    })
  };
  render () {
    const rows = this.state.items.map(item => {
      const itemStyle = {
        width: 150,
        padding: '0 10px',
        lineHeight: '30px',
        backgroundColor: item.i % 2 === 0 ? '#666' : '#369875',
      }

      return (
        <div key={item.i} style={itemStyle}>
          <span>{item.title}</span>
        </div>
      )
    })

    const groupStyle = {
      margin: '10px 0',
    }

    const enterAnimation = {
      animation: Animations.In,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: true,
      display: 'block',
      style: {
        display: 'none',
      },
    }

    const leaveAnimation = {
      animation: Animations.Out,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: true,
    }
    return (
      <div>
        {/* <Progress percent={0.9} /> */}
        <div>
          <button onClick={this.whenAddButtonClicked}>Add Row</button>
          <button onClick={this.whenAdd5ButtonClicked}>Add 5 Rows</button>
          <button onClick={this.handleToggle}>toggle</button>
        </div>
        <VelocityComponent
          component="div"
          className="flex-1"
          animation={{ opacity: this.state.mini ? 1 : 0 }}
          duration={500}
        >
          <p>mini</p>
        </VelocityComponent>
      </div>
    )
  }
}

export default List
