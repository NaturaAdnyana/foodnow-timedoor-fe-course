<template>
  <div class="col-2">
    <input
      type="checkbox"
      class="topping-check btn-check"
      :id="`topping-check-${topping.id}`"
      autocomplete="off"
      :disabled="false"
    />
    <label
      class="topping btn d-flex justify-content-center align-items-center rounded-pill py-2 border border-opacity-75"
      :for="`topping-check-${topping.id}`"
    >
      <span class="fw-bold">
        {{ topping.name }}
      </span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  topping: {
    type: String,
    require: true,
  },
})
</script>
