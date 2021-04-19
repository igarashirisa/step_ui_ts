<template>
    <input type="text" name="kana" placeholder="フリガナ" id="kana" v-model.trim="kana" @blur="changeKana()">
</template>
<script lang="ts">
import jaconv from 'jaconv';
export default {
    data() {
        return {
            kana: ''
        }
    },
    methods: {
        changeKana() {
            this.kana = this.kana.replace(/\s+/g, '')
            if(this.kana.match(/^[ァ-ヶー　]+$/)) {
                return
            } else if (this.kana.match(/^[ぁ-んー　]+$/)) {
                return this.kana = jaconv.toKatakana(this.kana)
            } else if(this.kana.match(/^[ｦ-ﾟ ]+$/)) {
                return this.kana = jaconv.toZenKana(this.kana)
            } else {
                return this.kana = ""
            }
        }
    }
}
</script>
