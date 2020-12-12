<template>
  <div>
    <PageHeader page-title="Support Groups" />
    <section class="section__content">
      <div class="container">
        <div class="grid">
          <ServiceLinks />
          <div>
            <p>
              It is important to understand, despite what you are going through,
              you are not alone. Gravity Counseling Group provides opportunities
              for groups of people to gather and give emotional support. In
              regular intervals we provide education on specific topics and
              encourage everyone to share their own experiences regarding the
              topic at hand. Through support of family and friends, many can
              adapt and experience life to the fullest.
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
      title: 'Support Groups',
    })
  },
}
</script>

<style lang="scss"></style>
