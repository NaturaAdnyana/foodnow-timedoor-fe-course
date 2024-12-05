<template>
  <section class="pizza-options">
    <div>
      <h2>Choose your pizza</h2>
      <div class="pizza-option row gx-4">
        <pizza-radio
          v-for="pizza in pizzaList"
          :key="pizza.id"
          :pizza="pizza"
          v-model="selectedPizza.type"
          @update:modelValue="updatePizzaType"
        ></pizza-radio>
      </div>
    </div>
    <div>
      <h2>Custom Pizza</h2>
      <div class="mb-5">
        <h3>Size</h3>
        <div class="pizza-option">
          <size-radio
            v-for="size in sizeList"
            :key="size.id"
            :size="size"
            :modelValue="selectedPizza.size"
            @update:modelValue="updateSize"
            :disabled="!pizzaSelected"
          ></size-radio>
        </div>
      </div>
      <div>
        <h3>Toppings</h3>
        <div class="pizza-option row g-4">
          <topping-checkbox
            v-for="topping in toppingList"
            :key="topping.id"
            :topping="topping"
            :availableTopping="selectedPizza.type.toppings"
            :selectedToppings="selectedPizza.toppings"
            @update:selectedToppings="updateToppings"
          ></topping-checkbox>
        </div>
      </div>
    </div>
  </section>
  <payment-summary></payment-summary>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'

import PizzaRadio from './PizzaRadio.vue'
import SizeRadio from './SizeRadio.vue'
import ToppingCheckbox from './ToppingCheckbox.vue'
import PaymentSummary from './PaymentSummary.vue'

const store = useStore()

const pizzaList = ref()
const sizeList = ref()
const toppingList = ref()

const selectedPizza = reactive({
  type: {},
  size: {},
  toppings: [],
})

const pizzaSelected = computed(() => !!selectedPizza.type.id)

const updatePizzaType = (type) => {
  store.dispatch('order/setPizzaType', type)
}

const updateSize = (size) => {
  selectedPizza.size = size
  store.dispatch('order/setSize', selectedPizza.size)
}

const updateToppings = (newToppings) => {
  selectedPizza.toppings = newToppings
  store.dispatch('order/setToppings', selectedPizza.toppings)
}

onMounted(async () => {
  try {
    await store.dispatch('pizza/getPizzaData')
    await store.dispatch('pizza/getSizeData')
    await store.dispatch('pizza/getToppingData')

    pizzaList.value = store.state.pizza.pizzas
    sizeList.value = store.state.pizza.sizes
    toppingList.value = store.state.pizza.toppings
  } catch (error) {
    console.error('Error fetching product data:', error)
  }
})
</script>
