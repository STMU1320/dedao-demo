// import { home } from 'api'
import { config } from 'utils'

export default {
  namespace: 'player',
  state: {
    audio: {
      detail: {
        title: '未知',
        share_title: '无',
        icon: '',
        mp3_play_url: '',
      },
      id: null,
    },
    status: config.STOP,
    progress: 0,
    mini: true,
    loading: false,
    visible: true,
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
