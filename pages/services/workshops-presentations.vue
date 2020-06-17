<template>
  <div>
    <PageHeader
      page-title="Services"
      sub-page-title="Workshops &amp; Presentations"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__content">
      <div class="container">
        <p>
          Gravity Counseling Group has experience providing excellent public
          speaking in various settings. Our therapists have presented
          psychoeducation on various aspects of mental health and led workshops
          on parenting and anger management. Additionally, we has offered talks
          to small intimate groups geared toward inspiring others. Topics
          include but are not limited to: Mental Health Issues (teens and adult
          males), Gain and Maintain (Good Mental Health), Slowing Down to Live
          Better (living with anxiety), You Make Me Better (Healthy
          Relationships), The Dos and Don’ts of Breakup, Positively Parenting,
          Parenting Teens with Anxiety, and more.
        </p>
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
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    PageHeader,
    ContactForm,
    ServicesGrid
  }
}
</script>

<style lang="scss"></style>
