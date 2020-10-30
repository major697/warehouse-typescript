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
      @update:statusEditModal="statusEditModal = true"
    />
    <EditForm
      v-if="statusEditModal"
      :data="editItem"
      @close="statusEditModal = false"
      @update="updateItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue'
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
    const statusEditModal = ref(false)
    const editItem = ref<{
      id: number
      title: string
      author: string
    }>({
      id: 0,
      title: '',
      author: '',
    })

    const updateItem = (data: {
      id: number
      title: string
      author: string
    }) => {
      const { title, author } = data

      getBooks.value = getBooks.value.map(book => ({
        ...book,
        title: editItem.value.id === book.id ? title : book.title,
        author: editItem.value.id === book.id ? author : book.author,
      }))
      statusEditModal.value = false
    }

    const remove = (value: number) => getBooks.value.splice(value, 1)

    return {
      tableHead,
      getBooks,
      remove,
      statusEditModal,
      editItem,
      updateItem,
    }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/home.scss';
</style>
