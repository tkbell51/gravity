<template>
  <NuxtImg
    v-if="member.img"
    class="team-photo"
    :src="member.img"
    :alt="`${member.name}`"
    width="640"
    format="webp"
  />
  <div v-else class="team-photo team-photo--initials" aria-hidden="true">
    <span>{{ initials }}</span>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  computed: {
    initials() {
      return memberInitials(this.member)
    },
  },
}
</script>

<style lang="scss" scoped>
.team-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: top;
  border-radius: $border-radius;

  &--initials {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $gradient;
    color: $white;
    font-family: 'Nanum Myeongjo';
    font-size: 8rem;
    letter-spacing: 0.5rem;
  }
}
</style>
