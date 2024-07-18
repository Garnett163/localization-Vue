<template>
  <h1>{{ $t('title') }}</h1>
  <!-- <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
  </div> -->

  <div class="hello">
    <h2>{{ $t('welcome') }}</h2>
    <p v-html="$t('descr')"></p>
    <hr />
    <div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
          <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
            {{ languages[lng].nativeName }}
          </a>
          <strong v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </strong>
          <span v-if="index < Object.keys(languages).length - 1">&nbsp;|&nbsp;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslationShowCase',
  data() {
    return {
      languages: {
        en: { nativeName: 'English' },
        de: { nativeName: 'Deutsch' },
        ru: { nativeName: 'Русский' },
      },
    };
  },
};
</script>

<style></style>

<!-- 
resp = HttpRequest(targetUrl, 'post', soapXml, auth);
      HttpRequest ( 'http://reg.datex-soft.com/' );
      HttpRequest ( 'http://reg.datex-soft.com/login.htm', 'post', UrlEncodeQuery ( {login:'xxx',password:'xxx'} ) );
      HttpRequest( 'http://reg.datex-soft.com/login.htm', 'post', '111', 'Content-type: text/xml\nIgnore-Errors: 1\n' );
      Response = HttpRequest( sServiceUrl, 'post', strRequest, 'Ignore-Errors: 0\nContent-type: text/xml\nSOAPAction: http://www.e-staff.ru/soap/' + 'GetEvents' ); -->
