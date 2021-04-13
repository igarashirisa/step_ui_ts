import $ from 'jquery';
'use strict'


class StepUi {
    private static esc(str: string) {
        return str
            .replace('.', '\\.')
            .replace('[', '\\[')
            .replace(']', '\\]')
    }
    public static shiftKanaAuto(attr: any) {
        // カタカナへの自動変換
        return function (){
            let text = $(attr).val().toString().split('').map(function(cstr: string){
                let c = cstr.charCodeAt(0)
                if (12540 == c || (12449 <= c && c <= 12534)){
                    // 全角カタカナ(0x30A1 - 0x30F6 (12449 - 12534))、伸ばし棒(12540)だった場合、そのまま
                    return String.fromCharCode(c);
                } else if (12353 <= c && c <= 12438){
                    // 全角ひらがな(0x3041 - 0x3096 (12353 - 12438))だった場合、変換して返す
                    // 全角ひらがな → 全角カタカナは +0x60(96)
                    return String.fromCharCode(c + 96);
                } else {
                    // その他文字だった場合、無視
                    return "";
                }
            }).join("")
            // 変換後のテキストを設定
            $(attr).val(text)
        }
    }
    public static shiftSpaceAuto(target: any) {
        // 全角半角スペースを削除
        const text = (<string>$(target).val()).replace(/\s+/g, '')
        $(target).val(text)
    }
}