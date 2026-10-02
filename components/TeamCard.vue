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
    span {
      transition: margin-left 0.4s;
    }
  }

  &:hover {
    box-shadow: $hover-shadow;
    transform: translateY(-4px);
    .team-card__link span {
      margin-left: 1rem;
    }
  }
}
</style>
