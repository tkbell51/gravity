<template>
    <div ref="dropdown" class="dropdown" @click="toggleDropdown">
        <button class="nav__btn">SERVICES <Fas class="nav__icon" :class="{ open: isVisible }" i="caret-down" /></button>
        <transition name="dropdown-fade">
            <ul v-if="isVisible" class="dropdown__menu">
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/individual-therapy">Individual Therapy</nuxt-link>
                </li>
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/couples-therapy">Couples Therapy</nuxt-link>
                </li>
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/teletherapy">Teletherapy</nuxt-link>
                </li>
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/anger-management">Anger Management</nuxt-link>
                </li>
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/support-groups">Support Groups</nuxt-link>
                </li>
                <li class="dropdown__item" @click="emit('navigate')">
                    <nuxt-link class="dropdown__link" to="/services/workshops-presentations"
                    >Workshops &amp; Presentations</nuxt-link
                    >
                </li>
            </ul>
        </transition>
    </div>
</template>

<script setup>
import Fas from '@/components/Fas.vue'

const emit = defineEmits(['navigate'])

const isVisible = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
    isVisible.value = !isVisible.value
}

const hideOnClickOutside = (event) => {
    if (!dropdown.value?.contains(event.target)) {
        isVisible.value = false
    }
}

onMounted(() => document.addEventListener('click', hideOnClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', hideOnClickOutside))
</script>

<style lang="scss" scope>
.nav__btn {
    padding: 0.5em;
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

    @include respond(tab-port) {
        text-decoration: none;
        font-size: $default-font-size;
        display: block;
        text-align: left;
        padding: 2rem 4rem;
    }

    &:hover,
    &:focus {
        color: $accent-color;
        cursor: pointer;

        @include respond(tab-port) {
            background: $primary-color;
        }
    }
}
.nav__icon {
    margin-left: 3px;
    &.open {
        transform: rotate(180deg);
    }
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

    &__menu {
        border-radius: 10px;
        overflow: hidden;
        position: absolute;
        z-index: 40;
        list-style-type: none;
        background: $white;
        box-shadow: 0px 3px 6px rgba($black, 0.5);
        width: 24rem;

        @include respond(tab-port) {
            position: relative;
            width: 100%;
            box-shadow: none;
            background: lighten($primary-color, 10%);
        }
    }

    &__item {
        margin: 0;
    }

    &__link {
        &,
        &:link,
        &:visited {
            text-decoration: none;
            font-size: $default-font-size;
            color: $black;
            display: block;
            text-align: left;
            padding: 1rem 4rem;
            @include respond(tab-port) {
                color: $white;
            }
        }
        &:hover,
        &:focus {
            background: $primary-color;
            color: $white;
            border: 1px solid $primary-color;

            @include respond(tab-port) {
                color: $accent-color;
            }
        }
    }
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>
