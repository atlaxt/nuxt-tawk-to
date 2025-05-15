export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  tawkTo: {
    propertyId: 'yourPropertyId',
    widgetId: 'yourWidgetId',
  },
})
