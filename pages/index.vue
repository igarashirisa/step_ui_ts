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
            <input
              id="kanji"
              v-model="kanji"
              type="text"
              name="kanji"
              placeholder="漢字"
              @input="changeKanji"
            >
          </div>
        </div>
        <p class="form_text">
          文字を入力し、フリガナを自動入力させるUI。
        </p>
      </div>
      <div class="form_inner">
        <div class="form_item">
          <div class="form_subTitle">
            フリガナのUI
          </div>
          <div class="form_input">
            <input
              id="kana"
              v-model.trim="kana"
              type="text"
              name="kana"
              placeholder="フリガナ"
              @blur="changeKana()"
            >
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
            <MailInput />
          </div>
        </div>
        <p class="form_text">
          ドメイン入力補助UI<br>
          @を入力すると指定したドメイン一覧が表示される。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import jaconv from 'jaconv'
import * as AutoKana from 'vanilla-autokana'
import ZipInput from '@/components/atoms/ZipInput.vue'
import MailInput from '@/components/atoms/MailInput.vue'

let autokana: AutoKana.AutoKana

export default {
  components: {
    ZipInput,
    MailInput
  },
  data () {
    return {
      kanji: '',
      kana: '',
      history: []
    }
  },
  mounted () {
    autokana = AutoKana.bind('#kanji', '#kana', { katakana: true })
  },
  methods: {
    changeKanji () {
      this.kana = autokana.getFurigana()
    },
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
