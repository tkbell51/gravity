<template>
  <div>
    <PageHeader
      page-title="Services"
      sub-page-title="Anger Management"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__content">
      <div class="container">
        <p>
          Group Gravity Counseling Group provides a 12 week anger management
          program combining the following resources: Emerge Counseling and
          Education to Stop Domestic Violence workbook, Anger Management for
          Mental Health Clients workbook, Media outlets (social and
          traditional), role play, and group exercises from multiple platforms.
          The service is provided in a group and classroom setting every
          Saturday. Each class is 60 minutes long and led by group facilitators
          who will give participants several appropriate self-management
          techniques including problem solving, social skills training, and
          behavior modification. If you recognize yourself or someone you know
          has a problem with anger schedule an appointment today.
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
    <!-- <ContactForm /> -->
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
// import ContactForm from '@/components/ContactForm'
import SimplePractice from '@/components/SimplePractice'
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    PageHeader,
    // ContactForm,
    ServicesGrid,
    SimplePractice
  }
}
</script>

<style lang="scss"></style>
