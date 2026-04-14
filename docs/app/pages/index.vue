<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/nuxt-tawk-to-og_image.jpg',
  ogUrl: 'https://nuxt-tawk-to.atlaxt.me/',
  ogType: 'website',
  twitterImage: '/nuxt-tawk-to-og_image.jpg'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://nuxt-tawk-to.atlaxt.me/' }
  ]
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
