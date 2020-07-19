<template>
  <div class="container">
    <article>
      <h1 class="title">
        {{ $prismic.asText(title) }}
      </h1>

      <div class="date">
        {{ date }}
      </div>

      <h2>
        Ingredients
      </h2>
      <prismic-rich-text :field="ingredients" />

      <h2>
        Instructions
      </h2>
      <prismic-rich-text :field="instructions" />
    </article>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  async asyncData ({ route, $prismic, error }) {
    try {
      const response = await $prismic.api.getByUID('recipe', route.params.pathMatch)
      const data = response.data
      return {
        title: data.title,
        date: moment(data.date).format('MMMM Do, YYYY'),
        ingredients: data.ingredients,
        instructions: data.instructions
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
