<template>
  <section class="section__hero">
    <VueSlickCarousel
      class="slick-carousel"
      :arrows="true"
      :dots="true"
      :autoplay="true"
      :autoplay-speed="10000"
      :fade="true"
    >
      <div id="slide-help" class="slide">
        <div class="container">
          <div class="slide__text">
            <h2 class="heading-primary">Need Help?</h2>
            <hr class="gcg-border" />
            <p>
              Having difficulty accepting mistakes and staying committed? Want
              to strengthen your connection? Let's do the work to create the
              relationship that is perfect for you.
            </p>

            <SimplePractice />
          </div>
        </div>
      </div>
      <div id="slide-lost" class="slide">
        <div class="container">
          <div class="slide__text">
            <h2 class="heading-primary">Lost?</h2>
            <hr class="gcg-border" />
            <p>
              Mental health is complex. Become more self aware of your thoughts,
              feelings, and actions. Learn how they connect to create the life
              you are currently living.
            </p>

            <SimplePractice />
          </div>
        </div>
      </div>
      <div id="slide-think" class="slide">
        <div class="container">
          <div class="slide__text">
            <h2 class="heading-primary">Overwhelmed?</h2>
            <hr class="gcg-border" />
            <p>
              I am constantly thinking and analyzing every situation even if it
              seems all good. Capture greater peace as you l gain perspective.
            </p>

            <SimplePractice />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
  <!-- </section> -->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SimplePractice from './SimplePractice.vue'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    SimplePractice,
    VueSlickCarousel
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  padding: 40px;
}

.section__hero {
  padding: 0;
  height: 95vh;

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
    width: 100%;
    height: 95vh;
    color: $white;
    // padding-left: 10%;
    // padding-right: 10%;
    position: relative;

    .container {
      display: flex;
      align-items: center;
      height: 100%;
    }

    @include respond(phone) {
      height: 70vh;
    }

    &__text {
      width: 50%;
      .heading-primary {
        font-size: 7rem;
        line-height: 8rem;
        margin-bottom: 2rem;
        @include respond(phone) {
          font-size: 10vw;
        }
      }
      p {
        font-size: 2rem;
        margin-bottom: 2rem;
        @include respond(phone) {
          font-size: 5vw;
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
  .slick-carousel {
    height: 100%;
  }
  &--text {
    width: 75%;
    color: $white;
    text-align: center;
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
</style>
