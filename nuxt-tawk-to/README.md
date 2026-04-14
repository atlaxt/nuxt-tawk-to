# nuxt-tawk-to

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for integrating [Tawk.to](https://www.tawk.to) live chat widget. Works with Nuxt 3 and Nuxt 4.

- [📖 &nbsp;Documentation](https://nuxt-tawk-to.atlaxt.me)

## Features

- Automatic widget injection
- `useTawk()` composable with reactive state
- Full TypeScript support via `nuxt-tawk-to/types`
- SSR safe
- Nuxt 3 & 4 compatible

## Setup

```bash
npm install nuxt-tawk-to
```

Add the module and your credentials to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-tawk-to'],

  tawkTo: {
    propertyId: 'your-tawk-property-id',
    widgetId: 'your-widget-id',
  },
})
```

That's it. The widget loads automatically.

## useTawk()

The `useTawk()` composable is auto-imported and gives you full access to the Tawk.to API with reactive state.

```ts
const tawk = useTawk()
```

### Reactive State

These are Vue refs that update automatically as the widget state changes.

```ts
const { isHidden, isMinimized, isMaximized, status, unreadCount } = useTawk()
```

| Property | Type | Description |
|---|---|---|
| `isHidden` | `Ref<boolean>` | Whether the widget is hidden |
| `isMinimized` | `Ref<boolean>` | Whether the widget is minimized |
| `isMaximized` | `Ref<boolean>` | Whether the widget is maximized |
| `status` | `Ref<'online' \| 'away' \| 'offline'>` | Current agent status |
| `unreadCount` | `Ref<number>` | Number of unread messages |

```vue
<template>
  <button @click="isHidden ? showWidget() : hideWidget()">
    Chat <span v-if="unreadCount > 0">({{ unreadCount }})</span>
  </button>
  <span>{{ status }}</span>
</template>

<script setup>
const { isHidden, unreadCount, status, showWidget, hideWidget } = useTawk()
</script>
```

### Actions

```ts
const {
  start,           // Start the widget
  shutdown,        // Shut down the widget
  maximize,        // Open the chat window
  minimize,        // Minimize the chat window
  toggle,          // Toggle open/minimized
  popup,           // Open chat in a popup
  showWidget,      // Show the widget bubble
  hideWidget,      // Hide the widget bubble
  toggleVisibility,// Toggle widget visibility
  endChat,         // End the current chat
} = useTawk()
```

### Getters

```ts
const {
  getWindowType,    // () => 'inline' | 'widget'
  getStatus,        // () => 'online' | 'away' | 'offline'
  isChatMaximized,  // () => boolean
  isChatMinimized,  // () => boolean
  isChatHidden,     // () => boolean
  isChatOngoing,    // () => boolean
  isVisitorEngaged, // () => boolean
  onLoaded,         // () => 1 | undefined
  onBeforeLoaded,   // () => 1 | undefined
  widgetPosition,   // () => 'br' | 'bl' | 'cr' | 'cl' | 'tr' | 'tl'
} = useTawk()
```

### Listeners

All listeners return a cleanup function. Call it in `onUnmounted` to avoid memory leaks.

```ts
const { onLoad, onChatStarted, onStatusChange } = useTawk()

onMounted(() => {
  const cleanup = onLoad(() => {
    console.log('Tawk.to loaded')
  })

  onUnmounted(cleanup)
})
```

| Listener | Callback |
|---|---|
| `onLoad` | `() => void` |
| `onBeforeLoad` | `() => void` |
| `onStatusChange` | `(status: TawkStatus) => void` |
| `onChatMaximized` | `() => void` |
| `onChatMinimized` | `() => void` |
| `onChatHidden` | `() => void` |
| `onChatStarted` | `() => void` |
| `onChatEnded` | `() => void` |
| `onPrechatSubmit` | `(data) => void` |
| `onOfflineSubmit` | `(data) => void` |
| `onChatMessageVisitor` | `(message: string) => void` |
| `onChatMessageAgent` | `(message: string) => void` |
| `onChatMessageSystem` | `(message: string) => void` |
| `onAgentJoinChat` | `(data) => void` |
| `onAgentLeaveChat` | `(data) => void` |
| `onChatSatisfaction` | `(satisfaction: number) => void` |
| `onVisitorNameChanged` | `(name: string) => void` |
| `onFileUpload` | `(link: string) => void` |
| `onTagsUpdated` | `(data) => void` |
| `onUnreadCountChanged` | `(count: number) => void` |

### Setters

```ts
const { visitor, setAttributes, addEvent, addTags, removeTags, switchWidget } = useTawk()

// Set visitor identity
visitor({ name: 'John Doe', email: 'john@example.com', hash: 'secure-hash' })

// Set custom attributes
setAttributes({ plan: 'premium', accountId: '123' }, (err) => {
  if (err) console.error(err)
})

// Track a custom event
addEvent('purchase', { item: 'Pro Plan', value: 49 }, (err) => {})

// Add tags to the conversation
addTags(['vip', 'trial'], (err) => {})

// Remove tags
removeTags(['trial'], (err) => {})

// Switch to a different widget
switchWidget({ propertyId: 'new-id', widgetId: 'new-widget-id' })
```

## TypeScript

All types are available via the `nuxt-tawk-to/types` subpath:

```ts
import type { TawkStatus, TawkVisitor, TawkWidgetPosition, UseTawk } from 'nuxt-tawk-to/types'
```

| Type | Description |
|---|---|
| `TawkStatus` | `'online' \| 'away' \| 'offline'` |
| `TawkWindowType` | `'inline' \| 'widget'` |
| `TawkWidgetPosition` | `'br' \| 'bl' \| 'cr' \| 'cl' \| 'tr' \| 'tl'` |
| `TawkVisitor` | `{ name?, email?, hash? }` |
| `TawkCustomStyle` | Widget visibility and z-index config |
| `TawkAPI` | Full `window.Tawk_API` interface |
| `UseTawk` | Return type of `useTawk()` |
