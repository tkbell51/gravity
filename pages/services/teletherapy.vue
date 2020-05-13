<template>
  <div>
    <PageHeader
      page-title="Services"
      sub-page-title="Teletherapy"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__content">
      <div class="teletherapy">
        <div class="container">
          <div class="teletherapy__box">
            <div class="teletherapy__img">
              <img
                src="../../assets/img/teletherapy-photo.jpg"
                alt="Woman sitting on couch looking at laptop"
              />
            </div>
            <div>
              <p>
                Gravity Counseling Group offers effective online therapy that is
                convenient and secure. Individuals and couples can receive help
                from the comfort of their own homes as we provide the
                opportunity to participate in video through telehealth powered
                by SimplePractice. During the intake session, we will determine
                what approach will be best for you and proceed accordingly.
              </p>
              <SimplePractice />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary">Services</h2>
        <hr class="gcg-border" />
        <ServicesGrid />

        <nuxt-link class="btn" to="services">View Services</nuxt-link>
      </div>
    </section>
    <ContactForm />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import SimplePractice from '@/components/SimplePractice'
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    PageHeader,
    ContactForm,
    ServicesGrid,
    SimplePractice
  }
}
</script>

<style lang="scss">
.teletherapy {
  &__box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    grid-gap: 3rem;
  }
  &__img {
    img {
      width: 100%;
    }
  }
}
</style>
