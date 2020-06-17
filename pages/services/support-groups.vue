<template>
  <div>
    <PageHeader
      page-title="Services"
      sub-page-title="Support Groups"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__content">
      <div class="container">
        <p>
          It is important to understand, despite what you are going through, you
          are not alone. Gravity Counseling Group provides opportunities for
          groups of people to gather and give emotional support. In regular
          intervals we provide education on specific topics and encourage
          everyone to share their own experiences regarding the topic at hand.
          Through support of family and friends, many can adapt and experience
          life to the fullest.
        </p>
        <SimplePractice />
      </div>
    </section>
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary">Services</h2>

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

<style lang="scss"></style>
