<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <a
          target="_blank"
          href="https://atlaxt.me"
          class="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <UColorModeImage
            class="h-8"
            light="https://atlaxt.me/sign_black.png"
            dark="https://atlaxt.me/sign_white.png"
          />
        </a>
      </template>
    </template>
  </UFooter>
</template>
