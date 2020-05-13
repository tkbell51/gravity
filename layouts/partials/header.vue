<template>
  <header class="header">
    <!-- <SocialRow /> -->

    <nav class="nav">
      <nuxt-link to="/" class="logo"><Logo /></nuxt-link>
      <ul class="nav__menu">
        <li class="nav__item"  @click="closeMenu">
          <nuxt-link class="nav__link" to="/">Home</nuxt-link>
        </li>
        <li class="nav__item" @click="closeMenu">
          <nuxt-link class="nav__link" to="/about">About</nuxt-link>
        </li>
        <li class="nav__item">
          <div
            :class="'dropdown ' + active"
            @mouseover="active = 'active'"
            @mouseleave="active = ''"
            @click="showDropdown = !showDropdown">
            <button class="nav__btn">
              Services <Fas class="nav__icon" i="caret-down" />
            </button>
            <ul class="dropdown__menu">
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link
                  class="dropdown__link"
                  to="/services/individual-therapy">Individual Therapy</nuxt-link>
              </li>
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link class="dropdown__link" to="/services/couples-therapy">Couples Therapy</nuxt-link>
              </li>
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link class="dropdown__link" to="/services/teletherapy">Teletherapy</nuxt-link>
              </li>
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link
                  class="dropdown__link"
                  to="/services/anger-management">Anger Management</nuxt-link>
              </li>
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link class="dropdown__link" to="/services/support-groups">Support Groups</nuxt-link>
              </li>
              <li class="dropdown__item" @click="closeMenu">
                <nuxt-link class="dropdown__link" to="/services/workshops-presentations">Workshops &amp; Presentations</nuxt-link>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav__item" @click="closeMenu">
          <nuxt-link class="nav__link" to="/contact">Contact</nuxt-link>
        </li>
        <!-- <li class="nav__item">
            <nuxt-link class="nav__link" to="blog">Blog</nuxt-link>
          </li> -->
        <li class="nav__item" @click="closeMenu">
          <SimplePractice class="nav__cta" />
        </li>
      </ul>
      <div class="nav__mobile" @click='showMenu'>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script>
import SimplePractice from '~/components/SimplePractice'
import Logo from '~/components/Logo'
import SocialRow from '~/components/SocialRow'
import Fas from '@/components/Fas'
export default {
  components: {
    Logo,
    SocialRow,
    SimplePractice,
    Fas
  },
  data() {
    return {
      active: '',
      showDropdown: false,

    }
  },
  methods: {
    showMenu() {
      var navMobile = document.querySelector('.nav__mobile');
      var hamMenu = document.querySelector('.nav__menu');
      var overlay = document.querySelector('.overlay');
      var body = document.querySelector('body');
        hamMenu.classList.toggle('show');
      overlay.classList.toggle('show');
      navMobile.classList.toggle('clicked');
      body.classList.toggle('overflow');
    },
    closeMenu() {
      var navMobile = document.querySelector('.nav__mobile');
      var hamMenu = document.querySelector('.nav__menu');
      var overlay = document.querySelector('.overlay');
      var body = document.querySelector('body');
        hamMenu.classList.remove('show');
      overlay.classList.remove('show');
      navMobile.classList.remove('clicked');
      body.classList.remove('overflow');
      }

  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;

  @include respond(tab-port) {
    position: relative;
  }

  // background: $tertiary-color;
  // background: $white;
  &.fixed {
    background: $white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
    transform: translate(0, -200px);
    @include respond(tab-port) {
      position: relative;
      opacity: 1;
    }
  }
  &.in-view {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    transform: translate(0, 0);
    .nav .logo {
      width: 8rem;
    }
    .nav__link,
    .nav__btn {
      &,
      &:link,
      &:visited {
        color: $primary-color;
      }
    }
  }

  .nav {
    width: 100%;
    // background: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 100%;
    padding: 0 10%;
    z-index: 99;
    // box-shadow: 0px 4px 4px rgba($black, 0.4);
    @include respond(tab-mid) {
      padding: 0 3%;
    }
    .logo {
      width: 9rem;
      &:hover {
        cursor: pointer !important;
      }
    }
    &__menu {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style-type: none;

      @include respond(tab-port) {
        display: none;
        background: $dark-grey;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        z-index: 9;
        top: 0;
        right: 0;
        height: 100%;
        max-width: 515px;
        width: 100%;
        padding: 100px 40px 60px 40px;
        overflow-y: auto;
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-transition: transform 0.55s
          cubic-bezier(0.785, 0.135, 0.15, 0.86);
        -moz-transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        -o-transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &.show {
          display: block;
          -webkit-transform: translateX(0px);
          -moz-transform: translateX(0px);
          -ms-transform: translateX(0px);
          -o-transform: translateX(0px);
          transform: translateX(0px);
          .nav__item {
            -webkit-transform: translateX(0px);
            -moz-transform: translateX(0px);
            -ms-transform: translateX(0px);
            -o-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1;
          }
          .nav__link,
          .nav__btn {
            &,
            &:link,
            &:visited {
              color: $white;
            }
          }

          .dropdown__menu {
            display: none;
            position: relative;
            box-shadow: none;
            border-radius: none;
            background: inherit;
            width: inherit;
          }
          .dropdown__item {
            background: lighten($primary-color, 10%);
          }
          .dropdown__link {
            &,
            &:link,
            &:visited {
              text-transform: uppercase;
              text-decoration: none;
              font-weight: bold;
              color: $white;
              display: block;
              padding: 1.5rem 0;
              padding-left: 5rem;
            }
            &:hover,
            &:focus {
              background: $primary-color;
              color: $white;
            }
          }
        }
      }
      @include respond(phone) {
        padding: 120px 90px 70px 90px;
      }
    }

    &__item {
      text-align: center;
      &:not(:last-child) {
        margin-right: 2rem;
        @include respond(tab-port) {
          margin-right: 0;
        }
      }
      @include respond(tab-port) {
        text-align: left;
        -webkit-transform: translateX(40px);
        -moz-transform: translateX(40px);
        -ms-transform: translateX(40px);
        -o-transform: translateX(40px);
        transform: translateX(40px);
        opacity: 0;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dropdown {
        position: relative;
        &:hover,
        &:focus {
          color: $accent-color;
          cursor: pointer !important;

          @include respond(phone) {
            background: $primary-color;
          }
        }

        &:hover .dropdown__menu {
          display: block;
        }

        &:hover .nav__icon {
          transform: rotate(180deg);
        }

        &__menu {
          display: none;
          position: absolute;
          z-index: 40;
          list-style-type: none;
          background: $white;
          box-shadow: 0px 3px 6px rgba($black, 0.5);
          width: 24rem;
        }
        &__item {
        }
        &__link {
          &,
          &:link,
          &:visited {
            text-decoration: none;
            font-size: $default-font-size;
            color: $black;
            display: block;
            padding: 1.5rem 0;
          }
          &:hover,
          &:focus {
            background: $primary-color;
            color: $white;
          }
        }
      }
    }

    &__link,
    &__btn {
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
          cursor: pointer !important;

          @include respond(tab-port) {
            background: $primary-color;
          }
        }
        .nav__icon {
          margin-left: 3px;
        }
        @include respond(tab-port) {
          color: $white;
          display: block;
          border-bottom: 1px solid darken($dark-tertiary, 10%);
          padding: 2rem 0;
          padding-left: 5rem;
        }
      }
    }
    &__cta {
      @include respond(tab-port) {
        display: none;
      }
    }
    &__mobile {
      display: none;
      width: 50px;
      height: 50px;
      position: fixed;
      top: 20px;
      right: 20px;
      border-radius: 4px;
      z-index: 10;
      &:hover {
        cursor: pointer;
      }

      span {
        position: relative;
        margin-top: 9px;
        margin-bottom: 9px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -1.5px;
        &,
        &:before,
        &:after {
          display: block;
          width: 30px;
          height: 4px;
          background-color: $primary-color;
          outline: 1px solid transparent;
          -webkit-transition-property: background-color, -webkit-transform;
          -moz-transition-property: background-color, -moz-transform;
          -o-transition-property: background-color, -o-transform;
          transition-property: background-color, transform;
          -webkit-transition-duration: 0.3s;
          -moz-transition-duration: 0.3s;
          -o-transition-duration: 0.3s;
          transition-duration: 0.3s;
        }
        &:before,
        &:after {
          position: absolute;
          content: '';
        }
        &:before {
          top: -9px;
        }
        &:after {
          top: 9px;
        }
      }
      &.clicked span {
        background-color: transparent;
        &::before {
          -webkit-transform: translateY(9px) rotate(45deg);
          -moz-transform: translateY(9px) rotate(45deg);
          -ms-transform: translateY(9px) rotate(45deg);
          -o-transform: translateY(9px) rotate(45deg);
          transform: translateY(9px) rotate(45deg);
        }
        &::after {
          -webkit-transform: translateY(-9px) rotate(-45deg);
          -moz-transform: translateY(-9px) rotate(-45deg);
          -ms-transform: translateY(-9px) rotate(-45deg);
          -o-transform: translateY(-9px) rotate(-45deg);
          transform: translateY(-9px) rotate(-45deg);
        }
        &::before,
        &::after {
          background-color: $white;
        }
      }

      @include respond(tab-port) {
        display: block;
        position: relative;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
