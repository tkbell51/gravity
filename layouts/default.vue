<template>
  <div class="page">
    <div class="overlay"></div>
    <Header />
    <nuxt class="main-content" />
    <Footer />
  </div>
</template>
<script>
import Header from './header'
import Footer from './footer'

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    // window.addEventListener('scroll', function() {
    //   const header = document.querySelector('.header')
    //   header.classList.toggle('fixed', window.scrollY > header.scrollHeight)
    //   const firstSection = document.querySelector(
    //     '.main-content section:nth-of-type(1)'
    //   )
    //   header.classList.toggle(
    //     'in-view',
    //     window.scrollY > firstSection.scrollHeight
    //   )
    // })
  },
  methods: {}
}
</script>
<style lang="scss">
html {
  //This defines what 1rem is
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) {
    font-size: 60%; //1rem = 9px, 9/16 = 56.25%
  }

  @include respond(tab-port) {
    font-size: 65%; //1rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12px, 12/16 = 75%
  }
}

body {
  box-sizing: border-box;
  font-family: 'Open Sans';
  line-height: 1.6;
  position: relative;
}

.heading-primary {
  color: $white;
  text-transform: uppercase;
  backface-visibility: hidden;

  display: block;
  font-size: 6rem;
  font-weight: 400;

  @include respond(phone) {
    letter-spacing: 0.2rem;
    font-size: 4rem;
  }
}

.heading-secondary {
  font-size: 4rem;
  font-weight: 700;
  display: inline-block;
  color: $primary-color;
  letter-spacing: 3px;

  @include respond(tab-port) {
    font-size: 3rem;
  }
  @include respond(phone) {
    font-size: 2.5rem;
  }
}

.heading-tertiary {
  font-size: $default-font-size;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

p {
  font-size: $default-font-size;
  margin-bottom: 1rem;
}
a {
  font-size: $default-font-size;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}
.btn {
  display: inline-flex;
  align-items: center;
  // background: darken($accent-color, 5%);
  background-image: $btn-gradient;

  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  height: 4rem;
  padding: 0 2.5rem;
  color: #fff;
  font-family: 'Open Sans';
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;

  &:hover {
    // background: darken($accent-color, 10%);
    background-position: 100px;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
  }

  &.btn-transparent {
    background: transparent;
    border: 1px solid $white;
    &:hover {
      background: darken($accent-color, 5%);
      border: 1px solid darken($accent-color, 5%);
    }
  }

  @include respond(tab-port) {
    height: 35;
  }
}
.swiper {
  &-button-next,
  &-button-prev {
    color: rgba($white, 0.5);
    transition: all 0.1s ease-in;
    &:hover {
      color: $primary-color;
      border-radius: 0;
    }
  }
  &-pagination-bullet {
    border-radius: 0;
    width: 3rem;
    height: 4px;
    background: rgba($white, 0.8);
    &-active {
      background: $accent-color;
    }
  }
}
::selection {
  background-color: $primary-color !important;
  color: $white;
}

.page {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.gcg-border {
  border: 3px solid $accent-color;
  width: 10rem;
  margin-bottom: 2rem;
  @include respond(phone) {
    border: 2px solid $accent-color;
    margin-bottom: 1rem;
  }
}

footer {
  flex-shrink: 0;
}

.main-content {
  flex: 1 0 auto;
  @include respond(tab-port) {
    margin-top: 5rem;
  }
}

section {
  padding: 7rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
}
.section__testimonials {
  background: $gradient;
  padding: 0;
  height: 35rem;
  .container {
    display: flex;
    height: 100%;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: rgba($black, 0.8);
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 0.8;
    visibility: visible;
  }
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;

  @include respond(phone) {
    max-width: 35em;
  }
  @include respond(small-tab) {
    max-width: 44em;
  }

  @include respond(tab-port) {
    max-width: 51em;
  }
  @include respond(tab-mid) {
    max-width: 59em;
  }
  @include respond(tab-land) {
    max-width: 100em;
  }

  @include respond(big-desktop) {
    max-width: 107em;
  }
}
</style>
