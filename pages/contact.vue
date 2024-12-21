<template>
  <div>
    <PageHeader page-title="Contact Us" header-text="Contact Us" />
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
      title: 'Contact',
    })
  },
}
</script>

<style lang="scss"></style>
