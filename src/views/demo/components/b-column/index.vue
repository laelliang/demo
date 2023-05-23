<template>
  <td>
    {{ title }}
  </td>
</template>

<script setup lang="ts">
import type { ColumnProps } from '../../type';
defineProps<ColumnProps>();
</script>

<style scoped></style>
