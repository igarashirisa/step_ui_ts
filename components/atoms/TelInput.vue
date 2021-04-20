<template>
    <input type="tel" name="tel" placeholder="電話番号" id="tel" maxlength="13" v-model.trim="tel" @blur="changeTel()">
</template>
<script lang="ts">
import jaconv from 'jaconv';
export default {
    data() {
        return {
            tel: ''
        }
    },
    methods: {
        changeTel() {
            this.tel = this.tel.replace(/[\u002D\u30FC\u2010\u2011\u2013\u2014\u2015\u2212\uFF70\uFF0D]/g, '').replace(/\s+/g, '')

            if(this.tel.match(/^[０-９]+$/)) {
                return this.tel = jaconv.toHan(this.tel)
            }
        }
    }
}
</script>
