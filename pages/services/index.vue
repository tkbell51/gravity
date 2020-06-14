<template>
  <div>
    <PageHeader
      page-title="Services"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__services">
      <div class="container">
        <ServicesGrid />
      </div>
    </section>

    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    ContactForm,
    PageHeader,
    ServicesGrid
  },
  head() {
    return {
      title: 'Services Gravity Counseling Group',
      meta: [
        {
          name: 'description',
          content: 'This is the services page for Gravity Counseling Group'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.services {
  text-decoration: none;
  p {
    color: $black;
  }
}
</style>
