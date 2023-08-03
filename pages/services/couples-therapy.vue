<template>
  <div>
    <PageHeader page-title="Couples Therapy" />
    <section class="section__content">
      <div class="container">
        <div class="grid">
          <ServiceLinks />
          <div class="couples-therapy__content">
            <div class="couples-therapy__img">
              <nuxt-img
                src="img/couples-therapy.jpg"
                alt="man and women sitting on couch laughing"
              />
            </div>
            <p>
              Gravity Counseling Group provides couples counseling to
              acknowledge and address specific areas of foundation upon which to
              build your relationship going forward. Couples should be willing
              to commit to 6-8 session in which you will identify strength and
              growth areas. As with individual counseling, the first session is
              considered intake and focuses primarily on information gathering.
              During this session, a program will be designed to address your
              specific needs. Each session is approximately 60 minutes, and you
              will be provided a safe space to resolve conflict and have your
              views explored. Together, clients will work with a professional to
              modify negative behavior, perceived fears, and anger. Throughout
              the process couples will engage in evidence based therapeutic
              technique to reach their outlined goals.
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
      title: 'Couples Therapy',
    })
  },
}
</script>

<style lang="scss">
.couples-therapy {
  &__img {
    margin-bottom: 2rem;
    img {
      width: 100%;
    }
  }
}
</style>
