<template>
  <slot name="header"></slot>
  <slot></slot>
</template>
<script lang="ts">
export default {
  name: 'BColumn',
  inheritAttrs: false,
  customOptions: {}
};
</script>
<script setup lang="ts">
import type { ColumnProps, ColumnDefaultSlots } from '../../type';

defineProps<ColumnProps>();
defineSlots<{ header(props: ColumnProps): any; default(data: ColumnDefaultSlots): any }>();
</script>

<style scoped></style>
