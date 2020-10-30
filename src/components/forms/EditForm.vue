<template>
  <CenterModal>
    <template #header>
      Lorem ipsum dolor sit amet.
    </template>
    <template #body>
      <div class="form">
        <div class="form__inputs">
          <TextInput
            placeholder="title"
            name="title"
            :value="title"
            @input="title = $event"
          />
          <TextInput
            placeholder="author"
            name="author"
            :value="author"
            @input="author = $event"
          />
        </div>
        <div class="form__btn">
          <PrimaryButton title="Save" @click="save" />
        </div>
      </div>
    </template>
  </CenterModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CenterModal from '@/components/modals/CenterModal.vue'
import TextInput from '@/components/forms/inputs/TextInput.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default defineComponent({
  name: 'EditForm',
  components: {
    CenterModal,
    TextInput,
    PrimaryButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ['save', 'update'],
  setup(props, context) {
    const title = ref<string>(props.data.title)
    const author = ref<string>(props.data.author)

    const save = () => {
      context.emit('update', {
        title: title.value,
        author: author.value,
      })
    }

    return { title, author, save }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/forms/form.scss';
</style>
