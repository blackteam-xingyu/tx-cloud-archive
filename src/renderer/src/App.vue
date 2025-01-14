<script setup lang="ts">
// const ipcHandle = () => window.electron.ipcRenderer.send('ping');
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const route = useRoute();
</script>

<template>
  <ElConfigProvider :z-index="3000" :locale="zhCn" size="small">
    <ElContainer v-if="route?.meta.layout !== false" class="app">
      <ElAside width="200px">Aside</ElAside>
      <ElContainer>
        <ElHeader>Header</ElHeader>
        <ElMain>
          <RouterView v-slot="{ Component }">
            <transition name="el-fade-in" mode="out-in" appear>
              <div :key="route.path" style="width: 100%; height: 100%">
                <component :is="Component" />
              </div>
            </transition>
          </RouterView>
        </ElMain>
      </ElContainer>
    </ElContainer>
    <RouterView v-else />
  </ElConfigProvider>
</template>
<style scoped lang="scss">
.app {
  height: 100%;
}
</style>
