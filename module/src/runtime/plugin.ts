import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3'
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import type { TawkToConfig } from '../types/index.js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.tawkModule as TawkToConfig

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
