<template>
  <div class="cnt">
    <div class="item__title">
      Warehouse project test typescript ;)
    </div>
    <table-warehouse
      :table-head="tableHead"
      :table-body="getBooks"
      @remove="remove"
      @update:editItem="editItem = $event"
    />
    <EditForm
      v-if="editItem"
      :data="editItem"
      @close="editItem = null"
      @update="updateItem"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  defineAsyncComponent,
  ComponentPublicInstance,
} from 'vue'
import TableWarehouse from '@/components/table/TableWarehouse.vue'
import books from '@/data/books'

export default defineComponent({
  name: 'Home',
  components: {
    TableWarehouse,
    EditForm: defineAsyncComponent(() =>
      import('@/components/forms/EditForm.vue'),
    ),
  },
  setup() {
    const tableHead: Array<string> = [
      '#',
      'Title',
      'Author',
      'Created',
      'Actions',
    ]

    const getBooks = ref(books)
    const editItem = ref<{ title: string; author: string }>({
      title: '',
      author: '',
    })

    const updateItem = (data: { title: string; author: string }) => {
      const { title, author } = data
      console.log('xxx', editItem.value.author)

      // getBooks.value = getBooks.value.map(book => ({
      //   ...book,
      //   title: editItem.value.id === book.id ? title : book.title,
      //   author: editItem.value.id === book.id ? author : book.author,
      // }))
    }

    const remove = (value: number) => getBooks.value.splice(value, 1)

    return { tableHead, getBooks, remove, editItem, updateItem }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/home.scss';
</style>
