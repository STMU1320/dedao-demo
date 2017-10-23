import { actionTypes } from './actions'

const initState = {
  name: 'oop',
  age: 2,
  loading: false,
}

export default function reducer (state = initState, action) {
  switch (action.type) {
    case actionTypes.SETDATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}
