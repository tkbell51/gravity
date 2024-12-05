<template>
  <ul class="nav__menu">
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/">Home</nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/about">About</nuxt-link>
    </li>
    <li class="nav__item">
      <DropDown />
    </li>
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/blog">Blog</nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link class="nav__link" to="/contact">Contact</nuxt-link>
    </li>
    <li class="nav__item">
      <SimplePractice class="nav__cta" />
    </li>
  </ul>
</template>

<script>
import DropDown from '@/components/DropdownMenu'
import SimplePractice from '@/components/SimplePractice'
export default {
  components: {
    SimplePractice,
    DropDown,
  },
  methods: {
    hideDropdown() {
      this.isVisible = false
    },
  },
}
</script>

<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;
  z-index: 99;
  @include respond(tab-mid) {
    padding: 1rem 5%;
  }
  .logo {
    width: 6rem;
    &:hover {
      cursor: pointer !important;
    }
    @include respond(tab-port) {
      width: 3rem;
      margin-top: 0.8rem;
    }
  }
  &__menu {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }

  &__item {
    text-align: center;
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  &__link {
    &,
    &:link,
    &:visited {
      padding: 0.5em;
      text-transform: uppercase;
      text-decoration: none;
      color: $white;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in;
      border: none;
      background: none;
      font-size: $default-font-size;
      width: 100%;
      text-align: left;

      &:hover,
      &:focus {
        color: $accent-color;
        cursor: pointer;

        @include respond(tab-port) {
          background: $primary-color;
        }
      }
    }
  }
}
.scrolled .nav {
  padding: 1rem 10%;
  @include respond(tab-port) {
    padding: 1rem 5%;
  }
}
@include respond(tab-port) {
  .nav__menu {
    display: none;
  }
}
</style>
