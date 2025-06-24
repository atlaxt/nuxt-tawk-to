import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type { TawkToConfig } from './types.js'

export type { TawkToConfig } from './types.js'

export default defineNuxtModule<TawkToConfig>({
  meta: {
    name: 'nuxt-tawk-to',
    configKey: 'tawkTo',
    compatibility: { nuxt: '^3.0.0' },
  },
  defaults: {
    propertyId: '',
    widgetId: '',
    embedId: '',
    basePath: '',
    autoStart: true,
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.tawkModule = options

    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))
  },
})
