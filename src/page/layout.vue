<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCounterStore } from '../store'

const counterStore = useCounterStore()

const curCount = computed(() => {
  return counterStore.count
})

const addOne = counterStore.increment

</script>

<template>
  curCount: {{ curCount }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button @click="addOne">click me add one</button>
  <br><br>
  <router-link style="font-size: 18px;" to="/app1">app1</router-link>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <router-link to="/app2">app2</router-link>
  <router-view style="font-size: 18px;"></router-view>
</template>

<style scoped>
</style>
