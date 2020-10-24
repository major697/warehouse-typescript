<template>
  <div class="item">siemka ziomeczki</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.item {
  color: map-get($colors, red);
}
</style>
