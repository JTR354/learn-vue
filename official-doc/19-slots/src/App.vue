<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import FancyButton from './components/FancyButton.vue';
import BaseLayout from './components/BaseLayout.vue'
import {ref, onMounted} from 'vue'
import MyComponent from './components/MyComponent.vue'
import FancyList from './components/FancyList.vue';

const message = ref('msg')
const dynamicSlotName = 'header'
const dynamicSlotNameFooter = 'footer'
onMounted(() => {
  console.log(`${message.value} is here`)
})
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <FancyButton>fancy-btn 
    <span>123</span>
    <span>{{message}}</span>
  </FancyButton>
  <hr>
  <!-- <BaseLayout>
    <template v-slot:header >
      <p>i am a header</p>
    </template>
    <template v-slot:default>
      I am a main
    </template>
    <template v-slot:footer>
      <p>i am a footer</p>
    </template>
  </BaseLayout> -->
  <BaseLayout>
    <template #[dynamicSlotName]="headerProps" >
      <p>i am a header ,{{headerProps.text}}</p>
    </template>
    <template #[dynamicSlotNameFooter]="footerProps">
      <p>i am a footer, {{footerProps.text}}</p>
    </template>
    I am a main
  </BaseLayout>
  <hr>
  <!-- <MyComponent v-slot="slotProps">
    {{slotProps.text}} {{slotProps.count}}
  </MyComponent> -->
  <MyComponent v-slot="{text, count}">
    {{text}} {{count}}
  </MyComponent>
  <hr>
  <FancyList>
    <template #item="{n:number}">
      <div class="item">
        <p>{{number}}</p>
      </div>
    </template>
  </FancyList>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
