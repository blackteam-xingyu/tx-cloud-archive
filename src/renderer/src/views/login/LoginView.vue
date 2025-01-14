<script setup lang="ts">
const instance = getCurrentInstance();
console.log(instance);
</script>

<template>
  <div class="login">
    <ElCard class="login-card"></ElCard>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  &-card {
    width: 70%;
    height: 70%;
  }
  &-title {
    font-size: 22px;
    font-weight: 600;
  }
}
</style>
