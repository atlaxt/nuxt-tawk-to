# nuxt-tawk-to

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for integrating [Tawk.to](https://www.tawk.to) live chat widget. Works with Nuxt 3 and Nuxt 4.

- [📖 &nbsp;Documentation](https://nuxt-tawk-to.vercel.app)

## Quick Setup

```bash
npm install nuxt-tawk-to
```

Add the module and your credentials to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-tawk-to'
  ],

  tawkTo: {
    propertyId: 'YOUR_PROPERTY_ID',
    widgetId: 'YOUR_WIDGET_ID',
  }
})
```

That's it! The Tawk.to widget will be injected automatically. ✨

For advanced usage (embedId, autoStart) and the full API reference, visit the [documentation](https://nuxt-tawk-to.vercel.app).

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-tawk-to/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-tawk-to

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-tawk-to.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-tawk-to

[license-src]: https://img.shields.io/npm/l/nuxt-tawk-to.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-tawk-to

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
