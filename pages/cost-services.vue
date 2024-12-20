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
              <p>Managing Anger Appropriately I (60 minutes) - $25</p>
              <p>Managing Anger Appropriately II (60 minutes) - $25</p>
              <p>Positively Parenting (60 minutes) - $25</p>
            </div>
          </div>
        </div>

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
.session-rate-content {
  background: $primary-color;
  color: $white;
  padding: 4rem 10%;
  margin-bottom: 4rem;
  h2 {
    color: white;
  }
  ul {
    padding-left: 4rem;
    @include respond(small-tab) {
      padding-left: 0;
    }
  }
  li {
    list-style-type: none;
  }
}
.self-pay-flex {
  display: flex;
  margin-top: 4rem;
  gap: 4rem;
  justify-content: space-between;
  @include respond(small-tab) {
    flex-direction: column;
  }
}
</style>
