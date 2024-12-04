export default {
  namespaced: true,
  state() {
    return {
      pizzas: [],
      sizes: [],
      toppings: [],
    }
  },
  getters: {},
  mutations: {
    setPizzaData(state, payload) {
      state.pizzas = payload
    },
    setSizeData(state, payload) {
      state.sizes = payload
    },
    setToppingData(state, payload) {
      state.toppings = payload
    },
  },
  actions: {
    async getPizzaData({ commit }) {
      try {
        const pizzas = await import('@/assets/data/json/pizza-list.json')
        commit('setPizzaData', pizzas.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getSizeData({ commit }) {
      try {
        const sizes = await import('@/assets/data/json/size-list.json')
        commit('setSizeData', sizes.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getToppingData({ commit }) {
      try {
        const toppings = await await import('@/assets/data/json/topping-list.json')
        commit('setToppingData', toppings.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
