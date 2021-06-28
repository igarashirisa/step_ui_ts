<template>
  <input
    id="kanji"
    v-model.trim="kanji"
    type="text"
    name="kanji"
    placeholder="漢字"
    @change="autoKanji()"
  >
</template>
<script lang="ts">
import * as AutoKana from 'vanilla-autokana'
export default {
  data () {
    return {
      kanji: ''
    }
  },
  methods: {
    autoKanji () {

    }
  }
}
</script>
