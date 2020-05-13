<template>
  <div class="blog-card">
    <div
      class="blog-card__img"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    ></div>
    <div class="blog-card__text">
      <p class="blog-card__date">Date</p>
      <h3 class="blog-card__title heading-tertiary">{{ title }}</h3>
      <p class="blog-card__text">{{ previewText }}</p>
      <nuxt-link class="blog-card__link" to="#">Read Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['thumbnail', 'imgAlt', 'title', 'previewText', 'blogLink']
}
</script>

<style lang="scss">
.blog-card {
  background: $white;
  border-radius: 3px;
  box-shadow: $shadow;
  padding: 2rem;
  &__img {
    width: 100%;
    height: 4rem;
    background-position: center;
    background-size: cover;
  }
}
</style>
