import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  propertyId: string
  widgetId: string
  embedId?: string
  autoStart?: boolean
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
    embedId: '',
    autoStart: true,
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

    const basePath = 'embed.tawk.to'
    const src = `https://${basePath}/${options.propertyId}/${options.widgetId}`

    nuxt.options.app.head ??= {}
    nuxt.options.app.head.script ??= []

    if (options.autoStart === false || options.embedId) {
      const lines = ['var Tawk_API = Tawk_API || {};']
      if (options.autoStart === false) lines.push('Tawk_API.autoStart = false;')
      if (options.embedId) lines.push(`Tawk_API.embedded = '${options.embedId}';`)
      nuxt.options.app.head.script.push({ innerHTML: lines.join('\n') })
    }

    nuxt.options.app.head.script.push({ src, async: true })
  },
})
