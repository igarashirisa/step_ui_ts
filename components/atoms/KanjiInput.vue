<template>
    <input type="text" name="kanji" placeholder="漢字" id="kanji" v-model.trim="kanji" @change="autoKanji()">
</template>
<script lang="ts">
import jaconv from 'jaconv';
export default {
    data() {
        return {
            kanji: ''
        }
    },
    methods: {
        autoKanji() {
            
        }
    }
}
</script>
