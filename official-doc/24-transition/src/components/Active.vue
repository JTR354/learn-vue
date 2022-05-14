<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'

export default {
  components: { CompA,CompB },
  data() {
    return {
      activeComponent: 'CompA'
    }
  },
  mounted() {
    console.log(this.activeComponent)
  }
}
</script>

<template>
	<label>
    <input type="radio" v-model="activeComponent" value="CompA"> A
  </label>
  <label>
    <input type="radio" v-model="activeComponent" value="CompB"> B
  </label>
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>
  <hr/>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>