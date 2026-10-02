<template>
  <div class="page">
    <div class="overlay"></div>
    <SiteHeader />
    <div class="main-content"><slot /></div>
    <ContactForm />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '@/components/header.vue'
import SiteFooter from '@/components/footer.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm,
    SiteHeader,
    SiteFooter,
  },
}
</script>
