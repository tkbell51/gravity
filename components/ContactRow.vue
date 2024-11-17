<template>
  <section class="section__contact-row">
    <div class="container">
      <a
        class="contact-info__link"
        href="https://www.google.com/maps/dir/?api=1&destination=104%20Maxwell%20Ave%20Suite%20219%20Greenwood%20SC%2029646"
        ><Fas class="contact-info__icon" i="map-marker-alt" />104 Maxwell Ave
        Suite 219,<br />
        Greenwood, SC 29646</a
      >
      <a
        class="contact-info__link"
        href="mailto:admin@gravitycounselinggroup.com"
        ><Fas
          class="contact-info__icon"
          i="envelope"
        />admin@gravitycounselinggroup.com</a
      >
      <a class="contact-info__link" href="tel:864-724-9187"
        ><Fas class="contact-info__icon" i="phone" />(864) 724-9187</a
      >
    </div>
  </section>
</template>

<script>
import Fas from '@/components/Fas'

export default {
  components: {
    Fas,
  },
}
</script>

<style lang="scss" scoped>
.section__contact-row {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 5rem;

    .contact-info {
      &__link {
        text-align: center;
        &,
        &:link,
        &:visited {
          color: $primary-color;
          font-weight: bold;
        }
      }
      &__icon {
        display: block;
        margin: 0 auto;
        font-size: 5rem;
        color: $accent-color;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
