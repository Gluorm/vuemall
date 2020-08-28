import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = false
        state.cartList.push(payload)
    },
    tureerrortip(state,name){
      state.name = name
      state.errortip = true
    },
    outerrortip(state){
      state.name = ''
      state.errortip = false

    },
}