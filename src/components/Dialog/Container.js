import React from 'react'
import { VelocityComponent } from 'velocity-react'
import classnames from 'classnames'
import styles from './style.less'

const dialogMask = 'dialog_mask'

class Container extends React.PureComponent {
  static defaultProps = {
    maskClosable: true,
    placement: 'center',
    className: '',
    setOverflow: true,
    mask: 'rgba(0, 0, 0, .2)',
    visible: false,
    id: '',
    duration: 500,
  };
  dialogWrap = null;
  timer = null;

  constructor (props) {
    super(props)
    this.state = { visible: props.visible, contentVisible: props.visible }
  }

  componentWillReceiveProps (nextProps) {
    const { visible, setOverflow, duration } = nextProps
    if (this.props.visible !== visible) {
      if (setOverflow) {
        document.body.style.overflow = visible ? 'hidden' : 'auto'
      }
      if (this.timer) clearTimeout(this.timer)
      if (visible) {
        this.setState({ visible: true })
      } else {
        this.timer = setTimeout(() => {
          this.setState({ visible: false })
        }, duration)
      }
      this.setState({ contentVisible: visible })
    }
  }

  componentWillUnmount () {
    const { setOverflow } = this.props
    if (setOverflow) {
      document.body.style.overflow = 'auto'
    }
    if (this.timer) clearTimeout(this.timer)
    this.timer = null
  }

  handleWrapClick = e => {
    const { maskClosable, onClose, duration } = this.props
    if (maskClosable && e.target.dataset.tag === dialogMask) {
      this.setState({ contentVisible: false })
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        onClose && onClose()
        this.setState({ visible: false })
      }, duration)
    }
  };

  render () {
    const {
      children,
      placement,
      mask,
      style,
      className,
      id,
      duration,
    } = this.props
    const { visible, contentVisible } = this.state
    let animation = { opacity: contentVisible ? 1 : 0 }

    switch (placement) {
      case 'center':
        animation = {
          opacity: contentVisible ? 1 : 0,
          translateX: '-50%',
          translateY: contentVisible ? '-50%' : '50%',
        }
        break

      case 'left':
        animation = {
          translateY: '-50%',
          translateX: contentVisible ? '0%' : '-100%',
        }
        break

      case 'right':
        animation = {
          translateY: '-50%',
          translateX: contentVisible ? '0%' : '100%',
        }
        break

      case 'top':
        animation = {
          translateX: '-50%',
          translateY: contentVisible ? '0%' : '-100%',
        }
        break

      case 'bottom':
        animation = {
          translateX: '-50%',
          translateY: contentVisible ? '0%' : '100%',
        }
        break

      case 'leftTop':
      case 'topLeft':
      case 'leftBottom':
      case 'bottomLeft':
        animation = { translateX: contentVisible ? '0%' : '-100%' }
        break

      case 'rightTop':
      case 'topRight':
      case 'rightBottom':
      case 'bottomRight':
        animation = { translateX: contentVisible ? '0%' : '100%' }
        break

      default:
        break
    }
    return (
      <div
        id={id}
        onClick={this.handleWrapClick}
        className={classnames(styles.dialog, className)}
        style={{ ...style, display: visible ? null : 'none' }}
      >
        <div
          className={styles.mask}
          style={{ background: mask }}
          data-tag={dialogMask}
        />
        <VelocityComponent
          component=""
          animation={duration > 0 && animation}
          duration={duration}
        >
          <div className={classnames(styles.content, styles[placement])}>
            {children}
          </div>
        </VelocityComponent>
      </div>
    )
  }
}

export default Container
