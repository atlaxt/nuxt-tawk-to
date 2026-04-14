export interface TawkVisitor {
  name?: string
  email?: string
  hash?: string
}

export type TawkStatus = 'online' | 'away' | 'offline'
export type TawkWindowType = 'inline' | 'widget'
export type TawkWidgetPosition = 'br' | 'bl' | 'cr' | 'cl' | 'tr' | 'tl'

export interface TawkCustomStyle {
  visibility?: {
    desktop?: {
      xOffset?: string | number
      yOffset?: string | number
      position?: TawkWidgetPosition
    }
    mobile?: {
      xOffset?: string | number
      yOffset?: string | number
      position?: TawkWidgetPosition
    }
  }
  zIndex?: string | number
}

export interface TawkSwitchWidgetData {
  propertyId: string
  widgetId: string
}

export type TawkCallback = (error: Error | null) => void

export interface TawkAPI {
  // Actions
  start: () => void
  shutdown: () => void
  maximize: () => void
  minimize: () => void
  toggle: () => void
  popup: () => void
  showWidget: () => void
  hideWidget: () => void
  toggleVisibility: () => void
  endChat: () => void

  // Getters
  getWindowType: () => TawkWindowType
  getStatus: () => TawkStatus
  isChatMaximized: () => boolean
  isChatMinimized: () => boolean
  isChatHidden: () => boolean
  isChatOngoing: () => boolean
  isVisitorEngaged: () => boolean
  onLoaded: 1 | undefined
  onBeforeLoaded: 1 | undefined
  widgetPosition: () => TawkWidgetPosition

  // Setters
  visitor: TawkVisitor
  setAttributes: (attribute: Record<string, string>, callback?: TawkCallback) => void
  addEvent: (event: string, metadata?: Record<string, unknown>, callback?: TawkCallback) => void
  addTags: (tags: string[], callback?: TawkCallback) => void
  removeTags: (tags: string[], callback?: TawkCallback) => void
  switchWidget: (data: TawkSwitchWidgetData, callback?: () => void) => void

  // Config (pre-load)
  autoStart?: boolean
  embedded?: string
  customStyle?: TawkCustomStyle
}

export interface UseTawk {
  // Reactive state
  isHidden: Readonly<import('vue').Ref<boolean>>
  isMinimized: Readonly<import('vue').Ref<boolean>>
  isMaximized: Readonly<import('vue').Ref<boolean>>
  status: Readonly<import('vue').Ref<TawkStatus>>
  unreadCount: Readonly<import('vue').Ref<number>>

  // Actions
  start: () => void
  shutdown: () => void
  maximize: () => void
  minimize: () => void
  toggle: () => void
  popup: () => void
  showWidget: () => void
  hideWidget: () => void
  toggleVisibility: () => void
  endChat: () => void

  // Getters
  getWindowType: () => TawkWindowType
  getStatus: () => TawkStatus
  isChatMaximized: () => boolean
  isChatMinimized: () => boolean
  isChatHidden: () => boolean
  isChatOngoing: () => boolean
  isVisitorEngaged: () => boolean
  onLoaded: () => 1 | undefined
  onBeforeLoaded: () => 1 | undefined
  widgetPosition: () => TawkWidgetPosition

  // Listeners — return value is a cleanup function to remove the listener
  onLoad: (callback: () => void) => () => void
  onStatusChange: (callback: (status: TawkStatus) => void) => () => void
  onBeforeLoad: (callback: () => void) => () => void
  onChatMaximized: (callback: () => void) => () => void
  onChatMinimized: (callback: () => void) => () => void
  onChatHidden: (callback: () => void) => () => void
  onChatStarted: (callback: () => void) => () => void
  onChatEnded: (callback: () => void) => () => void
  onPrechatSubmit: (callback: (data: Record<string, unknown>) => void) => () => void
  onOfflineSubmit: (callback: (data: Record<string, unknown>) => void) => () => void
  onChatMessageVisitor: (callback: (message: string) => void) => () => void
  onChatMessageAgent: (callback: (message: string) => void) => () => void
  onChatMessageSystem: (callback: (message: string) => void) => () => void
  onAgentJoinChat: (callback: (data: Record<string, unknown>) => void) => () => void
  onAgentLeaveChat: (callback: (data: Record<string, unknown>) => void) => () => void
  onChatSatisfaction: (callback: (satisfaction: number) => void) => () => void
  onVisitorNameChanged: (callback: (visitorName: string) => void) => () => void
  onFileUpload: (callback: (link: string) => void) => () => void
  onTagsUpdated: (callback: (data: Record<string, unknown>) => void) => () => void
  onUnreadCountChanged: (callback: (count: number) => void) => () => void

  // Setters
  visitor: (data: TawkVisitor) => void
  setAttributes: (attribute: Record<string, string>, callback?: TawkCallback) => void
  addEvent: (event: string, metadata?: Record<string, unknown>, callback?: TawkCallback) => void
  addTags: (tags: string[], callback?: TawkCallback) => void
  removeTags: (tags: string[], callback?: TawkCallback) => void
  switchWidget: (data: TawkSwitchWidgetData, callback?: () => void) => void
}

declare global {
  interface Window {
    Tawk_API: TawkAPI
    Tawk_LoadStart: Date
  }
}
