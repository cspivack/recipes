<template src="~/templates/blog.html" />

<script>
import map from 'lodash/map'
import PostPreview from '~/components/PostPreview'
export default {
  components: {
    PostPreview
  },
  async asyncData ({ $prismic, params, error }) {
    const response = await $prismic.api.query(
      $prismic.predicates.at('document.tags', [params.name])
    )
    const posts = map(response.results, post => ({
      uid: post.uid,
      title: post.data.title,
      tags: post.tags
    }))
    return {
      posts,
      title: 'recipes tagged: ' + params.name
    }
  },
  template: 'blog'
}
</script>
