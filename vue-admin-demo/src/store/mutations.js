import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
    const avatar = ''
    state.list.push(
      Object.assign({name: 'zysam', avatar}, plan)
    )
  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  }
}
