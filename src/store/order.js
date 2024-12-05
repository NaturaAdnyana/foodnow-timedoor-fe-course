export default {
  namespaced: true,
  state: {
    pizza: {
      name: '-',
      price: 0,
    },
    size: {
      name: '',
      price: '',
    },
    toppings: [],
  },
  mutations: {
    setPizzaType(state, pizzas) {
      state.pizza = pizzas
    },
    setSize(state, sizes) {
      state.size = sizes
    },
    setToppings(state, topping) {
      state.toppings = topping
    },
  },
  actions: {
    setPizzaType({ commit }, payload) {
      commit('setPizzaType', payload)
    },
    setSize({ commit }, payload) {
      commit('setSize', payload)
    },
    setToppings({ commit }, payload) {
      commit('setToppings', payload)
    },
  },
}
