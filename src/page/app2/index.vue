<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../../components/HelloWorld.vue'
import { ref } from 'vue'
import { useCounterStore } from '../../store'

export default {
  mounted() {
    const counterStore = useCounterStore()
    if (window.__INITSTORE_COUTER__) {
      counterStore.$state = window.__INITSTORE_COUTER__
    }
    if (!window.__INITSTORE_COUTER__) {
      this._init_()
    }
  },
  computed: {
    curRsp: () => {
      const counterStore = useCounterStore()
      return counterStore.rsp
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    _init_() {
      const counterStore = useCounterStore()
      return counterStore.getData()
    }
  },
}
</script>

<template>
  <br><br>
  curRsp: {{ curRsp }}
  <br>
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://vuejs.org/" target="_blank">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + app2" />
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
