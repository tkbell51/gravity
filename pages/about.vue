<template>
  <div>
    <PageHeader
      page-title="About"
      header-text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis?"
    />
    <section class="section__about-page">
      <div class="container">
        <div class="about-page">
          <div class="about-page__img">
            <img
              src="../assets/img/kervin-searles.png"
              alt="Kervin Searles smiling"
            />
          </div>
          <div class="about-page__text">
            <h2 class="heading-secondary">Kervin K. Searles, LPC-A</h2>

            <p>
              I love being a therapist. I have always had a desire to help
              people. For me there is no better way to give assistance than to
              develop a nonjudgmental and transformative space for people to
              come and share their experience. My past experience in therapy
              allows me to help with excessive worry, depression, and
              relationship issues. Although, I have worked with a wide range of
              diagnoses and treatment goals, my greatest passion is aiding women
              experiencing anxiety, stress, and significant life transitions.
            </p>
            <p>
              One of the biggest predictor of success in therapy is the
              relationship you have with your therapist. Before you book an
              appointment let me give you some quick tidbits about me:
            </p>
            <p>
              <em>Clinically</em> -I know multiple treatment modalities and I am
              able to discuss your life in clinical terms. However, I talk in
              layman's terms and typically use only a few evidence-based options
              which include cognitive behavioral therapy, reality therapy,
              acceptance and commitment therapy. As a trained professional, I
              can identify the problem but I do not solve them. I give you
              additional insight and options that you consider and hopefully
              make the appropriate decisions to provoke and sustain necessary
              change.
            </p>
            <p>
              <em>Personally</em> - I love learning so I study and research all
              things psychology and mental health in blogs, podcasts, articles,
              and publications. Although I love to learn, I love living and
              experiencing life more. So I take days off and away from the
              office to enjoy time with my wife and kids. I have a strong
              affinity for Albert Ellis, Converse, Michael Jordan, Tar Heel
              basketball, Starbucks, Kanye West, Clemson football, Kenneth
              Clark, socks, Bruno Mars, my extended family, Kirk Franklin,
              myself, and God. (not necessarily in that order)
            </p>
            <p>
              In conclusion, as a Licensed Professional Counselor – Associate, I
              am working towards completing the two year required supervision to
              gain full licensure. I receive supervision from Giovanna Burgess,
              who is a Licensed Professional Counselor and Supervisor for the
              state of South Carolina. I have a Bachelor’s Degree in Psychology
              from Anderson University and a Master’s Degree in Counseling
              Psychology from Troy University. My own work experience has
              afforded me the opportunity to provide behavior modification,
              therapy and facilitate workshops. I look forward to working with
              you and exploring how we can get you to a place where you can feel
              content with
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__services">
      <div class="container">
        <h2 class="heading-secondary">Services</h2>

        <ServicesGrid />

        <nuxt-link class="btn" to="services">View Services</nuxt-link>
      </div>
    </section>
    <!-- <ContactForm /> -->
  </div>
</template>

<script>
// import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'
import ServicesGrid from '@/components/ServicesGrid'
export default {
  components: {
    // ContactForm,
    PageHeader,
    ServicesGrid
  },
  head() {
    return {
      title: 'About Gravity Counseling Group',
      meta: [
        {
          name: 'description',
          content: 'This is the page about Gravity Counseling Group'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.about-page {
  display: flex;
  // @include respond(tab-port) {
  //   width: 80%;
  // }
  // @include respond(phone) {
  //   width: 90%;
  //   justify-content: center;
  // }
  @include respond(small-tab) {
    flex-direction: column;
  }

  &__img {
    flex: 35%;
    margin-right: 2rem;
    @include respond(small-tab) {
      margin: 0 auto;
      text-align: center;
      margin-bottom: 2rem;
      flex: 100%;
    }

    img {
      width: 100%;

      @include respond(small-tab) {
        width: 90%;
        text-align: center;
      }
    }
  }

  &__text {
    flex: 45%;
  }
}
</style>
