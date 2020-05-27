<template>
  <div>
    <section class="section__hero">
      <div ref="heroSlider" v-swiper="settings" class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in homeSlides"
            :id="`${slide.css}`"
            :key="index"
            class="swiper-slide slide"
          >
            <div class="slide__text">
              <h2 class="heading-primary">{{ slide.title }}</h2>
              <hr class="gcg-border" />
              <p>{{ slide.text }}</p>
              <SimplePractice />
            </div>
          </div>
        </div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
        <div
          slot="pagination"
          class="swiper-pagination swiper-pagination-bullets"
        ></div>
      </div>
    </section>
    <section class="section__help">
      <div class="container">
        <div class="section__help--text">
          <h2 class="heading-secondary">It sounds like I can help.</h2>
          <hr class="gcg-border" />
          <p>
            I got you! It has been proven therapy can help someone like
            you...who may be going through a crisis, breakup, remembering past
            trauma, or just feeling anxious, sad, and angry. Finding the right
            therapist and having a great relationship with them is a vital
            component in reaching the goals that you have set. More important
            than orientation or technique is the therapeutic alliance that one
            creates with a therapist. My alliance with you will ensure there is
            a connection, an understanding of goals, and how we are going to go
            about trying to reach those goals. I will give you the upmost
            respect, provide a listening ear to gain understanding of your life,
            issue unbiased honesty, and share evidenced-based techniques you can
            implement daily. Starting today, book an appointment and take one
            hour each week to focus completely on yourself.
          </p>
          <SimplePractice />
        </div>
      </div>
    </section>
    <section class="section__logo-cta">
      <div class="container">
        <div class="logo-cta__box">
          <img
            src="../assets/img/gravity-counsel-full.svg"
            alt="Logo"
            class="logo-cta__logo"
          />
        </div>
      </div>
    </section>
    <section class="section__about">
      <div class="container">
        <div class="about__box">
          <div class="about__img--box">
            <img
              src="../assets/img/kervin-searles.png"
              alt="Kervin Searles smiling"
              class="about__img"
            />
          </div>
          <div class="about__text">
            <h3 class="heading-tertiary">Welcome Note</h3>
            <h2 class="heading-secondary">Kervin K. Searles, LPC-A</h2>
            <hr class="gcg-border" />
            <p>
              It is estimated that only about 17% of US adults are considered to
              be in a state of optimal mental health. Therapy happens when we
              address what is preventing us from reaching our goals. If you want
              to live your best life, sit with a therapist...the conversation is
              different.
            </p>
            <nuxt-link class="about__phone" to="tel:864-724-9187"
              ><Fas class="about__icon" i="phone" />(864) 724-9187</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section__testimonials">
      <Testimonials />
    </section>
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary">Services</h2>
        <hr class="gcg-border" />
        <ServicesGrid />

        <nuxt-link class="btn" to="services">View Services</nuxt-link>
      </div>
    </section>

    <section class="section__online-cta">
      <div class="container">
        <div class="online__box">
          <div class="online__text">
            <h2 class="heading-secondary">Online Mental Health Resources</h2>
            <MentalResourceGrid />
          </div>
        </div>
      </div>
    </section>
    <section class="section__gallery">
      <div class="container">
        <Gallery />
      </div>
    </section>

    <ContactForm />
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import Fas from '@/components/Fas'
import SimplePractice from '@/components/SimplePractice'
import ContactForm from '@/components/ContactForm'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import MentalResourceGrid from '@/components/MentalResourceGrid'
import 'swiper/css/swiper.css'

export default {
  components: {
    Fas,
    SimplePractice,
    ContactForm,
    ServicesGrid,
    Gallery,
    Testimonials,
    MentalResourceGrid
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      settings: {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      homeSlides: [
        {
          css: 'slide-help',
          title: 'Need Help?',
          text:
            "Having difficulty accepting mistakes and staying committed? Want to strengthen your connection? Let's do the work to create the relationship that is perfect for you."
        },
        {
          css: 'slide-lost',
          title: 'Lost?',
          text:
            'Mental health is complex. Become more self aware of your thoughts, feelings, and actions. Learn how they connect to create the life you are currently living.'
        },
        {
          css: 'slide-think',
          title: 'Overwhelmed?',
          text:
            'I am constantly thinking and analyzing every situation even if it seems all good. Capture greater peace as you l gain perspective.'
        }
      ]
    }
  },

  head() {
    return {
      title: 'Gravity Counseling Group Home',
      meta: [
        {
          name: 'description',
          content: 'This is the home page for Gravity Counseling Group'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section {
  &__hero {
    padding: 0;
    height: 95vh;
    & > div {
      height: inherit;
    }

    @include respond(phone) {
      height: 70vh;
    }
    #slide-lost {
      background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
        url('../assets/img/gcc-happy.jpg');
    }
    #slide-think {
      background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
        url('../assets/img/gcc-think.jpg');
    }
    #slide-help {
      background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
        url('../assets/img/gcc-help.jpg');
    }
    .slide {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      color: $white;
      position: relative;
      display: flex !important;
      align-items: center;

      &__text {
        width: 50%;
        padding: 0 10%;
        .heading-primary {
          font-size: 7rem;
          line-height: 8rem;
          margin-bottom: 2rem;
          @include respond(phone) {
            font-size: 4rem;
            line-height: 4rem;
            margin-bottom: 1rem;
          }
        }
        p {
          font-size: 2rem;
          margin-bottom: 2rem;
          @include respond(phone) {
            font-size: $default-font-size;
          }
        }

        @include respond(tab-mid) {
          width: 100%;
          text-align: center;
          padding: 0 10%;

          .gcg-border {
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
      &__learn-more {
        margin-right: 1rem;
      }
    }

    .hero-question {
      font-family: 'Cormorant Garamond';
      font-size: 7rem;
      text-transform: uppercase;
      font-weight: bold;
      color: $white;
      line-height: 1;
      margin-bottom: 1rem;

      @include respond(phone) {
        font-size: 5rem;
      }
    }
  }
  &__help {
    &--text {
      text-align: center;

      .heading-primary {
        color: $primary-color;
      }
      @include respond(tab-port) {
        width: 80%;
        margin: 0 auto;
      }
      @include respond(phone) {
        width: 100%;
      }
    }

    .gcg-border {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  &__logo-cta {
    position: relative;
    .logo-cta {
      &__box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      &__logo-box {
      }
      &__logo {
        width: 75%;
        height: 100%;
        @include respond(phone) {
          width: 100%;
        }
      }
      &__text {
        position: relative;
        z-index: 20;

        .heading-tertiary {
          color: $white;
        }
        .heading-secondary {
          color: $accent-color;
        }
      }
    }
  }
  &__services {
    .heading-secondary,
    .gcg-border {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
    .gcg-border {
      margin-bottom: 2rem;
    }

    .btn {
      margin-top: 3rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__about {
    .about {
      &__box {
        display: flex;
        justify-content: center;
        @include respond(phone) {
          flex-direction: column;
          text-align: center;
        }
      }
      &__img {
        width: 90%;
        @include respond(phone) {
          width: 100%;
        }
      }
      &__img--box {
        flex: 45%;
        text-align: right;
        margin-right: 5rem;
        @include respond(phone) {
          margin-right: 0;
        }
      }
      &__text {
        flex: 65%;
      }
      &__phone {
        font-size: 3rem;
        &,
        &:link,
        &:visited {
          text-decoration: none;
          color: $primary-color;
          font-weight: bold;
        }
        @include respond(phone) {
          font-size: $default-font-size;
        }
      }
      &__icon {
        color: $accent-color;
        margin-right: 1rem;
      }
    }
    .gcg-border {
      @include respond(phone) {
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }

  &__online-cta {
    background: #efefef;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    // height: 47rem;
    // padding-left: 10%;
    // padding-right: 10%;
    // display: flex;
    // align-items: center;
    text-align: center;

    .online__text {
      color: $white;

      .heading-secondary {
        // color: $white;
        margin-bottom: 2rem;
      }
      .btn {
        margin-top: 2rem;
      }
    }
  }
  &__gallery {
  }
  &__blog-row {
    .blog-row__grid {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

      grid-gap: 3rem;
    }
  }
}
</style>
