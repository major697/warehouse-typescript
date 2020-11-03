<template>
  <div class="input">
    <input
      :type="type"
      class="input__text"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: false,
      default: () => null,
    },
  },
  emits: ['input'],
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/forms/inputs/input.scss';
</style>
