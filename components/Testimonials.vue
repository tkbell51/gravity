<template>
  <div class="container">
    <swiper class="swiper testimonial-swiper" :options="settings">
      <swiper-slide
        v-for="testimony in testimonialSlide"
        :key="testimony.id"
        class="testimonial"
      >
        <div class="testimonial__card">
          <QuoteMark />
          <p class="testimonial__quote">
            {{ testimony.quote }}
          </p>
          <QuoteMark />
          <p class="testimonial__name">{{ testimony.name }}</p>
        </div>
      </swiper-slide>

      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import QuoteMark from '@/components/QuoteMark'
export default {
  components: {
    Swiper,
    SwiperSlide,
    QuoteMark
  },
  data() {
    return {
      settings: {
        slidesPerView: 1,
        loop: true,
        // autoHeight: true,
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
      testimonialSlide: [
        {
          id: 1,
          quote:
            'Kervin has been and still is an AWESOME counselor that I am so very grateful to have to help me see things brighter, lighter, better and not take everything to heart.',
          name: 'Tera H.'
        },
        {
          id: 2,
          quote:
            'My experience with him was different from other counselors because he allowed me to be open and honest about myself without judging me. His attentiveness made me feel that he was genuinely concerned about my well-being and bettering my life.',
          name: 'Jeana S.'
        },
        {
          id: 3,
          quote:
            'He learned me as a client and could read me when I walked throughthe door. His acceptance made it easy for me to listen to the advicethat was given.',
          name: 'Laura L.'
        },
        {
          id: 4,
          quote:
            'I am no longer an over-thinker, I learned to set boundaries, I am more confident than ever. I am powerful. I am no longer in a depression and I enjoy life. I would recommend him for anyone whohas a desire to be the best you that you can be.',
          name: 'Pace D.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.testimonial {
  display: flex;
  justify-content: center;
  align-items: center;

  svg.quotemark:nth-of-type(2) {
    transform: rotate(180deg);
  }
  &__card {
    background: $white;
    width: 80%;
    box-shadow: 0px 5px 10px rgba($tertiary-color, 0.8);
    padding: 2rem;
    width: 38rem;
    text-align: center;
  }

  &__quote {
    font-family: 'Nanum Myeongjo';
  }
  &__name {
    font-size: $default-font-size;
    font-style: italic;
  }
}
</style>
