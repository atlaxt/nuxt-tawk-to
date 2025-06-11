<script setup lang="ts">
import Logo from '../assets/tawk-to.png'
import type {TawkToConfig} from 'nuxt-tawk-to/types'
const tawkToConfig: TawkToConfig = {
  propertyId: '',
  widgetId: '',
}
</script>

<template>
  <div
    style="
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202020;
    position: fixed;
    left: 0;
    top: 0;
    user-select: none;
    "
  >
    <img
      :src="Logo"
      style="
      height: 200px;
      "
    >
  </div>
</template>
