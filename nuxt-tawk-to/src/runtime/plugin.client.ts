import { defineNuxtPlugin, useState } from 'nuxt/app'
import type { TawkStatus } from './types'

export default defineNuxtPlugin(() => {
  const isHidden = useState<boolean>('tawk:isHidden', () => false)
  const isMinimized = useState<boolean>('tawk:isMinimized', () => false)
  const isMaximized = useState<boolean>('tawk:isMaximized', () => false)
  const status = useState<TawkStatus>('tawk:status', () => 'offline')
  const unreadCount = useState<number>('tawk:unreadCount', () => 0)

  window.addEventListener('tawkLoad', () => {
    isHidden.value = window.Tawk_API.isChatHidden()
    isMinimized.value = window.Tawk_API.isChatMinimized()
    isMaximized.value = window.Tawk_API.isChatMaximized()
    status.value = window.Tawk_API.getStatus()
  })

  window.addEventListener('tawkStatusChange', (e) => {
    status.value = (e as CustomEvent<TawkStatus>).detail
  })

  window.addEventListener('tawkChatHidden', () => {
    isHidden.value = true
  })

  window.addEventListener('tawkChatMinimized', () => {
    isMinimized.value = true
    isMaximized.value = false
  })

  window.addEventListener('tawkChatMaximized', () => {
    isMaximized.value = true
    isMinimized.value = false
  })

  window.addEventListener('tawkUnreadCountChanged', (e) => {
    unreadCount.value = (e as CustomEvent<number>).detail
  })
})
