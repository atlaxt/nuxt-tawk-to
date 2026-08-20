import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('nuxt-tawk-to', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../../playground', import.meta.url)),
  })

  it('injects the Tawk.to embed script', async () => {
    const html = await $fetch<string>('/')
    expect(html).toContain('embed.tawk.to')
  })

  it('injects the Tawk_API init script before the embed script', async () => {
    const html = await $fetch<string>('/')

    const initIndex = html.indexOf('window.Tawk_API=window.Tawk_API||{}')
    const embedIndex = html.indexOf('embed.tawk.to')

    expect(initIndex).toBeGreaterThan(-1)
    expect(embedIndex).toBeGreaterThan(-1)
    expect(initIndex).toBeLessThan(embedIndex)
  })
})
