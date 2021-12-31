<template>
  <article>
    <div class="article__text">
      <div class="container">
        <div class="article__top">
          <h1 class="article__title">{{ article.title }}</h1>
          <div class="article__meta">
            <div class="article__avatar">
              <img
                src="@/assets/img/kervin-searles.png"
                alt="Kervin Searles smiling"
              />
            </div>
            <div>
              <em>written by</em>

              <p>Kervin K. Searles, LPC</p>
            </div>
            <div>
              <em>posted on</em>
              <p>{{ $formatDate(article.createdAt) }}</p>
            </div>
          </div>
        </div>
        <div class="article__img">
          <img
            :src="require(`~/assets/img/blog/${article.img}`)"
            :alt="article.alt"
          />
        </div>
        <div class="article__grid">
          <div>
            <ul class="article__social--list">
              <li class="article__social--item">
                <ShareNetwork
                  class="article__social--link"
                  network="facebook"
                  :url="`https://gravitycounselinggroup.com/blog/${article.slug}`"
                  :title="article.title"
                  :description="article.description"
                >
                  <Fab i="facebook" />
                </ShareNetwork>
              </li>

              <li class="article__social--item">
                <ShareNetwork
                  class="article__social--link"
                  network="twitter"
                  :url="`https://gravitycounselinggroup.com/blog/${article.slug}`"
                  :title="article.title"
                >
                  <Fab i="twitter"
                /></ShareNetwork>
              </li>
              <li class="article__social--item">
                <ShareNetwork
                  class="article__social--link"
                  network="linkedin"
                  :url="`https://gravitycounselinggroup.com/blog/${article.slug}`"
                >
                  <Fab i="linkedin"
                /></ShareNetwork>
              </li>
            </ul>
          </div>
          <div>
            <nuxt-content :document="article" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Fab from '@/components/Fab'
export default {
  components: {
    Fab,
  },
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  head() {
    return this.$seo({
      title: this.article.title,
      description: this.article.description,
      author: 'Kervin K. Searles, LPC',
      image: `/${this.article.img}`,
    })
  },
  computed: {
    backgroundURL() {
      return require(`~/assets/img/blog/${this.article.img}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}
.article {
  &__top {
    margin-bottom: 2rem;
  }
  &__title {
    text-align: center;
    font-size: 8rem;
    @include respond(phone) {
      font-size: 4rem;
    }
  }
  &__meta {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: left;
    div {
      margin: 0 1rem;
      em {
        color: #546e7a;
        display: inline-block;
        font-size: 1.3rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: bold;
        white-space: nowrap;
      }
    }
  }
  &__avatar {
    height: 55px;
    width: 55px;
    img {
      height: auto;
      width: 100%;
      border-radius: 50%;
    }
  }
  &__bg {
    height: 60rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__grid {
    width: 80%;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 8rem 1fr;
    grid-gap: 1rem;
    @include respond(phone) {
      grid-template-columns: 1fr;
      & > div:first-of-type {
        order: 2;
      }
    }
  }
  &__social {
    &--list {
      list-style: none;
      margin-top: 2rem;
      @include respond(phone) {
        display: flex;
        li {
          margin: 1rem;
        }
      }
    }
    &--item {
      // text-align: center;
      margin-bottom: 2rem;
    }
    &--link {
      svg {
        font-size: 3rem;
        color: $primary-color;
        transition: all 0.3s ease;
      }
      &:hover svg {
        color: $accent-color;
      }
    }
  }
  &__img {
    width: 100%;
    img {
      width: inherit;
    }
  }
}
</style>
