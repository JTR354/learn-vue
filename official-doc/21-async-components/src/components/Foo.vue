<template>
  <div>
    <h1>i am foo</h1>
    <h2>article.title</h2>
  </div>
</template>

<script setup>

function sleep(t = 1500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}

async function getArticle () {
  await sleep()
  return {
    title: 'suspense'
  }
}


// const article = {title: 'async component'}
const article = await getArticle()

// export default {
//   async setup() {
//     const article = await getArticle()
//     console.log(article)
//     return {
//       article
//     } 
//   }
// }

</script>

<style lang="scss" scoped>

</style>