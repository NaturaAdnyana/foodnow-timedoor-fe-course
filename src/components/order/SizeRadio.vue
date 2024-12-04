<template>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      :id="`size-check-${size.id}`"
      value="size"
    />
    <label class="form-check-label" :for="`size-check-${size.id}`"
      >{{ size.name }}
      <span class="extra-price" v-show="size.extra_price">(+{{ size.extra_price }}$)</span></label
    >
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    require: true,
  },
})
</script>
