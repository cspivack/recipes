<template>
  <article :id="post.uid" class="post-preview">
    <h3 class="post-title">
      <nuxt-link :to="'/' + post.uid">
        {{ $prismic.asText(post.title) }}
      </nuxt-link>
    </h3>
    <Tags :tags="post.tags" :post-id="post.uid" />
  </article>
</template>

<script>
import Tags from '~/components/Tags'
export default {
  components: {
    Tags
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 1.875rem;
}
.post-preview {
  padding: 1rem 0;
}
</style>
