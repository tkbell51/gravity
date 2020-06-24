<template>
  <div>
    <!-- <ContactForm /> -->
    <ContactRow />
    <footer class="footer">
      <div class="container">
        <div class="footer__box">
          <nuxt-link to="/" class="footer__logo"><FooterLogo /></nuxt-link>
          <div class="footer__pages">
            <ul class="footer__menu">
              <li class="footer__item">
                <nuxt-link class="footer__link" to="/">Home</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="about">About</nuxt-link>
              </li>

              <li class="footer__item">
                <nuxt-link class="footer__link" to="services"
                  >Services</nuxt-link
                >
              </li>
              <li class="footer__item">
                <nuxt-link class="footer__link" to="contact">Contact</nuxt-link>
              </li>
              <!-- <li class="footer__item">
              <nuxt-link class="footer__link" to="blog">Blog</nuxt-link>
            </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom--box">
            <p>
              Copyright &copy; 2020 Gravity Counseling Group
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
    </footer>
  </div>
</template>

<script>
import FooterLogo from '~/components/FooterLogo'
import Fab from '~/components/Fab'
// import ContactForm from '@/components/ContactForm'
import ContactRow from '@/components/ContactRow'
export default {
  components: {
    FooterLogo,
    Fab,
    // ContactForm,
    ContactRow
  }
}
</script>

<style lang="scss">
.footer {
  padding: 5rem 0 0;
  background: darken($dark-grey, 10%);

  &__box {
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    // grid-gap: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-bottom: 0rem;
    @media only screen and(max-width: 28.125em) {
      width: 100%;
    }
  }
  &__logo {
    width: 30rem;
    #logo_icon {
      display: block;
      margin: 0 auto;
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  &__menu {
    display: flex;
    list-style-type: none;
    @include respond(phone) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__link,
  &__link:link,
  &__link:visited {
    color: $white;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;

    &:hover {
      color: $accent-color;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    justify-content: center;
    margin: 1rem auto;
  }
  &__icon {
    font-size: 3rem;
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
      flex-direction: row;
      @include respond(phone) {
        justify-content: center;
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
