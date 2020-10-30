<template>
  <button :disabled="disabled" class="button">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/buttons/primary.scss';
</style>
