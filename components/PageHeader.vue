<template>
  <section class="page__header">
    <div class="page__header--content">
      <h1 class="heading-primary">
        <span>{{ pageTitle }}</span
        ><span>{{ subPageTitle }}</span>
      </h1>
    </div>
    <img src="../assets/img/logo-white.png" alt="Logo" />
  </section>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'Title'
    },
    subPageTitle: {
      type: String
      // default: 'Sub Title'
    }
  }
}
</script>

<style lang="scss">
.page__header {
  background: $gradient;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 40vh;
  &--content {
    width: 90%;
    text-align: center;
  }
  .heading-primary {
    @include respond(phone) {
      letter-spacing: 0.2rem;
    }
  }
  .heading-primary span {
    display: block;

    // &:last-child:after {
    //   content: '/';
    //   color: $accent-color;
    //   margin: 0 1rem;
    // }
  }

  .gcg-border {
    margin: 0 auto;
    width: inherit;
  }
  img {
    @include absCenter;
    z-index: 10;
    opacity: 0.2;
    filter: blur(1px);
  }
}
</style>
