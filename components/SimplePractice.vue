<template>
  <a
    :href="$config.public.appLink"
    class="btn"
    target="_blank"
    :data-spwidget-scope-id="$config.public.scopeId || undefined"
    :data-spwidget-scope-uri="$config.public.scopeURI"
    :data-spwidget-application-id="$config.public.appID"
    data-spwidget-scope-global
    data-spwidget-autobind
    ><span>Request Appointment</span></a
  >
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
