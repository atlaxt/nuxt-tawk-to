---
seo:
  title: 'nuxt-tawk-to v2 — Tawk.to Live Chat Module for Nuxt 3 & 4'
  description: 'nuxt-tawk-to v2 is the easiest Tawk.to integration for Nuxt. Auto-imported useTawk() composable, reactive state, full event listeners, TypeScript-ready, SSR-safe.'
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
class: h-full
---
#top
:hero-background

#title
Tawk.to live chat for [Nuxt]{.text-primary}, the right way.

#description
The only Tawk.to module with a fully reactive `useTawk()` composable, auto-cleanup event listeners, and complete TypeScript types. Works with Nuxt 3 & 4.

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
  to: https://github.com/atlaxt/nuxt-tawk-to
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
      modules: ['nuxt-tawk-to'],

      tawkTo: {
        propertyId: 'your-property-id',
        widgetId: 'your-widget-id'
      }
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['nuxt-tawk-to'],

    tawkTo: {
      propertyId: 'your-property-id',
      widgetId: 'your-widget-id'
    }
  })
  ```
  :::
::

::u-page-section
#title
Everything you need. Nothing you don't.

#features
  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  Auto-imported Composable

  #description
  `useTawk()` is available in every component, composable, and page with no imports required.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-activity
  ---
  #title
  Reactive State

  #description
  `isHidden`, `isMinimized`, `isMaximized`, `status`, `unreadCount` — live Vue refs that update as the widget changes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bell
  ---
  #title
  Event Listeners

  #description
  Subscribe to any Tawk.to event. Every listener returns a cleanup function for zero memory leaks.
  :::

  :::u-page-feature
  ---
  icon: lineicons:typescript
  ---
  #title
  Full TypeScript

  #description
  All types — `TawkStatus`, `TawkVisitor`, `UseTawk`, `TawkAPI` and more — exported via `nuxt-tawk-to/types`.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  SSR Safe

  #description
  Script injection and all API calls are client-side only. No hydration mismatches, ever.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-blocks
  ---
  #title
  Nuxt 3 & 4 Ready

  #description
  Fully compatible with both Nuxt 3 and Nuxt 4, using `@nuxt/kit` under the hood.
  :::
::
