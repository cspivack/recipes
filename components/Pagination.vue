<template>
  <div class="pagination">
    <nuxt-link v-for="link in links" :key="link.text" class="button" :to="link.url">
      {{ link.text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    const links = []

    for (let i = 0; i < this.pages.total; i++) {
      const count = i + 1

      const params = Object.assign({}, this.pages.route.params)
      params.page = i > 0 ? (i + 1) : null

      links.push({
        url: {
          name: this.pages.route.name,
          params
        },
        text: count
      })
    }

    return {
      links
    }
  }
}
</script>
