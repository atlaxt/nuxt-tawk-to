import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface TawkModuleOptions {
  propertyId: string
  widgetId: string
}

export default defineNuxtModule<TawkModuleOptions>({
  meta: {
    name: 'nuxt-tawk-to',
    configKey: 'tawkTo',
    compatibility: { nuxt: '^3.0.0' },
  },
  defaults: {
    propertyId: '',
    widgetId: '',
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.tawkModule = options

    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))
  },
})
