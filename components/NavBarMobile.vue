<template>
    <div v-if="showNav" class="mobile-nav">
        <div class="mobile-nav__logo" @click="closeMenu">
            <nuxt-link to="/" class="logo"><Logo /></nuxt-link>
        </div>

        <ul class="mobile-nav__menu">
            <li class="mobile-nav__item" @click="closeMenu">
                <nuxt-link class="mobile-nav__link" to="/">Home</nuxt-link>
            </li>
            <li class="mobile-nav__item" @click="closeMenu">
                <nuxt-link class="mobile-nav__link" to="/about">About</nuxt-link>
            </li>
            <li class="mobile-nav__item">
                <DropDown />
            </li>
            <li class="mobile-nav__item" @click="closeMenu">
                <nuxt-link class="mobile-nav__link" to="/blog">Blog</nuxt-link>
            </li>
            <li class="mobile-nav__item" @click="closeMenu">
                <nuxt-link class="mobile-nav__link" to="/contact">Contact</nuxt-link>
            </li>
            <li class="mobile-nav__item">
                <ul class="mobile-nav__social">
                    <li class="mobile-nav__item" @click="closeMenu">
                        <a class="mobile-nav__link" href="https://www.facebook.com/gravitycounseling/" target="_blank"
                        ><Fab class="mobile-nav__icon" i="facebook"
                        /></a>
                    </li>
                    <li class="mobile-nav__item" @click="closeMenu">
                        <a class="mobile-nav__link" href="https://www.instagram.com/thegravitygroup/" target="_blank"
                        ><Fab class="mobile-nav__icon" i="instagram"
                        /></a>
                    </li>
                    <li class="mobile-nav__item" @click="closeMenu">
                        <a class="mobile-nav__link" href="https://twitter.com/GravityCGroup" target="_blank"
                        ><Fab class="mobile-nav__icon" i="twitter"
                        /></a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import DropDown from '@/components/DropdownMenu'
import Logo from '@/components/LogoFull'
import Fab from '@/components/Fab'
export default {
    components: {
        DropDown,
        Logo,
        Fab,
    },
    // eslint-disable-next-line
  props: ['showNav'],

    methods: {
        closeMenu() {
            this.$parent.toggleMenu()
        },
    },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
    position: fixed;
    background: $dark-grey;
    z-index: 9;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 515px;
    width: 100%;
    padding-top: 5rem;
    overflow-y: auto;
    .logo {
        display: block;
        width: 20rem;
        margin: 0 auto;
    }
    &__menu {
        // display: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    &__item {
    }
    &__link {
        &,
        &:link,
        &:visited {
            text-decoration: none;
            font-size: $default-font-size;
            color: $white;
            display: block;
            text-align: left;
            padding: 2rem 4rem;
        }
        &:hover,
        &:focus {
            background: $primary-color;
        }
    }
    &__link &__cta {
        margin-bottom: 0;
    }
    &__social {
        display: flex;
        list-style: none;
        justify-content: center;
    }
}
</style>
