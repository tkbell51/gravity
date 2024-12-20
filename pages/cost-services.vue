<template>
  <div>
    <PageHeader
      page-title="Cost of Services"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__insurance-logos">
      <div class="container">
        <h2 class="heading-secondary">Accepted Insurances</h2>
        <div class="insurance-grid">
          <figure
            v-for="(image, index) in images"
            :key="index"
            class="insurance-grid__item"
          >
            <img
              :src="image.pathLong"
              :alt="image.pathShort"
              class="insurance-grid__img"
            />
          </figure>
        </div>
      </div>
    </section>
    <section class="section__session-rates">
      <div class="container">
        <div class="session-rate-content">
          <h2 class="heading-secondary">Therapy Session Rates</h2>
          <p>
            At the Gravity Counseling Group, we prioritize transparency in the
            cost of care. Our 50-minute therapy session rates range from $175 to
            $225. We accept several payment options, including:
          </p>
          <ul>
            <li>
              <p>
                Self pay/Cash, ACH Debit or Credit (Client can receive care
                without needing a mental health diagnosis or worrying about
                session limits set by insurance companies, ensuring therapy
                continues until you're ready to discharge. Additionally, mental
                health records cannot be used by insurance companies to raise
                premiums or deny future coverage.)
              </p>
            </li>
            <li>
              <p>
                Insurance reimbursement  (We are in-network healthcare providers
                for several insurance carriers. Check for your insurance logo on
                this page to see if we are  in-network with your carrier. To
                qualify for insurance benefits, services must be deemed
                medically necessary, which requires your mental health
                professional to establish a diagnosis.)
              </p>
            </li>
            <li>
              <p>
                HSA or FSA payments (Health Savings Account/Flexible Savings
                Account)
              </p>
            </li>
          </ul>
          <div class="self-pay-flex">
            <div>
              <h3 class="heading-tertiary">PRIVATE Self-Pay Sessions</h3>
              <p>Individual/Family Therapy Intake (60-90 minutes)- $225</p>
              <p>Couples Therapy Intake (60-90 minutes) - $225</p>
              <p>
                Individual/Family Therapy with a Licensed Therapist (50 minutes)
                - $175
              </p>
              <p>Couples Therapy session (50 minutes) - $175</p>
            </div>
            <div>
              <h3 class="heading-tertiary">GROUP Self Pay Sessions</h3>
              <p>Men's Wellness Group (90 minutes) - $FREE</p>
              <p>Managing Anger Appropriately II (60 minutes) - $25</p>
              <p>Managing Anger Appropriately II (60 minutes) - $25</p>
              <p>Positively Parenting (60 minutes) - $25</p>
            </div>
          </div>
        </div>
        <h2 class="heading-secondary">Cancellation Policy</h2>
        <p>
          For your convenience, Gravity Counseling Group provides optional text
          reminders to help you stay informed about your upcoming appointments.
          Please note, if you miss a scheduled therapy session without notifying
          our office at least 24 hours in advance to cancel or reschedule, a $50
          fee will be charged. This fee is not covered by insurance and applies
          to late cancellations or no-show appointments. Thank you for your
          understanding and cooperation.
        </p>

        <h2 class="heading-secondary">Good Faith Estimate</h2>
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
        <p>
          By collaborating with you, our mental health professionals ensure that
          treatment plans align with your goals, preferences, and financial
          needs, creating a supportive and informed therapeutic experience.
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
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.importAll(require.context('../assets/img/insurance/', true, /|.jpeg$/))
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({
          pathLong: r(key),
          pathShort: key.replace(/\.[^/.]+$/, '').replace('./', ''),
        })
      )
    },
  },
  head() {
    return this.$seo({
      title: 'Cost of Services',
    })
  },
}
</script>

<style lang="scss">
.insurance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 3rem;
  place-items: center;
  &__item {
  }
  &__img {
    width: 100%;
    height: auto;
  }
}
.section {
  &__insurance-logos,
  &__session-rates {
    padding: 0;
    margin: 4rem 0;
    .heading-secondary {
      text-align: center;
      display: block;
      margin-bottom: 1rem;
    }
  }
}
.self-pay-flex {
  display: flex;
  margin: 2rem 0;
  gap: 4rem;
  justify-content: space-between;
}
</style>
