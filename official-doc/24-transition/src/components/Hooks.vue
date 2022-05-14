<template>
  <div >
    <button @click="toggle">js hooks</button>
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <div class="gsap-box" v-if="show"></div>
    </Transition>
    <hr>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    // called before the element is inserted into the DOM.
    // use this to set the "enter-from" state of the element
    onBeforeEnter(el) {
       gsap.set(el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1
      })
    },

    // called one frame after the element is inserted.
    // use this to start the animation.
    onEnter(el, done) {
      // call the done callback to indicate transition end
      // optional if used in combination with CSS
         gsap.to(el, {
          duration: 1,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          ease: 'elastic.inOut(2.5, 1)',
          onComplete: done
        })
        /**done 方法会执行v-if */
    },

    // called when the enter transition has finished.
    onAfterEnter(el) {},
    onEnterCancelled(el) {},

    // called before the leave hook.
    // Most of the time, you shoud just use the leave hook.
    onBeforeLeave(el) {},

    // called when the leave transition starts.
    // use this to start the leaving animation.
    onLeave(el, done) {
      // call the done callback to indicate transition end
      // optional if used in combination with CSS
      gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    },

    // called when the leave transition has finished and the
    // element has been removed from the DOM.
    onAfterLeave(el) {},

    // only available with v-show transitions
    leaveCancelled(el) {}
  }
}
</script>

<style lang=css scoped>
.gsap-box {
  background: #42b883;
  margin: 20px auto 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>