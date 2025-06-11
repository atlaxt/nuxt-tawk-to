# Nuxt Tawk.to Module

Easily integrate the [Tawk.to](https://www.tawk.to/) live chat widget into your Nuxt 3 application using this lightweight module.

Developed and maintained by [atlaxt](https://atlaxt.me) — feel free to visit!

---

## ✨ Features

- ✅ Simple setup via `nuxt.config.ts`
- ✅ Uses official `@tawk.to/tawk-messenger-vue-3` wrapper
- ✅ Tree-shakable, TypeScript support
- ✅ Automatically injects Tawk widget on client side

---

## 🚀 Installation

```bash
npm install nuxt-tawk-to
# or
yarn add nuxt-tawk-to
# or
pnpm add nuxt-tawk-to
```

---

## 🛠️ Usage

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-tawk-to'],
  tawkTo: {
    propertyId: 'your-tawk-property-id',
    widgetId: 'your-widget-id'
  }
})
```

> 💡 You can find your `propertyId` and `widgetId` from the [Tawk.to dashboard](https://dashboard.tawk.to/).

---

## 🧾 TypeScript Support

This module includes full TypeScript support.

You can import the module config type like this:

```ts
import type { TawkToConfig } from 'nuxt-tawk-to/types'
```

---

## 🔍 Runtime Config Support

These options are injected into Nuxt runtime config and are accessible in plugins or composables if needed:

```ts
useRuntimeConfig().public.tawkTo
```

---

## 🧠 How it works

Under the hood, the module:

1. Injects `@tawk.to/tawk-messenger-vue-3` into your Nuxt app.
2. Loads the widget only if both `propertyId` and `widgetId` are provided.
3. Logs clear console warnings if any config is missing.

---

## 📦 Module Options

| Option       | Type     | Required | Description                                |
|--------------|----------|----------|--------------------------------------------|
| `propertyId` | `string` | ✅ Yes   | Your Tawk.to property ID                   |
| `widgetId`   | `string` | ✅ Yes   | Your Tawk.to widget ID                     |

---

## 🧩 Compatibility

- ✅ Nuxt 3+
- ❌ Nuxt 2 is not supported

---

## 📄 License

[MIT](./LICENSE) © [Atlaxt](https://atlaxt.me)