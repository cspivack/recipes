<template>
  <div class="tags">
    <nuxt-link v-for="tag in tags" :key="postId + tag" :to="'/tags/' + tag" class="tag">
      {{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    postId: {
      type: String,
      default: null
    }
  }
}
</script>
