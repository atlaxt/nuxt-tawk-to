<script setup lang="ts">
import Logo from '/logo.png'
</script>

<template>
  <div class="h-12 flex flex-row items-center gap-1">
    <img
      class="h-full"
      :src="Logo"
    >
    <span class="text-2xl font-bold tracking-tight"> Nuxt <span class="text-primary"> TawkTo </span>  </span>
  </div>
</template>
