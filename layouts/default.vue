<template>
  <div>
    <Header />
    <main id="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#main {
  padding: 1.5rem 0;
}
</style>
