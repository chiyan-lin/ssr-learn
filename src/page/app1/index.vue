<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, computed } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'

// 方式1 在页面发起请求，跟常规的方式一样
const resData = ref()
fetch('https://qqlykm.cn/api/xingmingceshi/get').then((e) => e.json()).then((e) => {
  resData.value = e
})

</script>

<template>
  <br><br>
  resData: {{ resData }}
  <br>
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://vuejs.org/" target="_blank">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + app1" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

function defineExpose(arg0: { getData: () => void; fucj: any }) {
  throw new Error('Function not implemented.')
}
