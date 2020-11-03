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
import { defineComponent, ref, watch } from 'vue'
import CenterModal from '@/components/modals/CenterModal.vue'
import TextInput from '@/components/forms/inputs/TextInput.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'

export default defineComponent({
  name: 'AddEditForm',
  components: {
    CenterModal,
    TextInput,
    PrimaryButton,
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: () => null,
    },
    createItem: {
      type: String,
      default: '',
    },
  },
  emits: ['save'],
  setup(props, context) {
    watch(
      () => props.createItem,
      (count, prevCount) => {
        console.log(count, prevCount)
      },
    )

    const title = ref<string | null>(props.data.title || null)
    const author = ref<string | null>(props.data.author || null)

    const save = () => {
      context.emit('save', {
        title: title.value,
        author: author.value,
        update: props.createItem,
      })
    }

    return { title, author, save }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/forms/form.scss';
</style>
