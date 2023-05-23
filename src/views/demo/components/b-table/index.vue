<template>
  <table>
    <thead>
      <tr>
        <slot></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="val in props.data" :key="val.id">
        <td v-for="col in state.slotsProps" :key="col.title">
          {{ val[col.field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useSlots, reactive } from 'vue';
import type { TableData, ColumnProps } from '../../type';

// 定义组件的属性
const props = defineProps({
  data: {
    type: Array<TableData>,
    required: true
  }
});
const slots = useSlots();
interface State {
  slotsProps: ColumnProps[];
}
const data: State = {
  slotsProps: []
};
const state = reactive(data);
if (slots.default !== undefined) {
  const doms = slots.default();
  doms.forEach(val => {
    state.slotsProps.push(val.props as ColumnProps);
  });
}
</script>

<style module lang="scss">
th,
td {
  padding: 10px 20px;
}
</style>
