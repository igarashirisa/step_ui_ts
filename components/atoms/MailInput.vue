<template>
  <EmailDropdown :domains="domains" :default-domains="defaultDomains" placeholder="メールアドレス" />
</template>
<script lang="ts">
import EmailDropdown from 'vue-email-dropdown'
import 'vue-email-dropdown/dist/vue-email-dropdown.css'
export default {
  components: {
    EmailDropdown
  },
  data () {
    return {
      domains: [
      ],
      defaultDomains: ['gmail.com', 'hotmail.com', 'msn.com', 'outlook.com', 'yahoo.com']
    }
  }
}
</script>

<style lang="scss">
.email-dropdown-wrapper input[data-v-3d11e900] {
  padding: 8px;
  border: 2px solid #aaa;
  border-radius: 4px;
  width: 310px;
  color: #333;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
}
</style>
