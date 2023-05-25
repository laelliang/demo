<template>
  <div class="demo">
    <b-table :data="tableData">
      <b-colgroup title="基本信息">
        <template #header="{ title }">
          <p style="color: red">{{ title }}</p>
        </template>
        <b-column field="name" title="Name"></b-column>
      </b-colgroup>
      <b-colgroup title="更多信息">
        <b-column field="role" title="Role"></b-column>
        <b-colgroup title="详细信息">
          <b-column field="sex" title="Sex">
            <template #header="{ title }">
              <p style="color: red">{{ title }}</p>
            </template>
            <template #default="{ data, field = '' }">
              <p style="color: red">{{ data[field] }}</p>
            </template>
          </b-column>
          <b-column field="age" title="Age"></b-column>
        </b-colgroup>
      </b-colgroup>
      <b-colgroup title="分类信息">
        <b-column field="date3" title="Date"></b-column>
      </b-colgroup>
      <b-column field="address" title="Address" show-overflow></b-column>
    </b-table>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { BColumn, BTable, BColgroup } from './components';
// import type { ColumnProps } from './type'
import './components/b-table/index.scss';

const tableData = reactive([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
]);
</script>

<style lang="scss">
.demo {
  background-color: #ffffff;
}
</style>
