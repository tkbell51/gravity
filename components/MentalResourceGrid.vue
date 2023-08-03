<template>
    <div class="resource__grid">
        <a v-for="(item, index) in items" :key="index" :href="`${item.link}`" class="resource__link" target="_blanky">
            <img :src="require(`~/assets/img/mental-resources/${item.imgSrc}`)" :alt="`${item.imgAlt}`" />
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    link: 'https://suicidepreventionlifeline.org/',
                    imgSrc: 'NSPL_Logo.jpg',
                    imgAlt: 'National Suicide Prevention Logo',
                },
                {
                    link: 'https://www.veteranscrisisline.net/',
                    imgSrc: 'mcl.png',
                    imgAlt: 'Veterans Crisis Line Military Crisis Line',
                },
                {
                    link: 'https://mhanational.org/',
                    imgSrc: 'mha.png',
                    imgAlt: 'Mental Health America',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.resource {
    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 5rem;
        justify-items: center;
        align-items: center;
    }
    &__link {
        width: 20rem;
        img {
            width: 100%;
            transition: all 0.4s;
            &:hover {
                transform: translate(4px, -4px);
                box-shadow: -8px 8px $primary-color;
            }
        }
    }
}
</style>
