<template>
  <div>
    <label>
      <input type="radio" v-model="current" :value="CompA">
      A
    </label>
    <label>
      <input type="radio" v-model="current" :value="CompB">
      B
    </label>
    <keep-alive include="a" :max="10">
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import {shallowRef} from 'vue'
import CompA from './ComA.vue'
import CompB from './ComB.vue'
const current = shallowRef(CompA)
</script>

<style lang="scss" scoped>

</style>