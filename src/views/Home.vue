<template>
  <div class="cnt">
    <div class="item__title">
      Warehouse project test typescript ;)
    </div>
    <table-warehouse
      :table-head="tableHead"
      :table-body="getBooks"
      @remove="remove"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TableWarehouse from '@/components/table/TableWarehouse.vue'
import books from '@/data/books.ts'

export default defineComponent({
  name: 'Home',
  components: {
    TableWarehouse,
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

    const remove = (value: number) => {
      getBooks.value.splice(value, 1)
    }

    return { tableHead, getBooks, remove }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/home.scss';
</style>
