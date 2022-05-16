<template>
  <div>
    <p>Current component A</p>
    <span>count: {{count}}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  name: 'a',
}
</script>

<script setup >
import {ref, onActivated, onDeactivated} from 'vue'

const count = ref(0)

onActivated((...args) => {
  console.log('onActivated A', args)
})

onDeactivated((...args) => {
  console.log('onDeactivated A', args)
})

</script>



<style lang="scss" scoped>

</style>