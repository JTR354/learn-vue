<template>
  <div>
    <hr>
    <input type="text" v-model="query">
    <TransitionGroup :css="false" tag="ul" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
        {{item.msg}}
      </li>

    </TransitionGroup>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import gsap from 'gsap';
const query = ref('')
const list  = [
  {msg: 'Bruce Lee'},
  {msg: 'Jackie Chan'},
  {msg: 'Chunk Norris'},
  {msg: 'Jet Li'},
  {msg: 'Kung Fury'}
]
const computedList = computed(() => {
  return list.filter(item => {
    const result = item.msg.toLowerCase().includes(query.value)
    console.log(result)
    return result
  })
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity:1,
    height: '1.6em',
    delay: el.dataset.index * 0.05,
    onComplete: done,
  })
}

function onLeave(el, onComplete) {
  gsap.to(el, {
    opacity: 0,
    height:0,
    delay: el.dataset.index *0.05,
    onComplete
  })
}

onMounted(() => {
  // console.log(computedList.value)
})

</script>

<style lang="css" scoped>

</style>