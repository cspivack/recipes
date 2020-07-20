<template>
  <div class="container">
    <h1 class="title">
      recipe blog
    </h1>
    <PostPreview v-for="post in posts" :key="post.uid" :post="post" />
  </div>
</template>

<script>
import map from 'lodash/map'
import PostPreview from '~/components/PostPreview'
export default {
  components: {
    PostPreview
  },
  async asyncData ({ $prismic, error }) {
    const response = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'recipe')
    )
    const posts = map(response.results, post => ({
      uid: post.uid,
      title: post.data.title
    }))
    return {
      posts
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-wrap: wrap;
}
.title,
.post-preview {
  width: 100%;
}
</style>
