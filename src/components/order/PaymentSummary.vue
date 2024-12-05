<template>
  <aside class="p-4">
    <div>
      <h2 class="fs-5">Payment Summary</h2>
      <table>
        <tbody>
          <tr>
            <td width="50%">{{ pizzaType.name }}</td>
            <td width="50%">{{ pizzaType.price }}$</td>
          </tr>
          <tr v-show="sizeList.extra_price !== 0">
            <td width="50%">{{ sizeList.name ? `Size - ${sizeList.name}` : '' }}</td>
            <td width="50%">{{ sizeList.extra_price ? `${sizeList.extra_price}$` : '' }}</td>
          </tr>
          <tr v-for="topping in toppingList" :key="topping.id">
            <td width="50%">{{ topping.name }}</td>
            <td width="50%">{{ topping.price ? `${topping.price}$` : '' }}</td>
          </tr>
        </tbody>
      </table>
      <div class="count-total">
        <hr class="divider bg-secondary bg-opacity-50" />
        <div class="mb-3 d-flex justify-content-between fs-6">
          <span>Total Price</span>
          <span class="total-price">${{ totalPrice }}</span>
        </div>
        <button
          @click="handleClick"
          class="btn btn-custom-primary w-100 py-2 rounded-pill text-white"
        >
          Order Now
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// const pizzaType = ref({
//   name: '-',
//   price: 0,
// })
// const sizeList = ref()
// const toppingList = ref()

const pizzaType = computed(() => store.state.order.pizza)
const sizeList = computed(() => store.state.order.size)
const toppingList = computed(() => store.state.order.toppings)

const totalPrice = computed(() => {
  let total = pizzaType.value.price
  if (sizeList.value.extra_price) {
    total += sizeList.value.extra_price
  }
  toppingList.value.forEach((topping) => {
    total += topping.price
  })
  return total.toFixed(2)
})

const handleClick = () => {
  // TODO: Implement order submission logic
  console.log(toppingList.value)
}
</script>
