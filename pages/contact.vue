<template>
  <div>
    <PageHeader page-title="Contact Us" header-text="Contact Us" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  components: {
    PageHeader,
  },
  setup() {
    usePageSeo({ title: 'Contact' })
  },
}
</script>

<style lang="scss"></style>
