<template>
  <div class="demo">
    <b-table :data="tableData">
      <b-column title="名字" field="name"></b-column>
      <b-column title="任务" field="role"></b-column>
      <b-column title="性别" field="sex"></b-column>
      <b-column title="年龄" field="age"></b-column>
      <b-column title="地址" field="address"></b-column>
    </b-table>
  </div>
</template>

<script setup lang="ts">
import { BColumn, BTable } from './components';

const tableData = [
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
];
</script>

<style lang="sass" module></style>
