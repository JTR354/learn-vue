<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import MyComponent from './components/MyComponent.vue';
import Loading from './components/Loading.vue'
import Error from './components/Error.vue'

import {defineAsyncComponent, ref, Suspense} from 'vue'

const AsyncComp = defineAsyncComponent(() => import('./components/MyComponent.vue'))

const visible = ref(false)

const HighLevelComp = defineAsyncComponent({
  loader: () => import('./components/Foo.vue'),
  loadingComponent: Loading, // 页面加载组件的loading
  delay: 200,
  errorComponent: Error, // 页面加载时的
  timeout: 30000
})

async function getComponent() {
  // await sleep()
  visible.value = !visible.value
}

// function sleep(t = 1500) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, t)
//   })
// }
// console.log(HighLevelComp)
</script>

<template>
  <img @click="getComponent" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <hr>
  <p>{{visible}}</p>
  <template v-if="visible">
    <AsyncComp />
  </template>
  <hr>
  <!-- <HighLevelComp v-if="visible"  /> -->
  <Suspense v-if="visible">
    <HighLevelComp  />
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
