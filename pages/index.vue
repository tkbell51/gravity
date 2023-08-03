<template>
    <div>
        <Hero />
        <section class="section__help">
            <div class="container">
                <div class="help__header">
                    <h3 class="heading-tertiary">Kervin K. Searles, LPC</h3>
                    <h2 class="heading-secondary">Lost? Overwhelmed? Need Help?</h2>
                </div>
                <div class="help">
                    <div class="help__img">
                        <nuxt-img src="img/kervin-searles.png" alt="Kervin Searles" />
                    </div>
                    <div class="help__text">
                        <p>
                            I got you! It has been proven therapy can help someone like you. Someone who may be going
                            through a crisis, breakup, remembering past trauma, or just feeling anxious, sad, and angry.
                            Finding the right therapist and having a great relationship with them is a vital component
                            in reaching the goals you will set. More important than orientation or technique is the
                            therapeutic alliance you will have with your therapist.
                        </p>
                        <p>
                            My alliance with you will ensure there is a connection, an understanding of goals, and how
                            we are going to go about trying to reach those goals. I will give you the upmost respect,
                            provide a listening ear to gain understanding of your life, issue unbiased honesty, and
                            share evidenced-based techniques you can implement daily. Starting today, book an
                            appointment and take one hour each week to focus completely on yourself.
                        </p>

                        <p>
                            It is estimated that only about 17% of US adults are considered to be in a state of optimal
                            mental health. Improve your mental health with therapy. Therapy happens when we address what
                            is preventing us from reaching our goals. If you want to live your best life, sit with a
                            therapist...the conversation is different.
                        </p>
                        <SimplePractice />
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section__logo-cta">
      <div class="container">
        <div class="logo-cta__box">
          <img
            src="img/gravity-counsel-full.svg"
            alt="Logo"
            class="logo-cta__logo"
          />
        </div>
      </div>
    </section> -->
        <section class="section__services">
            <div class="container">
                <h2 class="heading-secondary">Services</h2>

                <ServicesGrid />

                <nuxt-link class="btn" to="services">View Services</nuxt-link>
            </div>
        </section>
        <!-- <section class="section__about">
      <div class="container">
        <div class="about__box">
          <div class="about__img--box">
            <img
              src="img/kervin-searles.png"
              alt="Kervin Searles smiling"
              class="about__img"
            />
          </div>
          <div class="about__text">
            <h3 class="heading-tertiary">Welcome Note</h3>
            <h2 class="heading-secondary">Kervin K. Searles, LPC</h2>

            <p>
              It is estimated that only about 17% of US adults are considered to
              be in a state of optimal mental health. Therapy happens when we
              address what is preventing us from reaching our goals. If you want
              to live your best life, sit with a therapist...the conversation is
              different.
            </p>
            <nuxt-link class="about__phone" to="tel:864-724-9187"
              ><Fas class="about__icon" i="phone" />(864) 724-9187</nuxt-link
            >
          </div>
        </div>
      </div>
    </section> -->
        <FamousQuotes />

        <section class="section__online-cta">
            <div class="container">
                <div class="online__box">
                    <div class="online__text">
                        <h2 class="heading-secondary">Online Mental Health Resources</h2>
                        <MentalResourceGrid />
                    </div>
                </div>
            </div>
        </section>
        <section class="section__gallery">
            <div class="container">
                <div>
                    <a href="https://www.instagram.com/gravitycounselinggroup/" target="_blank" class="gallery__link"
                    >@gravitycounselinggroup</a
                    >
                </div>
                <Gallery />
            </div>
        </section>
        <section class="section__blog">
            <div class="container">
                <h2 class="heading-secondary">Latest Articles</h2>
                <div class="blog__grid">
                    <BlogCard v-for="article in articles" :key="article.slug" :article="article" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// import Fas from '@/components/Fas'
import SimplePractice from '@/components/SimplePractice'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import MentalResourceGrid from '@/components/MentalResourceGrid'
import Hero from '@/components/Hero'
import BlogCard from '@/components/BlogCard'
import FamousQuotes from '@/components/FamousQuotes'

export default {
    components: {
        Hero,
        SimplePractice,
        // Fas,
        ServicesGrid,
        FamousQuotes,
        Gallery,
        MentalResourceGrid,
        BlogCard,
    },
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'description', 'img', 'slug', 'alt'])
            .sortBy('createdAt', 'desc')
            .limit(3)
            .fetch()

        return {
            articles,
        }
    },
    head() {
        return this.$seo({
            title: 'Home',
        })
    },
}
</script>

<style lang="scss">
.section {
    &__help {
        .help {
            display: flex;
            @include respond(tab-port) {
                flex-direction: column;
            }
            &__header {
                text-align: center;
                margin-bottom: 2rem;
            }
            &__img {
                width: 35%;
                margin-right: 3rem;
                @include respond(tab-port) {
                    width: 61%;
                    margin: 2rem auto 4rem;
                    display: block;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    box-shadow: -2rem 2rem #0b4c9a;
                    border-radius: 1rem;
                    @include respond(tab-port) {
                        box-shadow: -1rem 1rem #0b4c9a;
                    }
                }
            }
            &__text {
                width: 65%;
                // text-align: center;

                .heading-primary {
                    color: $primary-color;
                }
                @include respond(tab-port) {
                    width: 80%;
                    margin: 0 auto;
                }
                @include respond(phone) {
                    width: 100%;
                }
            }
        }
    }
    &__logo-cta {
        position: relative;
        .logo-cta {
            &__box {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            &__logo {
                width: 75%;
                height: 100%;
                @include respond(phone) {
                    width: 100%;
                }
            }
            &__text {
                position: relative;
                z-index: 20;

                .heading-tertiary {
                    color: $white;
                }
                .heading-secondary {
                    color: $accent-color;
                }
            }
        }
    }

    &__services {
        .heading-secondary,
        .btn {
            margin-top: 3rem;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &__about {
        .about {
            &__box {
                display: flex;
                justify-content: center;
                @include respond(phone) {
                    flex-direction: column;
                    text-align: center;
                }
            }
            &__img {
                width: 90%;
                @include respond(phone) {
                    width: 100%;
                }
            }
            &__img--box {
                flex: 45%;
                text-align: right;
                margin-right: 5rem;
                @include respond(phone) {
                    margin-right: 0;
                }
                img {
                    box-shadow: $shadow;
                }
            }
            &__text {
                flex: 65%;
            }
            &__phone {
                font-size: 3rem;
                &,
                &:link,
                &:visited {
                    text-decoration: none;
                    color: $primary-color;
                    font-weight: bold;
                }
                @include respond(phone) {
                    font-size: $default-font-size;
                }
            }
            &__icon {
                color: $accent-color;
                margin-right: 1rem;
            }
        }
    }

    &__online-cta {
        background: #efefef;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        // height: 47rem;
        // padding-left: 10%;
        // padding-right: 10%;
        // display: flex;
        // align-items: center;
        text-align: center;

        .online__text {
            color: $white;

            .heading-secondary {
                // color: $white;
                margin-bottom: 2rem;
            }
            .btn {
                margin-top: 2rem;
            }
        }
    }
    &__gallery {
        .gallery__link {
            color: $primary-color;
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 2rem;
            display: inline-block;
            transition: all 0.2s;
            &:hover {
                color: $accent-color;
            }
        }
    }
    &__blog-row {
        .blog-row__grid {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

            grid-gap: 3rem;
        }
    }
    &__blog {
        .blog__grid {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

            grid-gap: 3rem;
        }
    }
}
</style>
