import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, rsp: 'Eduardo' }),
  actions: {
    increment() {
      this.count++
    },
    getData() {
      console.log('start fetch');
      return fetch('https://qqlykm.cn/api/xingmingceshi/get').then((e) => e.json()).then((e) => {
        this.rsp = e
        console.log('rsp', e);
      }).catch((e) => {
        console.log('error', e);
      })
    },
  },
})