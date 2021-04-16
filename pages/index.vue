<template>
  <div id="main">
    <div class="form">
      <h1 class="form_title">STEP UI</h1>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            フリガナのUI
          </div>
          <div class="form_input">
            <KanaInput />
          </div>
        </div>
        <p class="form_text"></p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            郵便番号のUI
          </div>
          <div class="form_input">
            <input type="tel" name="zip" placeholder="郵便番号" id="zip" maxlength="8">
          </div>
        </div>
        <p class="form_text">
          主に郵便番号で使えるUI。<br>
          全角を半角へ変換。ハイフンを取り除く。
        </p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            電話番号のUI
          </div>
          <div class="form_input">
            <input type="tel" name="tel" placeholder="電話番号" id="tel" maxlength="13">
          </div>
        </div>
        <p class="form_text"></p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            メールアドレスのUI
          </div>
          <div class="form_input">
            <input type="text" name="mail" placeholder="メールアドレス" id="mail">
          </div>
        </div>
        <p class="form_text"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import KanaInput from '@/components/atoms/KanaInput.vue'

export default {
  components: {
    KanaInput,
  }
}
</script>

<style lang="scss">
#main {
  margin: 0 auto;
  padding: 30px 0;
  width: 1020px;

  .form {
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

    &_inner {
      margin: 0 auto 20px;
      border: 4px solid #ddd;
      border-radius: 3px;
      overflow: hidden;
      width: 860px;
      background-color: #fff;
    }

    &_subTitle {
      padding: 3px 0;
      display: flex;
      align-items: center;
      width: 270px;
      font-weight: 600;
      color: #333;
      box-sizing: border-box;
    }

    &_item {
      padding: 15px 20px;
      display: flex;
      border-bottom: dotted 1px #777;
    }

    &_text {
      padding: 10px 20px;
    }
  }
}

</style>
