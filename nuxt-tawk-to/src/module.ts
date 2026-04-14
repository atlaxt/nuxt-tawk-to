import { defineNuxtModule, addImportsDir, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  propertyId: string
  widgetId: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tawk-to',
    configKey: 'tawkTo',
    compatibility: { nuxt: '>=3.0.0' },
  },
  defaults: {
    propertyId: '',
    widgetId: '',
  },
  setup(options, nuxt) {
    if (!options.propertyId) {
      console.warn('[nuxt-tawk-to] Missing `propertyId`. Please provide it in `tawkTo` config.')
      return
    }

    if (!options.widgetId) {
      console.warn('[nuxt-tawk-to] Missing `widgetId`. Please provide it in `tawkTo` config.')
      return
    }

    const { resolve } = createResolver(import.meta.url)

    const src = `https://embed.tawk.to/${options.propertyId}/${options.widgetId}`

    nuxt.options.app.head ??= {}
    nuxt.options.app.head.script ??= []
    nuxt.options.app.head.script.push({
      innerHTML: 'window.Tawk_API=window.Tawk_API||{};window.Tawk_LoadStart=new Date();',
    })
    nuxt.options.app.head.script.push({ src, async: true, crossorigin: '' })

    addPlugin(resolve('./runtime/plugin.client'))
    addImportsDir(resolve('./runtime/composables'))
  },
})
