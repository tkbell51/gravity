<template>
  <div class="services-links">
    <h3 class="heading-tertiary">Services</h3>
    <ul class="services__list">
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/individual-therapy"
          >Individual Therapy</nuxt-link
        >
      </li>
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/couples-therapy"
          >Couples Therapy</nuxt-link
        >
      </li>
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/teletherapy"
          >Teletherapy</nuxt-link
        >
      </li>
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/anger-management"
          >Anger Management</nuxt-link
        >
      </li>
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/support-groups"
          >Support Groups</nuxt-link
        >
      </li>
      <li class="services__item">
        <nuxt-link class="services__link" to="/services/workshops-presentations"
          >Workshops &amp; Presentations</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.services {
  &-links {
    h3 {
      margin-bottom: 1rem;
    }
  }
  &__list {
    list-style-type: none;
  }
  &__item {
    margin-bottom: 1rem;
  }
  &__link {
    &,
    &:link,
    &:visited {
      color: $primary-color;
      padding: 5px 0 5px 6px;
      display: block;
      border-radius: 6px;
      transition: all 0.4s;
    }
    &:hover {
      color: $accent-color;
    }
    &.nuxt-link-active {
      padding-left: 2rem;
    }
  }
}
.nuxt-link-active {
  background: $primary-color;

  color: $accent-color !important;
  font-weight: bold;
}
</style>

<style lang="scss">
// Two-column layout shared by every service page (sidebar + content).
// Lives here because every service page renders ServiceLinks.
.section__content {
  p {
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 30rem 1fr;
    grid-gap: 4rem;
    @include respond(small-tab) {
      grid-template-columns: 1fr;
      .services-links {
        display: none;
      }
    }
  }
}
</style>
