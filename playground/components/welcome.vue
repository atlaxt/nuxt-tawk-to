<script setup lang="ts">
import TawkTo from '../../assets/tawk-to.png'
</script>

<template>
  <div
    class="inter"
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
      user-select: none;
      color: white;
    "
  >
    <div style="display: flex; flex-direction: row; align-items: end; gap: 24px;">
      <img :src="TawkTo" style="height: 150px;" alt="nuxt-tawk-to logo">

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a
          href="https://github.com/atlaxt/nuxt-tawk-to"
          target="_blank"
          style="
            color: white;
            text-decoration: none;
            font-weight: 500;
            opacity: 0.8;
            transition: opacity 0.2s ease;
          "
          onmouseover="this.style.opacity='1'"
          onmouseout="this.style.opacity='0.8'"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.npmjs.com/package/nuxt-tawk-to"
          target="_blank"
          style="
            color: white;
            text-decoration: none;
            font-weight: 500;
            opacity: 0.8;
            transition: opacity 0.2s ease;
          "
          onmouseover="this.style.opacity='1'"
          onmouseout="this.style.opacity='0.8'"
        >
          npm ↗
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

.inter {
  font-family: 'Inter', sans-serif;
}
</style>
