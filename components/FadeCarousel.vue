<template>
  <div
    class="fade-carousel"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="fade-carousel__slide"
      :class="{ 'fade-carousel__slide--active': index === current }"
      :aria-hidden="index !== current"
    >
      <slot :item="item" :index="index" />
    </div>
  </div>
</template>

<script>
// Autoplaying fade carousel (replaces vue-slick-carousel's fade mode)
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    autoplaySpeed: {
      type: Number,
      default: 7000,
    },
  },
  data() {
    return {
      current: 0,
      paused: false,
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(this.next, this.autoplaySpeed)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  },
  methods: {
    next() {
      if (this.paused || !this.items.length) return
      this.current = (this.current + 1) % this.items.length
    },
  },
}
</script>

<style lang="scss">
.fade-carousel {
  display: grid;

  &__slide {
    grid-area: 1 / 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0s linear 0.5s;

    &--active {
      opacity: 1;
      visibility: visible;
      z-index: 1;
      transition: opacity 0.5s ease;
    }
  }
}
</style>
