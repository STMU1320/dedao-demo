import { actionTypes } from './actions'

const initState = {
  hotSearch: {},
  banner: [],
  loading: false,
}

export default function reducer (state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.save:
      return { ...state, ...payload }
    default:
      return state
  }
}
