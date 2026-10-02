<template>
  <nuxt-link class="team-card" :to="`/about/team/${slug}`">
    <TeamPhoto class="team-card__photo" :member="member" />
    <div class="team-card__text">
      <h3 class="team-card__name">
        {{ member.name
        }}<span v-if="member.credentials">, {{ member.credentials }}</span>
      </h3>
      <p class="team-card__role">{{ member.role }}</p>
      <span class="team-card__link">View Profile <span>&rarr;</span></span>
    </div>
  </nuxt-link>
</template>

<script>
import TeamPhoto from '@/components/TeamPhoto.vue'
export default {
  components: {
    TeamPhoto,
  },
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slug() {
      return memberSlug(this.member)
    },
  },
}
</script>

<style lang="scss" scoped>
.team-card {
  display: flex;
  flex-direction: column;
  border-radius: $border-radius;
  box-shadow: $shadow;
  overflow: hidden;
  transition: $transition;
  color: $dark-grey;

  &__photo {
    border-radius: 0;
    filter: grayscale(1);
    transition: all 0.4s;
    @include respond(tab-port) {
      filter: none;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
  }

  &__name {
    font-size: 2.2rem;
    color: $primary-color;
    margin-bottom: 0.5rem;
  }

  &__role {
    font-size: 1.4rem;
    font-style: italic;
  }

  &__link {
    margin-top: auto;
    color: $accent-color;
    font-weight: 600;
    transition: all 0.4s;
    span {
      transition: color 0.1s, margin-left 0.4s;
    }
  }

  &:hover &__link {
    color: $primary-color;
    span {
      margin-left: 1rem;
    }
  }

  // Same hover as BlogCard
  @media only screen and (min-width: 56.25em) {
    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px $primary-color;
      .team-card__photo {
        filter: none;
      }
    }
  }
}
</style>
