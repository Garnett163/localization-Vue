import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          title: 'Hello',
          welcome: 'Welcome to Your Vue.js App',
          descr:
            'For a guide and recipes on how to configure / customize ' +
            'this project,<br>check out the ' +
            '<a href="https://cli.vuejs.org" target="_blank" ' +
            'rel="noopener">vue-cli documentation</a>.',
        },
      },
      de: {
        translation: {
          title: 'Hallo GERMAN',
          welcome: 'Willkommen zu Deiner Vue.js App',
          descr:
            'Eine Anleitung und Rezepte zum Konfigurieren/Anpassen ' +
            'dieses Projekts findest du<br>in der ' +
            '<a href="https://cli.vuejs.org" target="_blank" ' +
            'rel="noopener">vue-cli-Dokumentation</a>.',
        },
      },
      ru: {
        translation: {
          title: 'Привет',
          welcome: 'Добро пожаловать в Vue.js App',
          descr:
            'Руководство и рецепты для настройки/настраивания ' +
            'этого проекта,<br>прочитайте ' +
            '<a href="https://cli.vuejs.org" target="_blank" ' +
            'rel="noopener">vue-cli Документацию</a>.',
        },
      },
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
