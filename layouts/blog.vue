<template>
  <div class="page">
    <div class="overlay"></div>
    <Header class="blog" />
    <nuxt class="main-content" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped></style>
