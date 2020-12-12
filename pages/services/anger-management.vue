<template>
  <div>
    <PageHeader page-title="Anger Management" />
    <section class="section__content">
      <div class="container">
        <div class="grid">
          <ServiceLinks />
          <div>
            <p>
              Group Gravity Counseling Group provides a 12 week anger management
              program combining the following resources: Emerge Counseling and
              Education to Stop Domestic Violence workbook, Anger Management for
              Mental Health Clients workbook, Media outlets (social and
              traditional), role play, and group exercises from multiple
              platforms. The service is provided in a group and classroom
              setting every Saturday. Each class is 60 minutes long and led by
              group facilitators who will give participants several appropriate
              self-management techniques including problem solving, social
              skills training, and behavior modification. If you recognize
              yourself or someone you know has a problem with anger schedule an
              appointment today.
            </p>
            <SimplePractice />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import SimplePractice from '@/components/SimplePractice'
import ServiceLinks from '@/components/ServiceLinks'

export default {
  components: {
    PageHeader,
    ServiceLinks,
    SimplePractice,
  },
  head() {
    return this.$seo({
      title: 'Anger Management',
    })
  },
}
</script>

<style lang="scss">
.section__content {
  p {
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 30rem 1fr;
    grid-gap: 4rem;
    @include respond(small-tab) {
      grid-template-columns: 1fr;
      .services-links {
        display: none;
      }
    }
  }
}
</style>
