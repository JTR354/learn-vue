<template>
  <ul>
    <li v-for="n in 10">
      <slot name="item" v-bind="{n}"></slot>
    </li>
  </ul>
</template>

<script setup>

</script>

<style lang="css" scoped>

</style>