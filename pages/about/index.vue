<template>
  <div>
    <PageHeader page-title="About" />
    <section class="section__welcome">
      <div class="container">
        <div class="welcome">
          <div class="welcome__text">
            <h2 class="heading-secondary">
              Welcome to Gravity Counseling Group
            </h2>
            <p class="welcome__tagline">Grounded Support for Life's Journey</p>
            <p>
              At Gravity Counseling Group, we provide compassionate, accessible
              mental health care tailored to help you navigate life's
              challenges. Located in the heart of Greenwood, South Carolina, our
              practice is dedicated to creating a safe, collaborative, and
              supportive environment where individuals, youth, and families can
              grow and thrive.
            </p>
          </div>
          <div class="welcome__img">
            <img
              src="~/assets/img/gcg-online.jpg"
              alt="Person typing on a laptop"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section__teaching">
      <div class="container">
        <h2 class="heading-secondary">A Modern Teaching Practice</h2>
        <p>
          Gravity Counseling Group is actively transitioning into a
          <strong>teaching practice</strong>. We focus on blending
          evidence-based cognitive strategies, active learning, and inclusive
          pedagogical frameworks to bridge abstract clinical theory with
          real-world application.
        </p>
        <p>
          Our team approaches care by viewing every client as
          <strong>capable, socially connected, and goal-driven</strong>. Our
          clinicians serve as
          <strong>active educators, collaborators, and analysts</strong>. We
          focus on <strong>future goals, birth order, and lifestyle
          patterns.</strong> We utilize
          <strong>structured assessments, lifestyle analysis, and action
          plans</strong>
          to foster meaningful growth.
        </p>
        <p>
          Our collaborative, multi-tiered team structure ensures high-quality
          care across all levels of professional development:
        </p>
        <div class="tiers">
          <div v-for="tier in tiers" :key="tier.title" class="tiers__card">
            <h3 class="heading-tertiary">{{ tier.title }}</h3>
            <p>{{ tier.text }}</p>
          </div>
        </div>
        <nuxt-link class="btn" to="/about/team">Meet the Team</nuxt-link>
      </div>
    </section>

    <section class="section__approach">
      <div class="container">
        <h2 class="heading-secondary">
          What to Expect from Our Adlerian Approach
        </h2>
        <p>
          When you partner with our counseling team, you experience a
          goal-oriented therapeutic journey built on these key pillars:
        </p>
        <div class="pillars">
          <div v-for="pillar in pillars" :key="pillar.title" class="pillars__card">
            <h3 class="heading-tertiary">{{ pillar.title }}</h3>
            <p>{{ pillar.text }}</p>
          </div>
        </div>
        <p>
          Our counselors take a <strong>direct, educational role</strong> by
          actively challenging beliefs, gently highlighting blind spots, and
          designing "homework" and action plans to support tangible behavioral
          change outside of your sessions.
        </p>
      </div>
    </section>

    <section class="section__first-step">
      <div class="container">
        <h2 class="heading-secondary">Take the First Step</h2>
        <p>
          Prioritizing your mental health is one of the most meaningful
          decisions you can make. Reach out today to learn more about our
          services or to schedule your initial appointment. Contact us today to
          check availability and accepted insurance plans.
        </p>
      </div>
      <ContactRow />
      <div class="container first-step__cta">
        <SimplePractice />
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import ContactRow from '@/components/ContactRow.vue'
import SimplePractice from '@/components/SimplePractice.vue'

usePageSeo({
  title: 'About',
  description:
    'Gravity Counseling Group provides compassionate, accessible mental health care in Greenwood, South Carolina, with a goal-oriented Adlerian approach and a multi-tiered teaching practice.',
})

const tiers = [
  {
    title: 'Licensed Clinicians & Clinical Supervisors',
    text: 'Experienced practitioners providing direct clinical care, advanced supervision, and pedagogical guidance.',
  },
  {
    title: 'Pre-Licensed Clinicians',
    text: 'Highly trained professionals working under direct supervision toward full independent licensure.',
  },
  {
    title: 'Clinical Interns',
    text: 'Energetic graduate-level trainees gaining hands-on clinical experience while bringing fresh academic insights and accessible care options to our community.',
  },
]

const pillars = [
  {
    title: 'Holistic View',
    text: 'We view you as a whole person rather than a collection of symptoms, exploring how your mind, body, and social environment interact.',
  },
  {
    title: 'Goal-Directed',
    text: 'We believe your behavior is driven by your future goals and aspirations, not solely shaped by past experiences.',
  },
  {
    title: 'Belonging',
    text: 'We place strong emphasis on your relationships and how deeply connected you feel to your community, workplace, and family.',
  },
  {
    title: 'Lifestyle Assessment',
    text: 'We actively explore early childhood memories and family dynamics to map out lifestyle patterns you use to navigate the world.',
  },
]
</script>

<style lang="scss">
.section__welcome {
  .welcome {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 4rem;
    align-items: center;
    @include respond(small-tab) {
      grid-template-columns: 1fr;
    }

    &__tagline {
      font-family: 'Nanum Myeongjo';
      font-style: italic;
      font-size: 2.2rem;
      color: $accent-color;
    }

    &__img img {
      width: 100%;
      border-radius: $border-radius;
      box-shadow: $shadow;
    }
  }
  .heading-secondary {
    margin-bottom: 1rem;
  }
}

.section__teaching,
.section__approach {
  .heading-secondary {
    margin-bottom: 2rem;
  }
}

.section__teaching {
  background: rgba($tertiary-color, 0.25);
  .btn {
    margin-top: 1rem;
  }
}

.tiers,
.pillars {
  display: grid;
  grid-gap: 2rem;
  margin: 3rem 0;

  &__card {
    background: $white;
    border-radius: $border-radius;
    box-shadow: $shadow;
    padding: 2.5rem;

    .heading-tertiary {
      color: $primary-color;
      margin-bottom: 1rem;
      line-height: 1.4;
    }
    p {
      margin-bottom: 0;
    }
  }
}

.tiers {
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  &__card {
    border-top: 4px solid $accent-color;
  }
}

.pillars {
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  &__card {
    border-left: 4px solid $primary-color;
  }
}

.section__first-step {
  padding-bottom: 0;
  .heading-secondary {
    margin-bottom: 2rem;
  }
  .section__contact-row {
    padding: 4rem 0;
  }
  .first-step__cta {
    text-align: center;
    padding-bottom: 7rem;
  }
}
</style>
