<template>
  <VueSlickCarousel
    class="slick-carousel"
    :dots="true"
    :autoplay="true"
    :autoplay-speed="10000"
    :fade="true"
  >
    <div id="testimonial1" class="testimonial slide">
      <QuoteMark />
      <p class="testimonial__quote">
        Kervin has been and still is an AWESOME counselor that I am so very
        grateful to have to help me see things brighter, lighter, better and not
        take everything to heart.
      </p>
      <span class="testimonial__name">Tera H.</span>
    </div>

    <div id="testimonial2" class="testimonial slide">
      <QuoteMark />

      <p class="testimonial__quote">
        My experience with him was different from other counselors because he
        allowed me to be open and honest about myself without judging me. His
        attentiveness made me feel that he was genuinely concerned about my
        well-being and bettering my life.
      </p>
      <span class="testimonial__name">Jeana S.</span>
    </div>

    <div id="testimonial3" class="testimonial slide">
      <QuoteMark />

      <p class="testimonial__quote">
        He learned me as a client and could read me when I walked through the
        door. His acceptance made it easy for me to listen to the advice that
        was given.
      </p>
      <span class="testimonial__name">Laura L.</span>
    </div>
    <div id="testimonial4" class="testimonial slide">
      <QuoteMark />

      <p class="testimonial__quote">
        I am no longer an over-thinker, I learned to set boundaries, I am more
        confident than ever. I am powerful. I am no longer in a depression and I
        enjoy life. I would recommend him for anyone who has a desire to be the
        best you that you can be.
      </p>
      <span class="testimonial__name">Pace D.</span>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import QuoteMark from '@/components/QuoteMark'
export default {
  components: {
    VueSlickCarousel,
    QuoteMark
  }
}
</script>

<style lang="scss">
.testimonial {
  flex-direction: column;
  text-align: center;
  color: $white;
  &__symbol {
    font-size: 8rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: $white;
    margin: 0 auto;
  }

  &__quote {
    font-family: 'Nanum Myeongjo';
    font-size: 3rem;
    width: 90%;
    margin: 0 auto;
    margin-block: 1rem;
    @include respond(phone) {
      font-size: $default-font-size;
    }
  }
  &__name {
    font-size: $default-font-size;
    font-style: italic;
  }
}
</style>
