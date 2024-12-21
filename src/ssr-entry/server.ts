import { renderToString } from 'vue/server-renderer'
import { createApp } from '../main'

export function render(_url: string) {
  if (_url.indexOf('.') > -1) return Promise.resolve('')
  return new Promise(async (res, rej) => {
  const { app, router, store } = createApp()

    router.push(_url)
    console.log('_url', _url)

    await router.isReady()
    const matchedComponents = router.currentRoute.value.matched
    if (!matchedComponents.length) {
      rej(404)
    }
    const init = matchedComponents[0].components?.default?.methods?._init_
    setTimeout(() => {
      init().then(async () => {

        const stream = await renderToString(app, {})

        res(stream + `<script>window.__INITSTORE_COUTER__=${JSON.stringify(store.state.value.counter)}</script>`)
      })
    }, 1000)

    // 最常规的逻辑 
    // const stream = await renderToString(app, {})
    // res(stream)

  })
  
}
