<template>
  <div>
    <button @click="insert">insert at random index</button>
    <button @click="reset">reset</button>

    <TransitionGroup class="container" name="fade" tag="ul">
      <div v-for="item in items" :key="item" class="item">
        {{item}}
        <button @click="remove(item)">X</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const getInitialItems = () => [1, 2, 3 , 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1
function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}
function remove(item) {
  const i = items.value.indexOf(item)
  if(i > -1) {
    items.value.splice(i,1)
  }
}

function reset() {
  items.value = getInitialItems()
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
  padding: 0;
}

.item {
  width:100%;
  height:30px;
  background-color: #f3f3f3;
  border:1px solid #666;
  box-sizing: border-box;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0)
}

.fade-leave-active {
  position: absolute;
}
</style>