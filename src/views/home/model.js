import { home } from 'api'
import { history } from 'utils'

const initState = {
  hotSearch: {},
  banner: [],
  live: {},
  free: {},
  bookRadio: {},
  lastArea: [],
  loading: false,
  scrollTop: 0,
}

export default {
  namespace: 'home',
  state: initState,

  effects: {

    *getHeaderData ({ put, call, all }) {
      try {
        const [h, b] = yield all([call(home.getHotSearch), call(home.getBanner)])
        yield put({ type: 'home/save', payload: { hotSearch: h.c, banner: b.c.list } })
      } catch (error) {
        console.log(error)
        history.push('error')
      }
    },

    *getLiveData ({ call, put }) {
      try {
        const { c } = yield call(home.getLive)
        yield put({ type: 'home/save', payload: { live: c.data } })
      } catch (error) {
        history.push('error')
      }
    },

    *getFreeData ({ call, put }) {
      try {
        const { c } = yield call(home.getFree)
        yield put({ type: 'home/save', payload: { free: c } })
      } catch (error) {
        history.push('error')
      }
    },

    *getBookRadio ({ call, put }) {
      try {
        const { c } = yield call(home.getBookRadio)
        yield put({ type: 'home/save', payload: { bookRadio: c.data } })
      } catch (error) {
        history.push('error')
      }
    },

    *getLastArea ({ call, put }) {
      try {
        const { c } = yield call(home.getLastArea)
        yield put({ type: 'home/save', payload: { lastArea: c.list } })
      } catch (error) {
        history.push('error')
      }
    },
  },

  reducers: {
    save (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
