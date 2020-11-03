<template>
  <div class="cnt">
    <div class="item__title">
      Warehouse project test typescript ;)
    </div>
    <PrimaryButton title="Add item" @click="addItem" />

    <table-warehouse
      :table-head="tableHead"
      :table-body="getBooks"
      @remove="remove"
      @update:editItem="editItem = $event"
      @update:statusAddEditModal="statusAddEditModal = true"
      @update:createItemStatus="createItemStatus = $event"
    />
    <AddEditForm
      v-if="statusAddEditModal"
      :data="editItem"
      @close="closeAddEditModal"
      @save="updateItem"
      @create-item="createItemStatus"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue'
import TableWarehouse from '@/components/table/TableWarehouse.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/action-types'

export default defineComponent({
  name: 'Home',
  components: {
    PrimaryButton,
    TableWarehouse,
    AddEditForm: defineAsyncComponent(() =>
      import('@/components/forms/AddEditForm.vue'),
    ),
  },
  setup() {
    const store = useStore()

    const tableHead: Array<string> = [
      '#',
      'Title',
      'Author',
      'Created',
      'Actions',
    ]

    const getBooks = ref(store.state.items)

    const statusAddEditModal = ref<boolean>(false)
    const createItemStatus = ref<string>('create')

    const editItem = ref<{
      id: number
      title: string
      author: string
    }>({
      id: 0,
      title: '',
      author: '',
    })

    const closeAddEditModal = (): void => {
      statusAddEditModal.value = false
      editItem.value = {
        id: 0,
        title: '',
        author: '',
      }
    }

    const updateItem = (data: {
      id: number
      title: string
      author: string
    }) => {
      const { title, author } = data
      console.log(title, author)

      closeAddEditModal()
    }

    const remove = (value: number) => getBooks.value.splice(value, 1)

    function addItem() {
      store.dispatch(ActionTypes.StoreItem, {
        id: 1,
        title: 'test',
        author: 'test test',
        created: '00-22-1111',
      })
    }

    return {
      tableHead,
      getBooks,
      remove,
      statusAddEditModal,
      createItemStatus,
      editItem,
      updateItem,
      closeAddEditModal,
      addItem,
    }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/views/home.scss';
</style>
