export const actionTypes = {
  fetchHeader: 'home/FETCHHEADER',
  save: 'home/SAVE',
}

export const actionCreator = {
  save (payload) {
    return { type: actionTypes.save, payload }
  },
  fetchHeader () {
    return { type: actionTypes.fetchHeader }
  },
}
