<template>
  <article :id="post.uid" class="post-preview">
    <h3 class="post-title">
      <nuxt-link :to="post.url">
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
