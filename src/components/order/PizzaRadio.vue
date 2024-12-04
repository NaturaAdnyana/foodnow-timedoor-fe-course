<template>
  <div class="col-4">
    <input
      type="radio"
      class="pizza-check btn-check"
      :id="`pizza-check-${pizza.id}`"
      autocomplete="off"
      name="pizza"
    />
    <label
      class="pizza btn d-flex justify-content-center align-items-center"
      :for="`pizza-check-${pizza.id}`"
    >
      <div class="pizza-img">
        <img :src="getImageUrl(pizza.name)" :alt="pizza.name" width="150px" class="pe-2" />
      </div>
      <div class="pizza-data">
        <h3>{{ pizza.name }}</h3>
        <span>${{ pizza.price }}</span>
        <span v-show="pizza.discount.is_active" class="price-disabled">{{
          pizza.discount.final_price
        }}</span>
      </div>
      <img
        v-show="pizza.discount.is_active"
        class="ribbon-img"
        src="@/assets/ribbon.svg"
        alt="Special Offer"
      />
    </label>
  </div>
</template>

<script setup>
defineProps({
  pizza: {
    type: Object,
    require: true,
  },
})

const getImageUrl = (name) => {
  return new URL(`/src/assets/images/pizza/${name}.png`, import.meta.url).href
}
</script>
