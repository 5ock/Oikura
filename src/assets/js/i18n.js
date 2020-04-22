import Vue from 'vue';
import VueI18N from 'vue-i18n'

Vue.use(VueI18N);

function getLang() {
    let langList = ['en-us', 'zh-tw', 'ja-jp'];
    let presetLang = 'en-us';
    let browserLang = null;

    // check browser language
    if(navigator.appName == 'Netscape') {
        browserLang = navigator.language;
    } else {
        browserLang = navigator.bowerLanguage;
    }
    browserLang = browserLang.toLowerCase();

    // for(let i in langList) {
    //     if(browserLang == langList[i]) {
    //         presetLang = browserLang;
    //     }
    // }

    return presetLang;
}

const i18n = new VueI18N({
    locale: getLang(),
    messages: {
        'zh-tw': require('../langs/tw.json'),
        'en-us': require('../langs/us.json'),
        'ja-jp': require('../langs/jp.json'),
    }
});

export default i18n;