<template>
  <div class="container">
    <article>
      <h1 class="title">
        {{ $prismic.asText(title) }}
      </h1>

      <div class="date">
        {{ date }}
      </div>

      <div class="note">
        <prismic-rich-text :field="notes" />
      </div>

      <h2>
        Ingredients
      </h2>
      <prismic-rich-text :field="ingredients" />

      <h2>
        Instructions
      </h2>
      <prismic-rich-text :field="instructions" />

      <hr>

      <h3>
        Tags
      </h3>
      <Tags :tags="tags" :post-id="uid" />
    </article>
  </div>
</template>

<script>
import moment from 'moment'
import Tags from '~/components/Tags'
export default {
  components: {
    Tags
  },
  async asyncData ({ $prismic, params, error }) {
    try {
      const response = await $prismic.api.getByUID('recipe', params.name)
      const data = response.data
      return {
        title: data.title,
        date: moment(data.date).format('MMMM Do, YYYY'),
        notes: data.notes,
        ingredients: data.ingredients,
        instructions: data.instructions,
        tags: response.tags,
        uid: response.uid
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
