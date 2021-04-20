<template>
  <div id="main">
    <div class="form">
      <h1 class="form_title">STEP UI</h1>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            氏名のUI
          </div>
          <div class="form_input">
            <KanjiInput />
          </div>
        </div>
        <p class="form_text">
          氏名を入力した際、フリガナに自動入力されるUI。
        </p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            フリガナのUI
          </div>
          <div class="form_input">
            <KanaInput />
          </div>
        </div>
        <p class="form_text">
          ひらがなをカタカナ、半角を全角カナへ変換するUI。<br>
          その他の文字種は削除する。
        </p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            郵便番号のUI
          </div>
          <div class="form_input">
            <ZipInput />
          </div>
        </div>
        <p class="form_text">
          郵便番号や電話番号で使えるUI。<br>
          全角を半角へ変換。ハイフン、スペースを取り除く。
        </p>
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
        <p class="form_text">

        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import KanjiInput from '@/components/atoms/KanjiInput.vue'
import KanaInput from '@/components/atoms/KanaInput.vue'
import ZipInput from '@/components/atoms/ZipInput.vue'

export default {
  components: {
    KanjiInput,
    KanaInput,
    ZipInput,
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
