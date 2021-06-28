<template>
  <input
    id="kana"
    v-model.trim="kana"
    type="text"
    name="kana"
    placeholder="フリガナ"
    @blur="changeKana()"
  >
</template>
<script lang="ts">
import jaconv from 'jaconv'
export default {
  data () {
    return {
      kana: ''
    }
  },
  methods: {
    changeKana () {
      this.kana = this.kana.replace(/\s+/g, '')
      // eslint-disable-next-line no-irregular-whitespace
      if (this.kana.match(/^[ァ-ヶー　]+$/)) {

      // eslint-disable-next-line no-irregular-whitespace
      } else if (this.kana.match(/^[ぁ-んー　]+$/)) {
        // eslint-disable-next-line no-return-assign
        return this.kana = jaconv.toKatakana(this.kana)
      } else if (this.kana.match(/^[ｦ-ﾟ ]+$/)) {
        // eslint-disable-next-line no-return-assign
        return this.kana = jaconv.toZenKana(this.kana)
      } else {
        // eslint-disable-next-line no-return-assign
        return this.kana = ''
      }
    }
  }
}
</script>
