export default {
  namespaced: true,
  state: {
    pizza: {},
    size: {},
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
      state.topping = topping
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
