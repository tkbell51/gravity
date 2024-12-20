<template>
  <div>
    <PageHeader
      page-title="Cancellation Policy"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section>
      <div class="container">
        <p>
          For your convenience, Gravity Counseling Group provides optional text
          reminders to help you stay informed about your upcoming appointments.
          Please note, if you miss a scheduled therapy session without notifying
          our office at least 24 hours in advance to cancel or reschedule, a $50
          fee will be charged. This fee is not covered by insurance and applies
          to late cancellations or no-show appointments. Thank you for your
          understanding and cooperation.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  components: {
    PageHeader,
  },
  head() {
    return this.$seo({
      title: 'Cancellation Policy',
    })
  },
}
</script>

<style lang="scss"></style>
