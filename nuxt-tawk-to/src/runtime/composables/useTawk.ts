import { readonly } from 'vue'
import { useState } from 'nuxt/app'
import type {
  UseTawk,
  TawkVisitor,
  TawkStatus,
  TawkWindowType,
  TawkWidgetPosition,
  TawkCallback,
  TawkSwitchWidgetData,
} from '../types'

export function useTawk(): UseTawk {
  const isHidden = useState<boolean>('tawk:isHidden', () => false)
  const isMinimized = useState<boolean>('tawk:isMinimized', () => false)
  const isMaximized = useState<boolean>('tawk:isMaximized', () => false)
  const status = useState<TawkStatus>('tawk:status', () => 'offline')
  const unreadCount = useState<number>('tawk:unreadCount', () => 0)

  const api = () => window.Tawk_API

  return {
    // Reactive state
    isHidden: readonly(isHidden),
    isMinimized: readonly(isMinimized),
    isMaximized: readonly(isMaximized),
    status: readonly(status),
    unreadCount: readonly(unreadCount),

    // Actions
    start: () => { if (import.meta.client) api()?.start() },
    shutdown: () => { if (import.meta.client) api()?.shutdown() },
    maximize: () => {
      if (import.meta.client) {
        api()?.maximize()
        isMaximized.value = true
        isMinimized.value = false
      }
    },
    minimize: () => {
      if (import.meta.client) {
        api()?.minimize()
        isMinimized.value = true
        isMaximized.value = false
      }
    },
    toggle: () => { if (import.meta.client) api()?.toggle() },
    popup: () => { if (import.meta.client) api()?.popup() },
    showWidget: () => {
      if (import.meta.client) {
        api()?.showWidget()
        isHidden.value = false
      }
    },
    hideWidget: () => {
      if (import.meta.client) {
        api()?.hideWidget()
        isHidden.value = true
      }
    },
    toggleVisibility: () => {
      if (import.meta.client) {
        api()?.toggleVisibility()
        isHidden.value = !isHidden.value
      }
    },
    endChat: () => { if (import.meta.client) api()?.endChat() },

    // Getters
    getWindowType: () => api()?.getWindowType() as TawkWindowType,
    getStatus: () => api()?.getStatus() as TawkStatus,
    isChatMaximized: () => api()?.isChatMaximized() ?? false,
    isChatMinimized: () => api()?.isChatMinimized() ?? false,
    isChatHidden: () => api()?.isChatHidden() ?? false,
    isChatOngoing: () => api()?.isChatOngoing() ?? false,
    isVisitorEngaged: () => api()?.isVisitorEngaged() ?? false,
    onLoaded: () => api()?.onLoaded,
    onBeforeLoaded: () => api()?.onBeforeLoaded,
    widgetPosition: () => api()?.widgetPosition() as TawkWidgetPosition,

    // Listeners — returns cleanup function
    onLoad: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkLoad', handler)
      return () => window.removeEventListener('tawkLoad', handler)
    },
    onStatusChange: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<TawkStatus>).detail)
      window.addEventListener('tawkStatusChange', handler)
      return () => window.removeEventListener('tawkStatusChange', handler)
    },
    onBeforeLoad: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkBeforeLoad', handler)
      return () => window.removeEventListener('tawkBeforeLoad', handler)
    },
    onChatMaximized: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkChatMaximized', handler)
      return () => window.removeEventListener('tawkChatMaximized', handler)
    },
    onChatMinimized: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkChatMinimized', handler)
      return () => window.removeEventListener('tawkChatMinimized', handler)
    },
    onChatHidden: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkChatHidden', handler)
      return () => window.removeEventListener('tawkChatHidden', handler)
    },
    onChatStarted: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkChatStarted', handler)
      return () => window.removeEventListener('tawkChatStarted', handler)
    },
    onChatEnded: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = () => callback()
      window.addEventListener('tawkChatEnded', handler)
      return () => window.removeEventListener('tawkChatEnded', handler)
    },
    onPrechatSubmit: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent).detail)
      window.addEventListener('tawkPrechatSubmit', handler)
      return () => window.removeEventListener('tawkPrechatSubmit', handler)
    },
    onOfflineSubmit: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent).detail)
      window.addEventListener('tawkOfflineSubmit', handler)
      return () => window.removeEventListener('tawkOfflineSubmit', handler)
    },
    onChatMessageVisitor: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<string>).detail)
      window.addEventListener('tawkChatMessageVisitor', handler)
      return () => window.removeEventListener('tawkChatMessageVisitor', handler)
    },
    onChatMessageAgent: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<string>).detail)
      window.addEventListener('tawkChatMessageAgent', handler)
      return () => window.removeEventListener('tawkChatMessageAgent', handler)
    },
    onChatMessageSystem: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<string>).detail)
      window.addEventListener('tawkChatMessageSystem', handler)
      return () => window.removeEventListener('tawkChatMessageSystem', handler)
    },
    onAgentJoinChat: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent).detail)
      window.addEventListener('tawkAgentJoinChat', handler)
      return () => window.removeEventListener('tawkAgentJoinChat', handler)
    },
    onAgentLeaveChat: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent).detail)
      window.addEventListener('tawkAgentLeaveChat', handler)
      return () => window.removeEventListener('tawkAgentLeaveChat', handler)
    },
    onChatSatisfaction: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<number>).detail)
      window.addEventListener('tawkChatSatisfaction', handler)
      return () => window.removeEventListener('tawkChatSatisfaction', handler)
    },
    onVisitorNameChanged: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<string>).detail)
      window.addEventListener('tawkVisitorNameChanged', handler)
      return () => window.removeEventListener('tawkVisitorNameChanged', handler)
    },
    onFileUpload: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<string>).detail)
      window.addEventListener('tawkFileUpload', handler)
      return () => window.removeEventListener('tawkFileUpload', handler)
    },
    onTagsUpdated: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent).detail)
      window.addEventListener('tawkTagsUpdated', handler)
      return () => window.removeEventListener('tawkTagsUpdated', handler)
    },
    onUnreadCountChanged: (callback) => {
      if (!import.meta.client) return () => {}
      const handler = (e: Event) => callback((e as CustomEvent<number>).detail)
      window.addEventListener('tawkUnreadCountChanged', handler)
      return () => window.removeEventListener('tawkUnreadCountChanged', handler)
    },

    // Setters
    visitor: (data: TawkVisitor) => {
      if (import.meta.client) api().visitor = data
    },
    setAttributes: (attribute, callback?: TawkCallback) => {
      if (import.meta.client) api()?.setAttributes(attribute, callback)
    },
    addEvent: (event, metadata?, callback?: TawkCallback) => {
      if (import.meta.client) api()?.addEvent(event, metadata, callback)
    },
    addTags: (tags, callback?: TawkCallback) => {
      if (import.meta.client) api()?.addTags(tags, callback)
    },
    removeTags: (tags, callback?: TawkCallback) => {
      if (import.meta.client) api()?.removeTags(tags, callback)
    },
    switchWidget: (data: TawkSwitchWidgetData, callback?: () => void) => {
      if (import.meta.client) api()?.switchWidget(data, callback)
    },
  }
}
