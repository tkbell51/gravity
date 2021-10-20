<template>
  <div
    :key="article.slug"
    class="blog-card"
    :style="{
      background: `center / contain no-repeat linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.9)),
        url(${backgroundURL})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="blog-card__text">
      <h3 class="blog-card__title heading-tertiary">{{ article.title }}</h3>
      <!-- <p class="blog-card__sub">{{ article.description }}</p> -->
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
  computed: {
    backgroundURL() {
      return require(`~/assets/img/blog/${this.article.img}`)
    },
  },
}
</script>

<style lang="scss">
.blog-card {
  border-radius: $border-radius;
  box-shadow: $shadow;
  height: 30rem;
  background-blend-mode: luminosity;
  position: relative;
  &__title {
    color: $white;
    margin-bottom: 1rem;
  }
  &__text {
    position: absolute;
    bottom: 0;
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
    color: $accent-color;
    transition: all 0.4s;
    &:hover {
      color: $white;
    }
  }
  &__sub {
    font-size: 1.4rem;
  }
}
</style>
