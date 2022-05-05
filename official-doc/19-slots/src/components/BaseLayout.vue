<template>
  <div class="container">
    <header>
      <slot name="header" text="i am a header from slot props"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" text="i am footer from slot props"></slot>
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

</style>