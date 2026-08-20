// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   modules: ['nuxt-tawk-to'],

  tawkTo: {
    propertyId: '68496650ddf9cd19094b4530',
    widgetId: '1itfbfagd'
  }
})
