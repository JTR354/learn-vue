<script setup>
import { ref } from 'vue'
import useMouse from '../hooks/useMouse'
import useFetch from '../hooks/useFetch'


defineProps({
  msg: String
})

const count = ref(0)
const {x, y} = useMouse()
// const {data, error} = useFetch('/public/stub/200.json')
// const data = ref()
// const error = ref()

// fetch('/public/stub/200.json')
//   .then(res => {
//     return res.json()
//   })
//   .then(json=> {
//     data.value = json
//   })
//   .catch(err => {
//     error.value = err
//   })
const url = ref('')
const {data, error} = useFetch(url)
</script>

<template>
  <input type="text" v-model.lazy="url">
  <p>url => {{url}}</p>
  <div v-if="error">{{error?.message}}</div>
  <div v-else>data loaded => {{data}}</div>
  <hr>
  <h1>{{ msg }} {{x}}, {{y}}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
