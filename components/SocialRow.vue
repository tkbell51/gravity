<template>
  <div class="social__nav">
    <div class="social__nav--box">
      <div class="social__nav--left">
        <a
          class="social__link"
          href="https://www.google.com/maps/dir/?api=1&destination=104%20Maxwell%20Ave%20Suite%20219%20Greenwood%20SC%2029646"
          target="_blank"
          ><Fas class="social__nav--icon" i="map-marker-alt" />104 Maxwell Ave
          Suite 219, Greenwood, SC 29646</a
        >
      </div>
      <div class="social__nav--right">
        <a
          class="social__link"
          href="mailto:gravitycounselinggroup@gmail.com"
          target="_blank"
          ><Fas
            class="social__nav--icon"
            i="envelope"
          />gravitycounselinggroup@gmail.com</a
        >
        <a class="social__link" href="tel:864-724-9187" target="_blank"
          ><Fas class="social__nav--icon" i="phone" />(864) 724-9187</a
        >
        <ul class="social__list">
          <li class="social__item">
            <a
              class="social__link"
              href="https://www.facebook.com/gravitycounseling/"
              target="_blank"
              ><Fab class="social__nav--icon" i="facebook"
            /></a>
          </li>
          <li class="social__item">
            <a
              class="social__link"
              href="https://www.instagram.com/thegravitygroup/"
              target="_blank"
              ><Fab class="social__nav--icon" i="instagram"
            /></a>
          </li>
          <li class="social__item">
            <a
              class="social__link"
              href="https://twitter.com/GravityCGroup"
              target="_blank"
              ><Fab class="social__nav--icon" i="twitter"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Fab from '~/components/Fab'
import Fas from '~/components/Fas'

export default {
  components: {
    Fab,
    Fas,
  },
}
</script>

<style lang="scss">
.social {
  &__nav {
    background: $primary-color;
    padding: 0 1rem;

    &--box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3rem;
    }

    &--right {
      display: flex;
    }

    &--icon {
      color: $accent-color;
      margin-right: 0.5rem;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    list-style-type: none;

    .social__nav--icon {
      color: $white;

      &:hover {
        color: $accent-color;
      }
    }
  }

  &__link,
  &__link:link,
  &__link:visited {
    color: $white;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.3rem;
  }
  &__link:hover,
  &__link:focus {
    color: $accent-color;
  }
}
</style>
