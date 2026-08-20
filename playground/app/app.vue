<script setup lang="ts">
const {
  minimize, maximize, hideWidget, showWidget,
  isHidden, isMinimized, isMaximized, status, unreadCount,
  onLoad, onBeforeLoad, onStatusChange,
  onChatMaximized, onChatMinimized, onChatHidden,
  onUnreadCountChanged,
  onChatStarted, onPrechatSubmit,
} = useTawk()

const log = ref<string[]>([])
const pushLog = (msg: string) => log.value.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`)

const cleanups: Array<() => void> = []
onMounted(() => {
  cleanups.push(onBeforeLoad(() => pushLog('onBeforeLoad fired')))
  cleanups.push(onLoad(() => pushLog('onLoad fired')))
  cleanups.push(onStatusChange(s => pushLog(`onStatusChange: ${s}`)))
  cleanups.push(onChatMaximized(() => pushLog('onChatMaximized fired')))
  cleanups.push(onChatMinimized(() => pushLog('onChatMinimized fired')))
  cleanups.push(onChatHidden(() => pushLog('onChatHidden fired')))
  cleanups.push(onUnreadCountChanged(c => pushLog(`onUnreadCountChanged: ${c}`)))
  cleanups.push(onChatStarted(() => pushLog('onChatStarted fired')))
  cleanups.push(onPrechatSubmit(data => pushLog(`onPrechatSubmit: ${JSON.stringify(data)}`)))
})
onUnmounted(() => cleanups.forEach(fn => fn()))
</script>

<template>
  <div>
    <pre>
isHidden:     {{ isHidden }}
isMinimized:  {{ isMinimized }}
isMaximized:  {{ isMaximized }}
status:       {{ status }}
unreadCount:  {{ unreadCount }}
    </pre>

    <button @click="minimize">Minimize</button>
    <button @click="maximize">Maximize</button>
    <button @click="hideWidget">Hide</button>
    <button @click="showWidget">Show</button>

    <h3>Event log ({{ log.length }})</h3>
    <ul>
      <li v-for="(entry, i) in log" :key="i">{{ entry }}</li>
    </ul>
  </div>
</template>
