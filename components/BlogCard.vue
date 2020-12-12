<template>
  <div :key="article.slug" class="blog-card">
    <div class="blog-card__img">
      <img
        :src="require(`~/assets/img/blog/${article.img}`)"
        :alt="article.alt"
      />
    </div>
    <div class="blog-card__text">
      <h3 class="blog-card__title heading-tertiary">{{ article.title }}</h3>
      <p class="blog-card__sub">{{ article.description }}</p>
      <nuxt-link
        class="blog-card__link"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >Read Article</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.blog-card {
  background: $white;
  border-radius: $border-radius;
  box-shadow: $shadow;
  &__title {
    color: $primary-color;
    margin-bottom: 1rem;
  }
  &__text {
    padding: 2rem;
  }
  &__img {
    overflow: hidden;
    height: 20rem;
    img {
      width: 100%;
    }
  }
  &__link {
    color: $primary-color;
  }
  &__sub {
    font-size: 1.4rem;
  }
}
</style>
