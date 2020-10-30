<template>
  <div class="cnt">
    <div class="cnt__modal">
      <div class="cnt__modal__container">
        <div
          class="cnt__modal__container__close"
          @click="$emit('close')"
        >
          <img
            src="@/assets/img/close.svg"
            alt=""
            class="cnt__modal__container__close__btn"
          />
        </div>
        <div class="cnt__modal__header">
          <slot name="header"></slot>
        </div>
        <div class="cnt__modal__body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CenterModal',
  emits: ['close'],
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/modals/centerModal.scss';
</style>
