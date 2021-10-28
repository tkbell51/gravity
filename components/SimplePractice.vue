<template>
  <a
    :href="$config.appLink"
    class="btn"
    target="_blank"
    :data-spwidget-scope-id="$config.scopeID"
    :data-spwidget-scope-uri="$config.scopeURI"
    :data-spwidget-application-id="$config.appID"
    data-spwidget-scope-global
    data-spwidget-autobind
    ><span>Request Appointment</span></a
  >
</template>

<script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
<script>
export default {}
</script>

<style lang="scss"></style>
