<template>
    <section class="section__testimonials">
        <VueSlickCarousel v-bind="quoteOptions">
            <div v-for="(item, index) in quoteSlides" :key="index" :title="item.name" class="testimonial">
                <div class="testimonial__container">
                    <p class="testimonial__quote">
                        {{ item.quote }}
                    </p>
                    <p class="testimonial__name">- {{ item.name }}</p>
                </div>
            </div>
            <div slot="pagination" class="swiper-pagination"></div>
        </VueSlickCarousel>
    </section>
</template>

<script>
// optional style for arrows & dots
// import Tab from '@/components/Tab'
// import Tabs from '@/components/Tabs'
export default {
    components: {
        // Tab,
        // Tabs
    },

    data() {
        return {
            quoteOptions: {
                autoplay: true,
                fade: true,
                autoplaySpeed: 7000,
            },
            quoteSlides: [],
        }
    },
    fetch() {
        this.quoteSlides = [
            {
                quote: "A lot of people you think you know, you don't know, until you find out you don't know then it may be too late to know.",
                name: 'Kenneth B. Clark',
            },
            {
                quote: 'There is more on the surface than what our eyes can see',
                name: 'Aaron T. Beck',
            },
            {
                quote: "For every problem there is a solution. The problem is...we don't like the solution.",
                name: 'Kervin K. Searles',
            },
            {
                quote: 'It is not primarily our physical selves that limit us but rather our mindset about our physical limits.',
                name: 'Ellen J. Langer',
            },
        ]
    },
}
</script>

<style lang="scss">
.section__testimonials {
    padding-bottom: 0;
    & > div {
        height: inherit;
        position: relative;
    }
    .tabs__header {
        position: absolute;
        display: flex;
        list-style: none;
        transform: translateX(-50%);
        font-size: $default-font-size;
        bottom: 10px;
        left: 50%;
        z-index: 10;

        cursor: pointer;
        li {
            cursor: pointer;
            display: inline-block;
            padding: 0.5rem 1rem;
            font-size: 0;
            border-radius: 5px;
            white-space: nowrap;
            transition: all 0.2s ease-in;
            color: transparent;
            &:before {
                content: '';
                height: 10px;
                width: 10px;
                background-color: $white;
                border-radius: 50%;
                display: inline-block;
            }

            &:not(:last-child) {
                margin-right: 2rem;
            }
            &:hover {
                background: rgba($white, 0.2);
            }
            &.tab__selected:before {
                background-color: $accent-color;
            }
        }
    }

    .testimonial {
        // height: 35rem;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        position: relative;
        background: $gradient;
        height: 35rem;
        // padding: 0 15%;

        &:before,
        &:after {
            position: absolute;
            font-family: sans-serif;
            font-size: calc(40rem + 1vw);
            color: rgba($white, 0.2);
        }
        &:before {
            content: '\201f';
            left: 5%;
            top: 75%;
            transform: translateY(-50%);
        }
        &:after {
            content: '\201d';
            right: 5%;
            top: 75%;
            transform: translateY(-50%);
        }
        &__container {
            @include absCenter;
        }

        &__quote {
            text-align: center;
            font-family: 'Nanum Myeongjo';
            // width: 90%;
            font-size: calc(2rem + 1vw);
            margin: 0 auto;
            color: $white;
        }
        &__name {
            font-size: $default-font-size;
            font-style: italic;
            text-align: center;
            color: $white;
        }
    }
}
</style>
