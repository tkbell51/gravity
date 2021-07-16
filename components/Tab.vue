<template>
  <div class="tab" :class="{ active: isActive }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isActive: undefined,
    }
  },
  fetch() {
    this.isActive = false
  },
}
</script>

<style lang="scss">
.tab {
  height: inherit;
  position: absolute;
  width: 100%;
  opacity: 0;
  &.active {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
