<template>
  <div>
    Mouse position is at : {{x}} , {{y}}
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const x = ref(0)
const y = ref(0)

function update(e) {
  x.value = e.pageX
  y.value = e.pageY
}
const event = 'mousemove'

onMounted(() => window.addEventListener(event, update))
onUnmounted(() => window.removeEventListener(event, update))
</script>

<style lang="scss" scoped>

</style>