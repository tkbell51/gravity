<template>
  <nuxt-link class="services" :to="`${serviceLink}`">
    <div class="services__icon--box">
      <Fas class="services__icon" :i="`${serviceIcon}`" />
    </div>
    <div class="services__text">
      <h3 class="services__title heading-tertiary">
        {{ serviceTitle }}
      </h3>

      <!-- <p class="services__description">
        {{ serviceDescription }}
      </p> -->
    </div>
  </nuxt-link>
</template>

<script>
import Fas from '@/components/Fas'
export default {
  components: {
    Fas
  },
  props: {
    serviceLink: {
      type: String,
      default: '/services'
    },
    serviceIcon: {
      type: String,
      default: 'user-friends'
    },
    serviceTitle: {
      type: String,
      default: 'Service Title'
    },
    serviceDescription: {
      type: String,
      default: 'Service Description'
    }
  }
}
</script>

<style lang="scss">
.services {
  border-radius: 6px;
  box-shadow: 0px 5px 10px rgba($tertiary-color, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in 0.2s all;
  padding: 2rem 3rem;
  background: $white;
  text-align: center;
  &:hover {
    box-shadow: 5px 15px 24px rgba($tertiary-color, 0.9);
    cursor: pointer;
    transform: scale(1.1);
  }
  &__icon--box {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    // margin-right: 2rem;
    transition: ease-in 0.2s all;
  }
  &__text {
  }
  &__icon {
    color: $accent-color;
    font-size: 5rem;
    transition: ease-in 0.2s all;
  }
  &__title {
    font-size: 2rem;
    color: $primary-color;
  }

  &__btn,
  &__btn:link,
  &__btn:visited {
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    background: $primary-color;
    color: $white;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.2s;
  }

  &__btn:hover,
  &__btn:focus {
    text-decoration: none;
    background: $accent-color;
    color: $white;
  }
}
</style>
