<template>
  <div class="page">
    <div class="overlay"></div>
    <Header />
    <nuxt class="main-content" />
    <Footer />
  </div>
</template>
<script>
import Header from './partials/header'
import Footer from './partials/footer'
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    // eslint-disable-next-line no-undef
    // $(window).scroll(function() {
    //   const header = $(document).scrollTop()
    //   const headerHeight = $('.header').outerHeight()
    //   if (header > headerHeight) {
    //     $('.header').addClass('fixed')
    //   } else {
    //     $('.header').removeClass('fixed')
    //   }
    // })
    // $('.nav__mobile, .overlay').click(function() {
    //   $('.nav__mobile').toggleClass('clicked')
    //   $('.overlay').toggleClass('show')
    //   $('.nav__menu').toggleClass('show')
    //   $('body').toggleClass('overflow')
    // })
    // $('.nav__menu .nav__link, .nav__menu .dropdown__link').click(function(){
    //   console.log("link clicked");
    //   $('.nav__mobile').removeClass('clicked')
    //   $('.overlay').removeClass('show')
    //   $('.nav__menu').removeClass('show')
    //   $('body').removeClass('overflow')
    // })
    // $(window).scroll(function() {
    //   const header = $(document).scrollTop()
    //   const headerHeight = $('.header').outerHeight()
    //   const firstSection = $(
    //     '.main-content section:nth-of-type(1)'
    //   ).outerHeight()
    //   if (header > headerHeight) {
    //     $('.header').addClass('fixed')
    //   } else {
    //     $('.header').removeClass('fixed')
    //   }
    //   if (header > firstSection) {
    //     $('.header').addClass('in-view')
    //   } else {
    //     $('.header').removeClass('in-view')
    //   }
    // })
  }
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
  background: $accent-color;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  height: 45px;
  padding: 0 30px;
  color: #fff;
  font-family: 'Open Sans';
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  will-change: transform;

  &:hover {
    background: darken($accent-color, 5%);
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
}

footer {
  flex-shrink: 0;
}

.main-content {
  flex: 1 0 auto;
}

section {
  padding: 7rem 0;
  @include respond(phone) {
    padding: 3rem 0;
  }
}
.section__testimonials {
  background: $gradient;
  display: flex;
  flex-flow: column;
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
