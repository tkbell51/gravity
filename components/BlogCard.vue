<template>
  <figure :key="article.slug" class="blog-card">
    <img class="blog-card__img" :src="backgroundURL" :alt="article.alt" />

    <div class="blog-card__text">
      <h3 class="blog-card__title heading-tertiary">{{ article.title }}</h3>
      <!-- <p class="blog-card__sub">{{ article.description }}</p> -->
      <nuxt-link
        class="blog-card__link"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >Read Article <span>&rarr;</span></nuxt-link
      >
    </div>
  </figure>
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
      return `img/blog/${this.article.img}`
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-card {
  border-radius: $border-radius;
  box-shadow: $shadow;
  position: relative;
  overflow: hidden;
  transition: $transition;
  &__img {
    width: 100%;
    filter: grayscale(1);
    transition: all 0.4s;
    @include respond(tab-port) {
      filter: none;
    }
  }
  &__title {
    margin: 1rem 0;
  }
  &__text {
    padding: 2rem;
  }

  &__link {
    color: $accent-color;
    transition: all 0.4s;
    span {
      transition: color 0.1s, margin-left 0.4s;
    }
    &:hover {
      color: $primary-color;
      & span {
        margin-left: 1rem;
      }
    }
  }
  &__sub {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 56.25em) {
    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px $primary-color;
      & .blog-card__img {
        filter: none;
      }
    }
  }
}
</style>
