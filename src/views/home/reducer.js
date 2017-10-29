import { actionTypes } from './actions'

const initState = {
  hotSearch: {},
  banner: [],
  live: {},
  free: {},
  loading: false,
  scrollTop: 0,
}

export default function reducer (state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.save:
      return { ...state, ...payload }
    default:
      return state
  }
}
