<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import {SyInjectKey} from './key'
import {provide, ref, readonly} from 'vue' 
const count = ref(0)
// provide('count', count)
provide('count', readonly(count))
provide('message', 'hello from app')

const location = ref('North Pole')
function updateLocation() {
  location.value = location.value === 'South Pole' ? 'North Pole' : 'South Pole';
}
provide('location', {
  location,
  updateLocation
})


provide(SyInjectKey, {a: 1, b: 2})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="count++" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
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
