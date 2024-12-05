import { createStore } from 'vuex'
import pizza from './pizza'
import order from './order'

export const store = createStore({
  modules: {
    pizza,
    order,
  },
})
