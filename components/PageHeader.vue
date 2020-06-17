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
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.page__header {
  background-image: linear-gradient(
      to right,
      rgba($black, 0.3) 0%,
      rgba($black, 0.3) 100%
    ),
    url('../assets/img/bridge-on-the-lake.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 60vh;
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

  img {
    @include absCenter;
    z-index: 10;
    opacity: 0.2;
    filter: blur(1px);
  }
}
</style>
