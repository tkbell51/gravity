<template>
  <div>
    <PageHeader
      page-title="Contact Us"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'
export default {
  components: {
    ContactForm,
    PageHeader
  },
  head() {
    return {
      title: 'Contact Gravity Counseling Group',
      meta: [
        {
          name: 'description',
          content: 'This is the contact page for Gravity Counseling Group'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
