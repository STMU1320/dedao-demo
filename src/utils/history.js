function push (path) {
  const newUrl = `${window.location.protocol}//${window.location.host}/${path}`
  window.location.assign(newUrl)
}

const historyApi = {
  go (path) {
    window.history.go(path)
  },
  back () {
    window.history.back()
  },
  forward () {
    window.history.forward()
  },
  push,
}

export default historyApi
