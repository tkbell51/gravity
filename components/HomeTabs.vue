<template>
  <section class="section__hero">
    <swiper ref="heroSwiper" :options="options">
      <swiper-slide id="slide-help" title="Need Help?">
        <div class="tab__text">
          <h2 class="heading-primary">Need Help?</h2>
          <hr class="gcg-border" />
          <p>
            Having difficulty accepting mistakes and staying committed? Want to
            strengthen your connection? Let's do the work to create the
            relationship that is perfect for you.
          </p>
          <SimplePractice />
        </div>
      </swiper-slide>

      <swiper-slide id="slide-lost" title="Lost?">
        <div class="tab__text">
          <h2 class="heading-primary">Lost?</h2>
          <hr class="gcg-border" />
          <p>
            Mental health is complex. Become more self aware of your thoughts,
            feelings, and actions. Learn how they connect to create the life you
            are currently living.
          </p>
          <SimplePractice />
        </div>
      </swiper-slide>

      <swiper-slide id="slide-think" title="Overwhelmed?">
        <div class="tab__text">
          <h2 class="heading-primary">Overwhelmed?</h2>
          <hr class="gcg-border" />
          <p>
            I am constantly thinking and analyzing every situation even if it
            seems all good. Capture greater peace as you l gain perspective.
          </p>
          <SimplePractice />
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      ></div>
    </swiper>
  </section>
</template>

<script>
import SimplePractice from '@/components/SimplePractice'
export default {
  components: {
    SimplePractice
  },
  data() {
    return {
      tabs: ['Need Help?', 'Lost?', 'Overwhelmed?'],
      options: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        effect: 'fade',
        autoplay: {
          delay: 15000
        }
      }
    }
  }
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
      bottom: 10px;
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

  @include respond(phone) {
    height: 70vh;
  }
  #slide-lost {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('../assets/img/gcc-happy.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('../assets/img/gcc-happy.jpg');
    }
  }
  #slide-think {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('../assets/img/gcc-think.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('../assets/img/gcc-think.jpg');
    }
  }
  #slide-help {
    background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
      url('../assets/img/gcc-help.jpg');
    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.6), rgba($black, 0.6)),
        url('../assets/img/gcc-help.jpg');
    }
  }
  .tab,
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    color: $white;

    // display: flex !important;
    // align-items: center;
    transition: opacity 0.4s linear;

    &__text {
      width: 50%;
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
  .swiper-pagination-bullet {
    width: 25px;
    height: 2px;
    border-radius: 0;
    background: $white;
    border: none;
    &-active {
      background: $accent-color;
    }
  }
}
</style>
