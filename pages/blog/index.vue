<template>
  <div>
    <PageHeader page-title="Blog" />

    <section class="section__blog">
      <div class="container">
        <div class="blog__grid">
          <BlogCard
            v-for="article in articles"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    BlogCard,
    PageHeader,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'previewText', 'img', 'slug', 'alt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  head() {
    return this.$seo({
      title: 'Blog',
    })
  },
}
</script>

<style lang="scss" scoped>
.section__blog {
  .blog__grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

    grid-gap: 3rem;
  }
}
</style>
