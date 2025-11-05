<template>
  <div>
    <PageHeader page-title="Undrafted and Purposed" />
    <section class="section__intro">
      <div class="container">
        <div class="two-columns">
          <div class="two-columns__img">
            <img
              src="../static/img/undrafted.png"
              alt="Undrafted and Purposed book"
              width="500"
            />
          </div>

          <div class="section__intro--text">
            <h2 class="heading-secondary">Undrafted. Still Chosen</h2>
            <p>Not drafted by the world's standards.</p>
            <p>Not defined by stereotypes</p>
            <p>Not limited by silence.</p>
            <p>
              This is the journey of living, loving, and leading with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__description">
      <div class="container">
        <h3 class="heading-tertiary">
          You may not have been chosen by the world’s standards,<br />
          but you are purposed and very much needed.
        </h3>
        <div>
          <p>
            Undrafted & Purposed is a powerful and practical guide designed for
            men—especially Black men—who are tired of playing less than
            standard. If you’ve ever felt unseen, misunderstood, or stuck in
            patterns that no longer serve you, this book is your call to rise,
            reflect, and reclaim your position in life.
          </p>
        </div>
      </div>
    </section>
    <section class="section__shift">
      <div class="container">
        <h2 class="heading-secondary">Three Shifts That Change Everything</h2>
        <div class="icon-row">
          <div class="card">
            <p class="heading-tertiary">Awareness</p>
            <p>See the patterns behind your pain.</p>
          </div>
          <div class="card">
            <p class="heading-tertiary">Commitment</p>
            <p>Live with integrity, consistency, and vision</p>
          </div>
          <div class="card">
            <p class="heading-tertiary">Connection</p>
            <p>Build the bonds that keep you grounded.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section__video">
      <div class="container">
        <div class="two-columns">
          <!-- <video src="../assets/video.mp4" controls></video> -->
          <div class="section__video--text">
            <h2 class="heading-secondary">For the man who...</h2>
            <ul>
              <li>Feels unseen but knows he carries value.</li>
              <li>Balances strength with silent struggles.</li>
              <li>Wants to lead with more than titles or stats.</li>
              <li>Believes there's more to life than surviving.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section__quote">
      <div class="container">
        <p class="quote heading-tertiary">
          You Don't Have To Be An Athlete to live like a champion
        </p>
        <p class="name">- Kervin Searles</p>
      </div>
    </section>
    <section class="section__pages">
      <div class="container">
        <div class="two-columns">
          <div class="two-columns__img">
            <img
              src="../static/img/undrafted-1.png"
              alt="Undrafted and Purposed book"
              width="500"
            />
          </div>
          <div>
            <h2 class="heading-secondary">
              What You'll Gain Inside These Pages
            </h2>
            <ul>
              <li>
                <strong>Clarity</strong> - Identify the hidden patterns holding
                you back.
              </li>
              <li>
                <strong>Healing</strong> - Transform pain into purpose with
                practical exercises.
              </li>
              <li>
                <strong>Connection</strong> - Build brotherhood, belonging, and
                healthy relationships.
              </li>
              <li>
                <strong>Leadership</strong> - Lead yourself and others with
                integrity and confidence
              </li>
            </ul>
            <p>
              This book goes beyond motivation - it gives you tools for real
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="heading-secondary">About the Author</h2>
        <p>
          <strong>Kervin Searles</strong> is a Licensed Professional Counselor,
          speaker, and mental health advocate dedicated to helping men live with
          clarity and purpose. With over a decade of experience, he has guided
          countless individuals through trauma, major life transitions, and the
          challenging work of breaking generational cycles to build healthier,
          more meaningful relationships.
        </p>
        <p>
          Kervin holds a Bachelor of Arts in Psychology from Anderson University
          and a Masters of Science in Counseling Psychology from Troy
          University. He is part owner of Gravity Counseling Group, a practice
          that blends clinical expertise with real-life strategies to empower
          individuals to heal without shame and embrace strength through
          vulnerability.
        </p>
        <p>
          Outside the therapy room, Kervin is a keynote speaker, facilitates
          workshops, leads community programs, and produces Speaking with
          Gravity—a podcast that normalizes open, practical conversations about
          mental health. He is deeply committed to creating spaces where Black
          men feel seen, heard, and equipped to grow.
        </p>
        <p>
          When he’s not counseling, Kervin enjoys spending time with his wife
          and four children, mentoring youth, watching sports, and staying
          involved in faith-based community initiatives that uplift and inspire
          others.
        </p>
        <p>
          Kervin believes every man deserves the chance to heal, grow, and build
          a life rooted in truth, trust, and love.
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
  head() {
    return this.$seo({
      title: 'Undrafted and Purposed',
    })
  },
}
</script>

<style lang="scss">
.section {
  &__intro {
    &--text {
      flex: 75%;
    }
  }
  &__description {
    h3 {
      text-align: center;
      margin-inline: auto;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
  }
  &__quote {
    background: $gradient;
    height: 35rem;
    color: white;

    .quote {
      font-size: 5rem;
    }
    .name {
      font-size: 2rem;
    }
  }
  &__shift {
    .heading-secondary {
      display: block;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  &__video {
    &--text {
      margin-left: 2rem;
      flex: 50%;
    }
  }
}
.two-columns {
  display: flex;
  align-items: center;
  gap: 1rem;
  video {
    width: 50%;
  }
  &__img {
    flex: 25%;
  }
}
.icon-row {
  display: flex;
  justify-content: center;
  gap: 2rem;

  .card {
    flex: 32%;
    text-align: center;
    transition: all 0.4s;
    border-radius: 6px;
    box-shadow: 0px 5px 10px rgba($tertiary-color, 0.8);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .heading-tertiary {
      color: $primary-color;
    }
    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -8px 8px $primary-color;
    }
  }
}
</style>
