<template>
  <div v-show="isActive" class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  fetch() {
    this.isActive = false
  },
  data() {
    return {
      isActive: undefined
    }
  }
}
</script>

<style lang="scss">
.tab {
  height: inherit;
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
