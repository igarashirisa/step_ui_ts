<template>
  <div id="main">
    <div class="sample">
      <div class="sample_title">調査用のサンプル</div>
      <InstagramUi />
    </div>
  </div>
</template>

<script lang="ts">
import InstagramUi from '@/components/molecules/InstagramUi.vue'

export default {
  components: {
    InstagramUi,
  }
}
</script>

<style lang="scss">
#main {
  margin: 0 auto;
  padding: 30px 0;
  width: 1020px;

  .sample {
    &_title {
      margin-bottom: 15px;
      padding: 13px 15px;
      background-color: #2a65b7;
      border-radius: 3px;
      line-height: 1;
      font-size: 163%;
      font-weight: 700;
      color: #fff;
    }
  }
}

</style>
