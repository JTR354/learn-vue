<template>
  <div>
    <p>Current component B</p>
    <span>Message is {{msg}}</span>
    <input type="text" v-model="msg">
  </div>
</template>

<script setup>
import {ref, onActivated, onDeactivated} from 'vue'

const msg = ref('')

onActivated((...args) => {
  console.log('onActivated A', args)
})

onDeactivated((...args) => {
  console.log('onDeactivated A', args)
})
</script>

<style lang="scss" scoped>

</style>