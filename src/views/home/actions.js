export const actionTypes = {
  fetchHeader: 'home/FETCHHEADER',
  save: 'home/SAVE',
}

export const actionCreator = {
  save (data) {
    return { type: actionTypes.save, data }
  },
  fetchHeader () {
    return { type: actionTypes.fetchHeader }
  },
}
