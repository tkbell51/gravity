<template>
  <div>
    <PageHeader page-title="Meet the Team" />
    <section class="section__team">
      <div class="container">
        <p class="team__intro">
          Our collaborative, multi-tiered team structure ensures high-quality
          care across all levels of professional development. Get to know the
          clinicians who will partner with you on your journey.
        </p>
        <div v-for="group in groups" :key="group.key" class="team__group">
          <h2 class="heading-secondary">{{ group.label }}</h2>
          <div class="team__grid">
            <TeamCard
              v-for="member in group.members"
              :key="member.path"
              :member="member"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import TeamCard from '@/components/TeamCard.vue'

usePageSeo({
  title: 'Meet the Team',
  description:
    'Meet the licensed clinicians, pre-licensed clinicians, and clinical interns at Gravity Counseling Group in Greenwood, South Carolina.',
})

const { data: members } = await useAsyncData('team', () =>
  queryCollection('team')
    .select('path', 'name', 'credentials', 'role', 'tier', 'order', 'img')
    .order('order', 'ASC')
    .all()
)

// Tiers with nobody in them yet are hidden
const groups = computed(() =>
  TEAM_TIERS.map((tier) => ({
    ...tier,
    members: members.value.filter((member) => member.tier === tier.key),
  })).filter((group) => group.members.length)
)
</script>

<style lang="scss">
.section__team {
  .team__intro {
    max-width: 80rem;
    margin-bottom: 4rem;
  }
  .team__group {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
    .heading-secondary {
      margin-bottom: 3rem;
    }
  }
  .team__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-gap: 3rem;
  }
}
</style>
