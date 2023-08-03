<template>
    <div>
        <PageHeader page-title="Blog" />
        <section class="section__first-blog">
            <div class="container">
                <figure class="first-blog">
                    <img :src="require(`~/assets/img/blog/${firstArticle.img}`)" :alt="firstArticle.alt" />
                    <div class="first-blog__text">
                        <h2 class="first-blog__title heading-tertiary">
                            {{ firstArticle.title }}
                        </h2>
                        <p>{{ firstArticle.description }}</p>
                        <nuxt-link class="first-blog__link" :to="`/blog/${firstArticle.slug}`"
                            >Read Article <span>&rarr;</span></nuxt-link
                        >
                    </div>
                </figure>
            </div>
        </section>
        <section class="section__blog-list">
            <div class="container">
                <div class="blog__grid">
                    <figure v-for="article in articles.slice(1)" :key="article.slug" class="blog-card">
                        <img
                            class="blog-card__img"
                            :src="require(`~/assets/img/blog/${article.img}`)"
                            :alt="article.alt"
                        />

                        <div class="blog-card__text">
                            <h3 class="blog-card__title heading-tertiary">
                                {{ article.title }}
                            </h3>
                            <p class="blog-card__sub">{{ article.description }}</p>
                            <nuxt-link
                                class="blog-card__link"
                                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                                >Read Article <span>&rarr;</span></nuxt-link
                            >
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
    components: {
        PageHeader,
    },
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'previewText', 'img', 'slug', 'alt'])
            .sortBy('createdAt', 'desc')
            .fetch()
        const firstArticle = articles[0]
        return {
            articles,
            firstArticle,
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
.section__first-blog {
    .first-blog {
        display: flex;
        @include respond(tab-port) {
            display: block;
            box-shadow: $shadow;
            border-radius: 6px;
        }
        &__text {
            padding: 2rem;
            background: white;
            margin-left: -8rem;
            align-self: center;
            border-radius: 6px;
            border: 1px solid rgba($primary-color, 0.2);
            @include respond(tab-port) {
                margin: 0 auto;
                border: none;
            }
        }
        &__title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: $primary-color;
        }
        img {
            width: 65%;
            border-radius: 6px;
            box-shadow: $shadow;
            @include respond(tab-port) {
                width: 100%;
                box-shadow: none;
            }
        }
        &__link {
            margin-top: auto;
            color: $primary-color;
            transition: all 0.4s;
            span {
                transition: margin-left 0.4s;
            }
            &:hover {
                & span {
                    margin-left: 1rem;
                }
            }
        }
    }
}
.section__blog-list {
    .blog__grid {
        display: grid;
        // align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        grid-gap: 2rem;
    }
    .blog-card {
        // height: 50rem;
        // width: 100%;
        box-shadow: $shadow;
        transition: $transition;
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        // width: 95%;
        // margin: 0 auto;

        img {
            width: 100%;
        }
        &__text {
            flex: 75%;
            padding: 2rem;
            display: flex;
            gap: 1rem;
            flex-direction: column;
            justify-content: flex-start;

            height: 100%;
            h3 {
                color: $primary-color;
            }
        }
        &__link {
            margin-top: auto;
            color: $primary-color;
            transition: all 0.4s;
            span {
                transition: margin-left 0.4s;
            }
            &:hover {
                & span {
                    margin-left: 1rem;
                }
            }
        }

        &:hover {
            transform: translate(4px, -4px);
            box-shadow: $hover-shadow;
        }
    }
}
</style>
