<template>
  <div class="container">
    <div v-swiper="testimonySettings" class="swiper testimonial-swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(testimony, index) in testimonialSlide"
          :key="index"
          class="testimonial swiper-slide slide"
        >
          <div class="testimonial__card">
            <!-- <QuoteMark class="begin" /> -->
            <p class="testimonial__quote">
              {{ testimony.quote }}
            </p>
            <!-- <QuoteMark class="end" /> -->
            <p class="testimonial__name">{{ testimony.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  directives: {
    swiper: directive
  },
  data() {
    return {
      testimonySettings: {
        slidesPerView: 1,
        loop: true,
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        }
      },
      testimonialSlide: [
        {
          quote:
            "A lot of people you think you know, you don't know, until you find out you don't know then it may be too late to know.",
          name: 'Kenneth B. Clark'
        },
        {
          quote: 'There is more on the surface than what our eyes can see',
          name: 'Aaron T. Beck'
        },
        {
          quote:
            "For every problem there is a solution. The problem is...we don't like the solution.",
          name: 'Kervin K. Searles'
        },
        {
          quote:
            'It is not primarily our physical selves that limit us but rather our mindset about our physical limits.',
          name: 'Ellen J. Langer'
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
  &:before,
  &:after {
    position: absolute;
    font-family: sans-serif;
    font-size: calc(40rem + 1vw);
    color: rgba($white, 0.3);
  }
  &:before {
    content: '\201c';
    left: 1rem;
    top: -13rem;
  }
  &:after {
    content: '\201d';
    right: 1rem;
    top: -1rem;
  }

  &__card {
  }
  &__quote {
    text-align: center;
    font-family: 'Nanum Myeongjo';
    width: 90%;
    font-size: calc(2rem + 1vw);
    margin: 0 auto;
    color: $white;
  }
  &__name {
    font-size: $default-font-size;
    font-style: italic;
    text-align: center;
  }
}
</style>
