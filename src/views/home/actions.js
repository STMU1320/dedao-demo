export const actionTypes = {
  FETCHDATA: 'home/FETCHDATA',
  SETDATA: 'home/SETDATA',
}

export const actionCreator = {
  fetchData (data) {
    return { type: actionTypes.FETCHDATA, data }
  },
  setData (data) {
    return { type: actionTypes.SETDATA, data }
  },
}
