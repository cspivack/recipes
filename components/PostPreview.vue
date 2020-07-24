<template>
  <article :id="post.uid" class="post-preview">
    <h3 class="post-title">
      <nuxt-link :to="post.uid">
        {{ $prismic.asText(post.title) }}
      </nuxt-link>
    </h3>
    <div class="tags">
      <nuxt-link v-for="tag in post.tags" :key="post.uid + tag" :to="'/tags/' + tag" class="tag">
        {{ tag }}
      </nuxt-link>
    </div>
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

<style lang="scss" scoped>
.post-title {
  font-size: 1.875rem;
}
.post-preview {
  padding: 1rem 0;
}
.tags {
  margin-top: 0.25rem;
}
</style>
