<template>
  <div>
    <h1 @click="count++">deep child</h1>
    <p>{{message}} {{count}}</p>
    <p>{{message2}}</p>
    <button @click="updateLocation">{{location}}</button>
    <p>{{syInject}}</p>
  </div>
</template>

<script setup>
import {inject} from 'vue'
import {SyInjectKey} from '../key'

const message = inject('message', 'default value')
const message2 = inject('message2')
const count = inject('count', -1)
const {location, updateLocation} = inject('location')

const syInject = inject(SyInjectKey)
</script>

<style lang="scss" scoped>

</style>