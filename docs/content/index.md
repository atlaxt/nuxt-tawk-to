---
seo:
  title: Nuxt TawkTo
  description: Easily integrate the Tawk.to live chat widget into your Nuxt 3 application using this lightweight module.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
class: h-full
---
#top
:hero-background

#title
Easily integrate the [Tawk.to]{.text-primary}.

#description
Easily integrate the Tawk.to live chat widget into your Nuxt 3 application using this lightweight module.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/atlaxt/nuxt-tawk-to/tree/master/module
  target: _blank
  ---
  Code
  :::

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
       modules: [
      'nuxt-tawk-to'
    ],

    tawkTo: {
      propertyId: 'your-tawk-property-id',
      widgetId: 'your-widget-id'
    }
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: [
      'nuxt-tawk-to'
    ],

    tawkTo: {
      propertyId: 'your-tawk-property-id',
      widgetId: 'your-widget-id'
    }
  })
  ```
  :::
::


