<template>
  <div v-show="!app.siderCollapse" class="mask-layer" @click="app.toggleSiderCollapse"></div>
  <div class="sider-container" :style="{ width: siderContainerWidth, transition: 'width 0.3s' }">
    <vertical-mix-sider v-if="isVerticalMix" class="global-sider" />
    <vertical-sider v-else class="global-sider" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore, useAppStore } from '@/store';
import { useBasicLayout } from '@/composables';
import { VerticalMixSider, VerticalSider } from './components';

defineOptions({ name: 'GlobalSider' });

const theme = useThemeStore();
const app = useAppStore();
const { siderWidth } = useBasicLayout();

const isVerticalMix = computed(() => theme.layout.mode === 'vertical-mix');

const siderContainerWidth = computed(() => {
  let width = 'var(--soy-sider-collapsed-width)';
  if (!app.siderCollapse) {
    width = `${siderWidth.value}px`;
  }
  return width;
});
</script>

<style lang="scss">
.global-sider {
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
}

@media (max-width: 768px) {
  .transition-all-300 {
    --soy-sider-collapsed-width: 0px !important;
    --soy-sider-width: 0px !important;
  }

  .mask-layer {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.2);
    z-index: -1;
  }
  .sider-container {
    height: 100vh;
  }
}
</style>
