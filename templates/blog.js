import map from 'lodash/map'
import Pagination from '~/components/Pagination'
import PostPreview from '~/components/PostPreview'

export default {
  components: {
    Pagination,
    PostPreview
  },
  async asyncData ({ $prismic, route, params, error }) {
    const options = {
      pageSize: 10
    }

    if (params.page) {
      const pageNum = parseInt(params.page)
      if (Number.isNaN(pageNum)) {
        error({ statusCode: 404, message: 'Page not found' })
      }
      options.page = pageNum
    }

    let predicates,
      title

    if (params.tag) {
      predicates = $prismic.predicates.at('document.tags', [params.tag])
      title = 'recipes tagged: ' + params.tag
    } else {
      predicates = $prismic.predicates.at('document.type', 'recipe')
      title = 'recipes blog'
    }

    const response = await $prismic.api.query(
      predicates,
      options
    )

    const posts = map(response.results, post => ({
      uid: post.uid,
      url: { name: 'posts-name', params: { name: post.uid } },
      title: post.data.title,
      tags: post.tags
    }))

    return {
      posts,
      pages: {
        total: response.total_pages,
        current: response.page,
        route: {
          params: route.params,
          name: route.name
        }
      },
      title
    }
  },
  head () {
    let title = this.title

    if (this.$route.params.page) {
      title += ' | page ' + this.$route.params.page
    }

    return {
      title
    }
  }
}
