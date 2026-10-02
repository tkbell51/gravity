<template>
  <div class="page">
    <div class="overlay"></div>
    <SiteHeader class="blog" />
    <div class="main-content"><slot /></div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/header.vue'
import SiteFooter from '@/components/footer.vue'
export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>

<style lang="scss" scoped></style>
