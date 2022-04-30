<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="container">
        <div class="footer__box">
          <div>
            <nuxt-link to="/" class="footer__logo"><FooterLogo /></nuxt-link>
          </div>
          <div>
            <h4 class="footer__menu--title">Information</h4>
            <ul class="footer__menu">
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/about">About</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/blog">Blog</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/services"
                  >Services</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/contact"
                  >Contact Us</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer__pages">
            <h4 class="footer__menu--title">Services</h4>
            <ul class="footer__menu">
              <li class="footer__item">
                <nuxt-link
                  class="footer__link"
                  to="/services/individual-therapy"
                  >Individual Therapy</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/services/couples-therapy"
                  >Couples Therapy</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/services/teletherapy"
                  >Teletherapy</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/services/anger-management"
                  >Anger Management</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/services/support-groups"
                  >Support Groups</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link
                  class="footer__link"
                  to="/services/workshops-presentations"
                  >Workshops &amp; Presentations</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="footer__menu--title">Contact Us</h4>
            <ul class="footer__menu">
              <li class="footer__item">
                <nuxt-link
                  class="footer__link contact-flex"
                  to="https://www.google.com/maps/dir/?api=1&destination=104%20Maxwell%20Ave%20Suite%20219%20Greenwood%20SC%2029646"
                  ><Fas class="footer__icon" i="map-marker-alt" />104 Maxwell
                  Ave Suite 219,<br />
                  Greenwood, SC 29646</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link
                  class="footer__link contact-flex"
                  to="mailto:admin@gravitycounselinggroup.com"
                  ><Fas
                    class="footer__icon"
                    i="envelope"
                  />admin@gravitycounselinggroup.com</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link
                  class="footer__link contact-flex"
                  to="tel:864-724-9187"
                  ><Fas class="footer__icon" i="phone" />(864)
                  724-9187</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom--box">
            <p>
              Copyright &copy; {{ new Date().getFullYear() }} Gravity Counseling
              Group
            </p>
            <div class="footer__social">
              <ul class="footer__menu">
                <li class="footer__item">
                  <a
                    class="footer__link"
                    href="https://www.facebook.com/gravitycounseling/"
                    target="_blank"
                    ><Fab class="footer__icon" i="facebook"
                  /></a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link"
                    href="https://www.instagram.com/thegravitygroup/"
                    target="_blank"
                    ><Fab class="footer__icon" i="instagram"
                  /></a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link"
                    href="https://twitter.com/GravityCGroup"
                    target="_blank"
                    ><Fab class="footer__icon" i="twitter"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogo from '~/components/FooterLogo'
import Fab from '~/components/Fab'
import Fas from '~/components/Fas'

export default {
  components: {
    FooterLogo,
    Fab,
    Fas,
  },
}
</script>

<style lang="scss">
.footer {
  &__main {
    padding: 5rem 0 0;
    background: darken($dark-grey, 10%);
  }

  &__box {
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    // grid-gap: 2rem;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 0rem;
    @media only screen and(max-width: 28.125em) {
      width: 100%;
    }
    div {
      @include respond(phone) {
        flex: 100%;
        text-align: center;
        margin: 1rem auto;
      }
    }
  }
  &__logo {
    width: 25rem;
    display: block;
    @include respond(phone) {
      margin: auto;
    }
    #logo_icon {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }

  &__menu {
    list-style-type: none;
    &--title {
      font-size: 2rem;
      color: $accent-color;
    }
  }
  &__item {
    margin-bottom: 1rem;
  }
  &__link,
  &__link:link,
  &__link:visited {
    color: $white;
    text-decoration: none;

    &:hover {
      color: $accent-color;
    }
    &.contact-flex {
      display: flex;
      @include respond(phone) {
        display: block;
      }
      .footer__icon {
        margin-top: 5px;
      }
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    justify-content: center;
    margin: 1rem auto;
  }
  &__icon {
    // font-size: 3rem;
    color: $accent-color;
    margin-right: 1rem;
    &:hover {
      color: $white;
    }
  }
  &__pages {
    .footer__menu {
      align-items: center;
      .footer__item:not(:last-child) {
        margin-right: 2rem;
        @include respond(phone) {
          margin-right: 0;
        }
      }
    }
  }
  &__contact {
    .footer__menu {
      align-items: center;
      .footer__item:not(:last-child) {
        margin-right: 2rem;
      }
    }
    .footer__link {
      font-size: 2rem;
      display: flex;
      align-items: center;
      text-transform: none;
      margin-bottom: 1rem;
      @include respond(small-tab) {
        justify-content: flex-end;
      }
      @include respond(phone) {
        justify-content: center;
      }
    }
  }
  &__social {
    .footer__menu {
      display: flex;
      flex-direction: row;
      @include respond(phone) {
        justify-content: center;
      }
      .footer__icon {
        font-size: 3rem;
      }
    }
  }
  &__bottom {
    background: darken($dark-grey, 15%);
    text-align: center;
    color: $white;
    padding: 1rem 0;
    &--box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-bottom: 0;
        @include respond(phone) {
          order: 1;
        }
      }
      @include respond(phone) {
        flex-direction: column;
      }
    }
  }
}
</style>
