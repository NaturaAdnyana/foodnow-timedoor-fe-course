<template>
  <div class="col-4 col-md-2">
    <input
      type="checkbox"
      class="topping-check btn-check"
      autocomplete="off"
      :id="`topping-check-${topping.id}`"
      :disabled="!availableTopping.includes(topping.id)"
      v-model="checked"
      @change="$emit('update:checked', checked.value)"
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
import { ref, watch } from 'vue'
const props = defineProps({
  topping: {
    type: Object,
    require: true,
  },
  availableTopping: {
    type: Array,
    require: true,
    default: () => [],
  },
  selectedToppings: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:selectedToppings'])
const checked = ref(false)

watch(checked, (isChecked) => {
  let updatedToppings

  if (isChecked) {
    updatedToppings = [...props.selectedToppings, props.topping]
  } else {
    updatedToppings = props.selectedToppings.filter((item) => item.id !== props.topping.id)
  }

  emit('update:selectedToppings', updatedToppings)
})

watch(
  () => props.availableTopping,
  (newAvailableTopping) => {
    if (!newAvailableTopping.includes(props.topping.id)) {
      checked.value = false
    }
  },
)
</script>
