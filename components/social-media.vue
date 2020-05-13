<template>
  <div class="social-row">
    <facebook :url="url" scale="3"></facebook>
    <twitter :url="url" title="Check me on Github" scale="3"></twitter>
    <linkedin :url="url" scale="3"></linkedin>
    <email :url="url" subject="Hello" scale="3"></email>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  // Pinterest,
  // Reddit,
  // Telegram,
  // WhatsApp,
  // Google,
  Email
} from 'vue-socialmedia-share'
export default {
  components: {
    Facebook,
    Twitter,
    Linkedin,
    // Pinterest,
    // Reddit,
    // Telegram,
    // WhatsApp,
    // Google,
    Email
  }
}
</script>

<style lang="scss"></style>
