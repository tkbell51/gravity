<template>
    <div class="gallery">
        <figure v-for="(image, index) in images" :key="index" class="gallery__item">
            <img :src="image.pathLong" :alt="image.pathShort" class="gallery__img" />
        </figure>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [],
        }
    },
    mounted() {
        this.importAll(require.context('../assets/img/gallery/', true, /|.jpeg$/))
    },
    methods: {
        importAll(r) {
            r.keys().forEach((key) =>
                this.images.push({
                    pathLong: r(key),
                    pathShort: key.replace(/\.[^/.]+$/, '').replace('./', ''),
                })
            )
        },
    },
}
</script>

<style lang="scss">
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 6px 8px rgba($primary-color, 0.5);
    }
    &__item {
        transition: all 0.2s ease-in;
    }
}
</style>
