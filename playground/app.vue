<script setup lang="ts">
import Logo from '../assets/tawk-to.png'
</script>

<template>
  <div
    style="
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
    position: fixed;
    left: 0;
    top: 0;
    user-select: none;"
  >
    <img
      :src="Logo"
      style="
      height: 200px;
      "
    >
  </div>
</template>
