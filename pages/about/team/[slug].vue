<template>
  <div>
    <PageHeader page-title="Meet the Team" />
    <section class="section__profile">
      <div class="container">
        <nuxt-link class="profile__back" to="/about/team"
          ><span>&larr;</span> Back to the team</nuxt-link
        >
        <div class="profile">
          <div class="profile__aside">
            <TeamPhoto :member="member" />
            <SimplePractice class="profile__cta" />
          </div>
          <div class="profile__text">
            <h2 class="heading-secondary">
              {{ member.name
              }}<span v-if="member.credentials">, {{ member.credentials }}</span>
            </h2>
            <p class="profile__role">{{ member.role }}</p>
            <p v-if="member.location" class="profile__location">
              <Fas i="map-marker-alt" /> {{ member.location }}
            </p>
            <ContentRenderer class="profile__body" :value="member" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import TeamPhoto from '@/components/TeamPhoto.vue'
import SimplePractice from '@/components/SimplePractice.vue'
import Fas from '@/components/Fas.vue'

const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

const { data: member } = await useAsyncData(`team-${route.params.slug}`, () =>
  queryCollection('team').path(`/team/${route.params.slug}`).first()
)
if (!member.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Team member not found',
    fatal: true,
  })
}

usePageSeo(() => ({
  title: member.value.title,
  description: member.value.description,
  image: member.value.img ? siteUrl + member.value.img : undefined,
}))
</script>

<style lang="scss">
.section__profile {
  .profile__back {
    display: inline-block;
    margin-bottom: 3rem;
    color: $primary-color;
    span {
      transition: margin-right 0.4s;
    }
    &:hover span {
      margin-right: 1rem;
    }
  }

  .profile {
    display: grid;
    grid-template-columns: 35rem 1fr;
    grid-gap: 5rem;
    align-items: start;
    @include respond(small-tab) {
      grid-template-columns: 1fr;
    }

    &__aside {
      position: sticky;
      top: 12rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      @include respond(small-tab) {
        position: static;
        max-width: 35rem;
      }
    }

    &__cta {
      justify-content: center;
    }

    &__role {
      font-style: italic;
      color: $dark-grey;
      margin-top: 1rem;
    }

    &__location {
      color: $primary-color;
      svg {
        color: $accent-color;
        margin-right: 0.5rem;
      }
    }

    &__body {
      margin-top: 3rem;

      h2 {
        font-size: 2.4rem;
        color: $primary-color;
        margin: 3rem 0 1rem;
      }
      ul {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
