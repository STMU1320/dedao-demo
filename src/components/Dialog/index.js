import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'

// import styles from './style.less'

class Dialog extends React.PureComponent {
  dialogRoot = null;

  static findDialog = dialogId => {
    const dialogRoot = document.querySelector('#dialog_root')
    if (!dialogRoot) return false
    return dialogRoot.querySelector(`#${dialogId}`)
  }

  static remove = dialogId => {
    const dialog = Dialog.findDialog(dialogId)
    if (!dialog) return false
    document.querySelector('#dialog_root').removeChild(dialog)
    return true
  }

  static hidden = dialogId => {
    const dialog = Dialog.findDialog(dialogId)
    if (!dialog) return false
    dialog.style.display = 'none'
    return true
  }

  static show = dialogId => {
    const dialog = Dialog.findDialog(dialogId)
    if (!dialog) return false
    dialog.style.display = 'block'
    return true
  }

  componentWillMount () {
    this.dialogRoot = document.querySelector('#dialog_root')
    if (!this.dialogRoot) {
      this.dialogRoot = document.createElement('div')
      this.dialogRoot.id = 'dialog_root'
      document.body.appendChild(this.dialogRoot)
    }
  }

  render () {
    const { children } = this.props
    return ReactDOM.createPortal(
      <Container {...this.props}>
        {children}
      </Container>,
      this.dialogRoot
    )
  }
}

export default Dialog
