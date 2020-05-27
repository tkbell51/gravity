<template>
  <div class="resource__grid">
    <a v-for="item in items" :key="item.id" :href="`${item.link}`">
      <img :src="`${item.imgSrc}`" :alt="`{item.imgAlt}`" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          link: '',
          imgSrc: './assets/img/may-',
          imgAlt: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
