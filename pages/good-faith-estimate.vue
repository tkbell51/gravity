<template>
  <div>
    <PageHeader
      page-title="Good Faith Estimate"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__good-faith">
      <div class="container">
        <p>
          Effective January 1, 2022, the "No Surprises Act" (Section 2799B-6 of
          the Public Health Service Act) requires healthcare providers to offer
          a Good Faith Estimate for the cost of out-of-network care.
        </p>
        <ul>
          <li>
            <p>
              You are entitled to a Good Faith Estimate explaining the total
              expected cost of non-emergency services or items.
            </p>
          </li>
          <li>
            <p>
              Providers must supply this estimate if requested before scheduling
              services.
            </p>
          </li>
          <li>
            <p>
              It’s essential to save a copy or picture of your Good Faith
              Estimate for your records.
            </p>
          </li>
        </ul>
        <p>
          For additional information about your rights under the No Surprises
          Act:
        </p>
        <ul>
          <li>
            <p>
              Vist
              <a
                href="http://www.cms.gov/nosurprises"
                title="No Surprises Act"
                target="_blank"
                >www.cms.gov/nosurprises</a
              >
            </p>
          </li>
          <li>
            <p>
              Contact South Carolina Department of Insurance at
              <a
                href="tel:803-737-6160"
                title="South Carolina Department of Insurance"
                >803-737-6160</a
              >
            </p>
          </li>
        </ul>
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
      title: 'Good Faith Estimate',
    })
  },
}
</script>

<style lang="scss">
.section__good-faith {
  ul {
    list-style-type: none;
  }
}
</style>
