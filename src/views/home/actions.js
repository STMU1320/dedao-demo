export const actionTypes = {
  fetchHeader: 'home/fetchHeader',
  fetchLive: 'home/fetchLive',
  fetchFree: 'home/fetchFree',
  fetchBookRadio: 'home/fetchBookRadio',
  fetchLastArea: 'home/fetchLastArea',
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
  fetchFree () {
    return { type: actionTypes.fetchFree }
  },
  fetchBookRadio () {
    return { type: actionTypes.fetchBookRadio }
  },
  fetchLastArea () {
    return { type: actionTypes.fetchLastArea }
  },
}
