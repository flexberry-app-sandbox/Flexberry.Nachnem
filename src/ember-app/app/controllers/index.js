import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номенклатура.caption'),
          title: i18n.t('forms.application.sitemap.номенклатура.title'),
          children: [{
            link: 'i-i-s-nachnem-товары-l',
            caption: i18n.t('forms.application.sitemap.номенклатура.i-i-s-nachnem-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.номенклатура.i-i-s-nachnem-товары-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-об-организации.caption'),
          title: i18n.t('forms.application.sitemap.информация-об-организации.title'),
          children: [{
            link: 'i-i-s-nachnem-организация-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-организация-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-nachnem-список-барж-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-список-барж-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-nachnem-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-сотрудники-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-nachnem-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-пункт-погрузки-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-nachnem-клиенты-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-клиенты-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-nachnem-список-контей-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-nachnem-список-контей-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документация.caption'),
          title: i18n.t('forms.application.sitemap.документация.title'),
          children: [{
            link: 'i-i-s-nachnem-докум-поставки-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-докум-поставки-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-докум-поставки-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-nachnem-формир-док-распр-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-формир-док-распр-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-формир-док-распр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-nachnem-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-nachnem-формир-рез-пос-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})