<template>
  <div>
    <HomeHero />
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
          <!-- <div class="logo-cta__text">
            <h2 class="heading-tertiary">Gravity Counseling Group</h2>
            <h3 class="heading-secondary">
              Your perception dictate your options
            </h3>
          </div> -->
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
            <hr class="gcg-border" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              aperiam quia quos fugit corrupti est, possimus perspiciatis ex,
              reprehenderit dolor officiis quod distinctio animi natus, omnis id
              sequi ipsum architecto unde. Corporis distinctio officiis
              quisquam.
            </p>
            <SimplePractice />
          </div>
        </div>
      </div>
    </section>
    <section class="section__gallery">
      <div class="container">
        <Gallery />
      </div>
    </section>
    <!-- <section class="section__blog-row">
      <div class="container">
        <h2 class="heading-secondary">Blog</h2>
        <hr class="gcg-border" />
        <div class="blog-row__grid">
          <BlogCard
            thumbnail="'../assets/img/gcc-happy.jpg'"
            img-alt="Alternate text for image 1"
            title="Blog Title"
            preview-text="This is the preview text for blog card 1"
            blog-link="/bug"
          />
          <BlogCard
            thumbnail="http://localhost:3000/assets/img/gcc-help.jpg"
            img-alt="Alternate text for image 2"
            title="Blog Title"
            preview-text="This is the preview text for blog card 2"
            blog-link="/kerv"
          />
          <BlogCard
            thumbnail="http://localhost:3000/assets/img/gcc-think.jpg"
            img-alt="Alternate text for image 3"
            title="Blog Title"
            preview-text="This is the preview text for blog card 3"
            blog-link="/anderson"
          />
        </div>
      </div>
    </section> -->
    <ContactForm />
  </div>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import Fas from '@/components/Fas'
import SimplePractice from '@/components/SimplePractice'
// import BlogCard from '@/components/BlogCard'
import ContactForm from '@/components/ContactForm'
import ServicesGrid from '@/components/ServicesGrid'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'

export default {
  components: {
    HomeHero,
    Fas,
    SimplePractice,
    // BlogCard,
    ContactForm,
    ServicesGrid,
    Gallery,
    Testimonials
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
    background-image: url('../assets/img/gcg-online2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    height: 47rem;
    // padding-left: 10%;
    // padding-right: 10%;
    display: flex;
    align-items: center;

    @include respond(phone) {
      background-image: linear-gradient(rgba($black, 0.4), rgba($black, 0.4)),
        url('../assets/img/gcg-online2.jpg');

      .gcg-border {
        margin: 1rem auto;
      }
    }
    .online__text {
      color: $white;
      width: 50%;

      @include respond(small-tab) {
        width: 65%;
      }
      @include respond(phone) {
        width: 100%;
        text-align: center;
      }

      .heading-secondary {
        color: $white;
      }
      .btn-primary-wrapper {
        text-align: left;
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
