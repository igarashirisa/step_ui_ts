<template>
  <input
    id="zip"
    v-model.trim="zip"
    type="tel"
    name="zip"
    placeholder="郵便番号"
    maxlength="8"
    @blur="changeZip()"
  >
</template>
<script lang="ts">
import jaconv from 'jaconv'
export default {
  data () {
    return {
      zip: ''
    }
  },
  methods: {
    changeZip () {
      this.zip = this.zip.replace(/[\u002D\u30FC\u2010\u2011\u2013\u2014\u2015\u2212\uFF70\uFF0D]/g, '').replace(/\s+/g, '')

      if (this.zip.match(/^[０-９]+$/)) {
        // eslint-disable-next-line no-return-assign
        return this.zip = jaconv.toHan(this.zip)
      }
    }
  }
}
</script>
