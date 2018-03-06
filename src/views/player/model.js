// import { home } from 'api'
import { config } from 'utils'

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
  },

  effects: {
    // *getLastArea ({ call, put }) {
    //   try {
    //     const { c } = yield call(home.getLastArea)
    //     yield put({ type: 'home/save', payload: { lastArea: c.list } })
    //   } catch (error) {
    //     history.push('error')
    //   }
    // },
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
