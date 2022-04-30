<template>
  <div>
    <PageHeader page-title="Anger Management" />
    <section class="section__content">
      <div class="container">
        <div class="grid">
          <ServiceLinks />
          <div class="anger-management__content">
            <div class="anger-management__img">
              <nuxt-img
                src="/img/anger-management.jpg"
                alt="man holding heading"
              />
            </div>
            <p>
              Group Gravity Counseling Group provides a 12 week anger management
              program called Managing Anger Appropriately (MAAP). MAAP combines
              the following resources: Anger Management for Substance Abuse and
              Mental Health Clients: A Cognitive Behavioral Therapy Manual,
              media outlets (social and traditional), role play, and group
              exercises from multiple platforms. The service is provided in a
              group and classroom setting every Saturday at 9am. Individuals can
              attend classes online, through video. Each class is 60 minutes
              long and led by group facilitator(s) who will give participants
              several appropriate self-management techniques including problem
              solving, social skills training, and behavior modification. If you
              recognize yourself or someone you know has a problem with anger,
              schedule an appointment today.
            </p>
            <p>
              Group Gravity Counseling Group also provides a 26 week batterer's
              intervention program combining the following resources: Emerge
              Counseling and Education to Stop Domestic Violence workbook, media
              outlets (social and traditional), role play, and group exercises
              from multiple platforms. The service is provided in a group and
              classroom setting every Wednesday from 6:30-8pm. Each class is
              approximately 90 minutes long and led by group facilitator(s) who
              will give participants several appropriate self-management
              techniques including conflict resolution, communication skills
              training, and defining healthy relationships. Gravity is an
              approved provider with the State of South Carolina Batterer
              Intervention and Treatment Programs as approved by South
              Carolina's Circuit Solicitors. If you or a loved one need help
              establishing healthy relationships and eliminating domestic
              violence, schedule an appointment today.
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
  .anger-management {
    &__img {
      margin-bottom: 2rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>
