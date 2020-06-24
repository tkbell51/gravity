<template>
  <div>
    <PageHeader
      page-title="Services"
      sub-page-title="Couples Therapy"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__content">
      <div class="container">
        <p>
          Gravity Counseling Group provides couples counseling to acknowledge
          and address specific areas of foundation upon which to build your
          relationship going forward. Couples should be willing to commit to 6-8
          session in which you will identify strength and growth areas. As with
          individual counseling, the first session is considered intake and
          focuses primarily on information gathering. During this session, a
          program will be designed to address your specific needs. Each session
          is approximately 60 minutes, and you will be provided a safe space to
          resolve conflict and have your views explored. Together, clients will
          work with a professional to modify negative behavior, perceived fears,
          and anger. Throughout the process couples will engage in evidence
          based therapeutic technique to reach their outlined goals.
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
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import SimplePractice from '@/components/SimplePractice'
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    PageHeader,
    ServicesGrid,
    SimplePractice
  }
}
</script>

<style lang="scss"></style>
