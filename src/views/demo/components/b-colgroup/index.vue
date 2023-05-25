<template>
  <slot name="header"></slot>
</template>

<script lang="ts">
export default {
  name: 'BColgroup',
  inheritAttrs: false,
  customOptions: {}
};
</script>
<script setup lang="ts">
import { defineSlots } from 'vue';
import type { ColumnProps } from '../../type';

defineProps<ColumnProps>();

defineSlots<{ header(props: ColumnProps): any }>();
</script>

<style scoped></style>
