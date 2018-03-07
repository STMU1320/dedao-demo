import { getDocment } from 'api'
import { config, history } from 'utils'

export default {
  namespace: 'player',
  state: {
    audio: null,
    audioList: [],
    status: config.STOP,
    progress: 0,
    mini: true,
    loading: false,
    visible: false,
    infinite: false,
    dialogVisible: false,
    dialogType: 'playerList',
    docment: {},
  },

  effects: {
    *getDocment ({ call, put }, { payload: { docmentId } }) {
      yield put({ type: 'player/save', payload: { loading: true } })
      try {
        const { c } = yield call(getDocment, docmentId)
        yield put({ type: 'player/save', payload: { docment: c.content } })
      } catch (error) {
        history.push('error')
      } finally {
        yield put({ type: 'player/save', payload: { loading: false } })
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
