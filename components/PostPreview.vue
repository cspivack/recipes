<template>
  <article :id="post.uid" class="post-preview">
    <h3 class="post-title">
      <nuxt-link :to="post.uid">
        {{ $prismic.asText(post.title) }}
      </nuxt-link>
    </h3>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
