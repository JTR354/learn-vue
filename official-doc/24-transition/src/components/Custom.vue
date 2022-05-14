<template>
  <div>
    <button @click="show=!show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <hr>
    <Transition name="slide-fade">
      <p v-if="show">named transition</p>
    </Transition>
    <hr>
    <Transition name="bounce">
      <p v-if="show">
        hello here is keyframe text
      </p>
    </Transition>
    <hr>
    <Transition name="custom-classes" leave-active-class="animate__animated animate__bounceOutRight" enter-active-class="animate__animated animate__tada">
      <p v-if="show">customer animation</p>
    </Transition>
    <hr>
    <Transition duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">
          there is nested
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const show = ref(false)

</script>

<style lang="css" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.outer, .inner {
	background: #eee;
  padding: 30px;
  min-height: 100px;
}
  
.inner { 
  background: #ccc;
}
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

/* ---- */


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


</style>