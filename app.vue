<template>
  <NuxtLoadingIndicator color="#fff" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} - Gravity Counseling Group` : 'Gravity Counseling Group',
})
</script>
