<template>
  <div>
    <PageHeader page-title="Individual Therapy" />
    <section class="section__content">
      <div class="container">
        <div class="grid">
          <ServiceLinks />
          <div>
            <div class="ind-therapy">
              <div class="ind-therapy__text">
                <div class="ind-therapy__img">
                  <img
                    src="~/assets/img/teletherapy-photo.jpg"
                    alt="Woman sitting on couch looking at laptop"
                  />
                </div>
                <p>
                  Gravity Counseling Group provides individual counseling
                  services in uptown Greenwood, SC. The first session is
                  considered intake and focuses primarily on information
                  gathering. Over the next two to three sessions we will
                  established a rapport and begin to develop an idea of your
                  goals and what you will like to accomplish in therapy. While
                  it is important for you to expediently meet your goals, it is
                  more important for you to feel good about the work being done
                  and to see yourself moving in the right direction. Each person
                  is unique, and comes to therapy for different reasons
                  therefore the amount sessions and frequency is heavily
                  influenced by you. Each session is approximately 60 minutes,
                  structured, confidential, and collaborative. We will always
                  welcome questions and feedback throughout the therapeutic
                  process.
                </p>
                <SimplePractice />
              </div>
            </div>
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
      title: 'Individual Therapy',
    })
  },
}
</script>

<style lang="scss">
.ind-therapy {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-gap: 3rem;

  &__img {
    width: 25rem;
    margin-right: 2rem;
    float: left;
    img {
      width: 100%;
    }
  }
}
</style>
