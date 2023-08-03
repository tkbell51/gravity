<template lang="html">
  <section class="section__hero">
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="(item, index) in slides"
        :id="item.css"
        :key="index"
        class="slide"
      >
        <div class="slide__text">
          <h2 class="heading-primary">{{ item.title }}</h2>

          <p>{{ item.text }}</p>
          <SimplePractice />
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import SimplePractice from '@/components/SimplePractice'
export default {
  components: {
    SimplePractice,
  },
  data() {
    return {
      slides: [],
      settings: {
        autoplay: true,
        fade: true,
        autoplaySpeed: 7000,
      },
    }
  },
  fetch() {
    this.slides = [
      {
        css: 'slide-help',
        title: 'Need Help?',
        text: "Having difficulty accepting mistakes and staying committed? Want to strengthen your connection? Let's do the work to create the relationship that is perfect for you.",
      },
      {
        css: 'slide-lost',
        title: 'Lost?',
        text: 'Mental health is complex. Become more self aware of your thoughts, feelings, and actions. Learn how they connect to create the life you are currently living.',
      },
      {
        css: 'slide-think',
        title: 'Overwhelmed?',
        text: 'I am constantly thinking and analyzing every situation even if it seems all good. Capture greater peace as you l gain perspective.',
      },
    ]
  },
}
</script>

<style lang="scss">
.section__hero {
  padding: 0;
  height: 95vh;
  & > div {
    height: inherit;
    position: relative;

    .tabs__header {
      position: absolute;
      left: 50%;
      bottom: 2%;
      transform: translateX(-50%);
      font-size: $default-font-size;
      color: $white;
      z-index: 10;
      display: flex;
      list-style: none;

      li {
        cursor: pointer;
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        white-space: nowrap;
        transition: all 0.2s ease-in;

        &:not(:last-child) {
          margin-right: 2rem;
        }
        &:hover {
          background: rgba($white, 0.2);
        }
        &.tab__selected {
          color: $accent-color;
        }
      }
    }
  }
  @include respond(tab-port) {
    height: 65vh;
  }
  @include respond(phone) {
    height: 50vh;
  }
  .slick-track,
  .slick-list,
  .slick-slide > div {
    height: 100%;
  }

  #slide-lost {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('/img/gcc-happy.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('/img/gcc-happy.jpg');
    }
  }
  #slide-think {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('/img/gcc-think.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('/img/gcc-think.jpg');
    }
  }
  #slide-help {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('/img/gcc-help.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('/img/gcc-help.jpg');
    }
  }
  .slide {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    color: $white;
    // display: flex !important;
    // align-items: center;
    transition: opacity 0.4s linear;
    position: relative;

    &__text {
      width: 35%;
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
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
        left: 50%;
        transform: translate(-50%, -50%);
      }

      @include respond(phone) {
        padding: 0 2%;
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
</style>
