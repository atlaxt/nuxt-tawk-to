import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3'
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.tawkModule

  if (!config.propertyId) {
    console.warn('[nuxt-tawk-to] Missing `propertyId`. Please provide it in `tawkTo` config.')
    return
  }

  if (!config.widgetId) {
    console.warn('[nuxt-tawk-to] Missing `widgetId`. Please provide it in `tawkTo` config.')
    return
  }

  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId: config.propertyId,
    widgetId: config.widgetId,
  })
})
