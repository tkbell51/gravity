<template>
  <div>
    <section class="section__hero">
      <tabs>
        <tab
          v-for="(item, index) in homeSlides"
          :id="item.css"
          :key="index"
          :title="item.title"
        >
          <div class="tab__text">
            <h2 class="heading-primary">{{ item.title }}</h2>
            <hr class="gcg-border" />
            <p>{{ item.text }}</p>
            <SimplePractice />
          </div>
        </tab>
      </tabs>
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
      <tabs>
        <tab
          v-for="(item, index) in slides"
          :key="index"
          :title="item.name"
          class="testimonial"
        >
          <!-- <QuoteMark class="begin" /> -->
          <p class="testimonial__quote">
            {{ item.quote }}
          </p>
          <!-- <QuoteMark class="end" /> -->
          <p class="testimonial__name">{{ item.name }}</p>
        </tab>
      </tabs>
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
import Fas from '@/components/Fas'
import SimplePractice from '@/components/SimplePractice'
import ContactForm from '@/components/ContactForm'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import MentalResourceGrid from '@/components/MentalResourceGrid'
import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'

export default {
  components: {
    Fas,
    SimplePractice,
    ContactForm,
    ServicesGrid,
    Gallery,
    MentalResourceGrid,
    Tabs,
    Tab
  },
  data() {
    return {
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
      ],
      slides: [
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
    .tab {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      color: $white;
      position: absolute;
      width: 100%;
      opacity: 0;
      // display: flex !important;
      // align-items: center;
      transition: opacity 0.4s linear;
      &.active {
        opacity: 1;
      }

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
  &__testimonials {
    background: $gradient;
    padding: 0;
    height: 35rem;
    & > div {
      height: inherit;
      position: relative;
    }
    .tabs__header {
      position: absolute;
      display: flex;
      list-style: none;
      transform: translateX(-50%);
      font-size: $default-font-size;
      bottom: 10px;
      left: 50%;
      z-index: 10;

      cursor: pointer;
      li {
        cursor: pointer;
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 0;
        border-radius: 5px;
        white-space: nowrap;
        transition: all 0.2s ease-in;
        color: transparent;
        &:before {
          content: '';
          height: 10px;
          width: 10px;
          background-color: $white;
          border-radius: 50%;
          display: inline-block;
        }

        &:not(:last-child) {
          margin-right: 2rem;
        }
        &:hover {
          background: rgba($white, 0.2);
        }
        &.tab__selected:before {
          background-color: $accent-color;
        }
      }
    }

    .tab {
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: inherit;
      transition: all 0.2s ease-in;

      &.active {
        opacity: 1;
      }
    }
    .testimonial {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;
      padding: 0 15%;
      &:before,
      &:after {
        position: absolute;
        font-family: sans-serif;
        font-size: calc(40rem + 1vw);
        color: rgba($white, 0.2);
      }
      &:before {
        content: '\201c';
        left: 15%;
        top: -13rem;
      }
      &:after {
        content: '\201d';
        right: 15%;
        top: -1rem;
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
