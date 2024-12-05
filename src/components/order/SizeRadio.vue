<template>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="size"
      :id="`size-check-${size.id}`"
      :disabled="disabled"
      @change="$emit('update:modelValue', size)"
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
    type: Object,
    require: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
