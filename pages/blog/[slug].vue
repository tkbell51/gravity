<template>
    <article>
        <div class="article__text">
            <div class="container">
                <div class="article__top">
                    <h1 class="article__title">{{ article.title }}</h1>
                    <div class="article__meta">
                        <div class="article__avatar">
                            <nuxt-img v-if="article.author.img" :src="`/img/${article.author.img}`" />
                        </div>
                        <div>
                            <em>written by</em>

                            <p>
                                {{ article.author.name }}
                            </p>
                        </div>
                        <div>
                            <em>published on</em>
                            <p>{{ formatDate(article.date) }}</p>
                        </div>
                    </div>
                </div>
                <div class="article__img">
                    <img :src="blogImages[article.img]" :alt="article.alt" />
                </div>
                <div class="article__grid">
                    <div>
                        <ul class="article__social--list">
                            <li v-for="network in shareLinks" :key="network.name" class="article__social--item">
                                <a
                                    class="article__social--link"
                                    :href="network.href"
                                    target="_blank"
                                    rel="noopener"
                                    :title="`Share on ${network.name}`"
                                >
                                    <Fab :i="network.name" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ContentRenderer class="nuxt-content" :value="article" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <section class="section__pagination" >
      <div class="container">
        <div class="pagination">
          <NuxtLink
            v-if="prevBlog"
            :to="{ name: 'blog-slug', params: { slug: prevBlog.slug } }"
            class="prev heading-secondary text-right"
          >
            {{ prevBlog.title }}
          </NuxtLink>
          <div class="pagination__logo">
            <Logo />
          </div>
          <NuxtLink
            v-if="nextBlog"
            :to="{ name: 'blog-slug', params: { slug: nextBlog.slug } }"
            class="next heading-secondary"
          >
            {{ nextBlog.title }}
          </NuxtLink>
        </div>
      </div>
    </section> -->
    </article>
</template>

<script setup>
import Fab from '@/components/Fab.vue'
// import Logo from '@/components/Logo.vue'

definePageMeta({ layout: 'blog' })

const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

const { data: article } = await useAsyncData(`article-${route.params.slug}`, () =>
    queryCollection('articles').path(`/articles/${route.params.slug}`).first()
)
if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const articleUrl = computed(() => `${siteUrl}/blog/${route.params.slug}`)
const imageUrl = computed(() => siteUrl + blogImages[article.value.img])

const shareLinks = computed(() => {
    const url = encodeURIComponent(articleUrl.value)
    const title = encodeURIComponent(article.value.title)
    return [
        { name: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
        { name: 'twitter', href: `https://twitter.com/intent/tweet?text=${title}&url=${url}` },
        { name: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    ]
})

usePageSeo(() => ({
    title: article.value.title,
    description: article.value.description,
    author: article.value.author.name,
    image: imageUrl.value,
}))

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: () =>
                JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'NewsArticle',
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': articleUrl.value,
                    },
                    headline: article.value.title,
                    description: article.value.description,
                    image: imageUrl.value,
                    author: {
                        '@type': 'Person',
                        name: article.value.author.name,
                    },
                    datePublished: article.value.date,
                    publisher: {
                        '@type': 'Organization',
                        name: 'Gravity Counseling Group',
                    },
                }),
        },
    ],
})
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
.section__pagination {
    padding: 2rem 0;
    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        @include respond(tab-small) {
            display: block;
        }

        &__logo {
            width: 8rem;
            @include respond(tab-small) {
                display: none;
            }
        }

        .prev,
        .next {
            font-size: 2rem;
            line-height: 1;
            width: 45%;
            &:hover .is-outline {
                color: $black;
            }
        }

        .is-outline {
            transition: $transition;
        }
    }
}
</style>
