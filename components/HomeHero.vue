<template>
  <!-- <client-only>
  <swiper
   ref="carousel"
        class="swiper"
        :options="settings"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
  >
    <div class="swiper-wrapper">
      <swiper-slide
        v-for="slide in homeSlides"
        :id="`${slide.css}`"
        :key="slide.id"
        class="swiper-slide slide"
      >
        <div class="slide__text">
          <h2 class="heading-primary">{{ slide.title }}</h2>
          <hr class="gcg-border" />
          <p>{{ slide.text }}</p>
          <SimplePractice />
        </div>
      </div>
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div
      slot="pagination"
      class="swiper-pagination swiper-pagination-bullets"
    ></div>
  </swiper>
</client-only> -->
  <div v-swiper:myDirectiveSwiper="settings" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="slide in homeSlides"
        :id="`${slide.css}`"
        :key="slide.id"
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
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import SimplePractice from './SimplePractice.vue'
export default {
  components: {
    SimplePractice
    // Swiper,
    // SwiperSlide
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
          id: 1,
          css: 'slide-help',
          title: 'Need Help?',
          text:
            "Having difficulty accepting mistakes and staying committed? Want to strengthen your connection? Let's do the work to create the relationship that is perfect for you."
        },
        {
          id: 2,
          css: 'slide-lost',
          title: 'Lost?',
          text:
            'Mental health is complex. Become more self aware of your thoughts, feelings, and actions. Learn how they connect to create the life you are currently living.'
        },
        {
          id: 3,
          css: 'slide-think',
          title: 'Overwhelmed?',
          text:
            'I am constantly thinking and analyzing every situation even if it seems all good. Capture greater peace as you l gain perspective.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  padding: 40px;
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
  // width: 100%;
  color: $white;
  // padding-left: 10%;
  // padding-right: 10%;
  position: relative;
  display: flex !important;
  align-items: center;
  // height: 100%;
  // padding: 0 10%;

  &__text {
    width: 50%;
    padding: 0 10%;
    .heading-primary {
      font-size: 7rem;
      line-height: 8rem;
      margin-bottom: 2rem;
      // @include respond(phone) {
      //   font-size: 10vw;
      // }
    }
    p {
      font-size: 2rem;
      margin-bottom: 2rem;
      // @include respond(phone) {
      //   font-size: 5vw;
      // }
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

// &--text {
//   width: 75%;
//   color: $white;
//   text-align: center;
// }

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
</style>
