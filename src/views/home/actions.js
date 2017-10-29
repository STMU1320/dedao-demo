export const actionTypes = {
  fetchHeader: 'home/fetchHeader',
  fetchLive: 'home/fetchLive',
  save: 'home/save',
}

export const actionCreator = {
  save (payload) {
    return { type: actionTypes.save, payload }
  },
  fetchHeader () {
    return { type: actionTypes.fetchHeader }
  },
  fetchLive () {
    return { type: actionTypes.fetchLive }
  },
}
