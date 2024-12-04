<template>
  <section class="pizza-options">
    <div>
      <h2>Choose your pizza</h2>
      <div class="pizza-option row gx-4">
        <pizza-checkbox v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza"></pizza-checkbox>
      </div>
    </div>
    <div>
      <h2>Custom Pizza</h2>
      <div class="mb-5">
        <h3>Size</h3>
        <div class="pizza-option">
          <size-checkbox v-for="size in sizeList" :key="size.id" :size="size"></size-checkbox>
        </div>
      </div>
      <div>
        <h3>Toppings</h3>
        <div class="pizza-option row g-4">
          <topping-checkbox
            v-for="topping in toppingList"
            :key="topping.id"
            :topping="topping"
          ></topping-checkbox>
        </div>
      </div>
    </div>
  </section>
  <payment-summary></payment-summary>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PizzaCheckbox from './PizzaRadio.vue'
import SizeCheckbox from './SizeRadio.vue'
import ToppingCheckbox from './ToppingCheckbox.vue'
import PaymentSummary from './PaymentSummary.vue'

const pizzaList = ref()
const sizeList = ref()
const toppingList = ref()

onMounted(async () => {
  try {
    // await store.dispatch('pizza/getPizzaData')
    // pizzaListStatus.value = true
    // pizzaList.value = store.state.pizza.pizzas
    const pizza = await import('@/assets/data/json/pizza-list.json')
    const sizes = await import('@/assets/data/json/size-list.json')
    const toppings = await import('@/assets/data/json/topping-list.json')
    pizzaList.value = pizza.data
    sizeList.value = sizes.data
    toppingList.value = toppings.data
  } catch (error) {
    console.error('Error fetching product data:', error)
  } finally {
    console.log(pizzaList.value)
  }
})
</script>
