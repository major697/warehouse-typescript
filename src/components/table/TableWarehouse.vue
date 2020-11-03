<template>
  <table class="item">
    <tr class="item__head">
      <th v-for="item in tableHead" :key="item" class="item__element">
        {{ item }}
      </th>
    </tr>
    <tr
      v-for="(item, i) in tableBody"
      :key="item.id"
      class="item__body"
    >
      <td class="item__element">{{ i + 1 }}</td>
      <td class="item__element">{{ item.title }}</td>
      <td class="item__element">{{ item.author }}</td>
      <td class="item__element">{{ item.created }}</td>
      <td class="item__element">
        <button class="item__element__buttons" @click="edit(item)">
          Edit
        </button>
        <button class="item__element__buttons" @click="remove(i)">
          Remove
        </button>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableWarehouse',
  props: {
    tableHead: {
      type: Array,
      required: true,
    },
    tableBody: {
      type: Array,
      required: true,
    },
  },
  emits: [
    'remove',
    'update:editItem',
    'update:statusAddEditModal',
    'update:createItemStatus',
  ],
  setup(props, context) {
    const edit = (index: number) => {
      context.emit('update:editItem', index)
      context.emit('update:statusAddEditModal')
      context.emit('update:createItemStatus', 'update')
    }
    const remove = (index: number): void => {
      context.emit('remove', index)
    }

    return { edit, remove }
  },
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/table/tableWarehouse.scss';
</style>
