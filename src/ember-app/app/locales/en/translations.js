import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNachnemДокумПоставкиLForm from './forms/i-i-s-nachnem-докум-поставки-l';
import IISNachnemКлиентыLForm from './forms/i-i-s-nachnem-клиенты-l';
import IISNachnemОрганизацияLForm from './forms/i-i-s-nachnem-организация-l';
import IISNachnemПунктПогрузкиLForm from './forms/i-i-s-nachnem-пункт-погрузки-l';
import IISNachnemСотрудникиLForm from './forms/i-i-s-nachnem-сотрудники-l';
import IISNachnemСписокБаржLForm from './forms/i-i-s-nachnem-список-барж-l';
import IISNachnemСписокКонтейLForm from './forms/i-i-s-nachnem-список-контей-l';
import IISNachnemТоварыLForm from './forms/i-i-s-nachnem-товары-l';
import IISNachnemФормирДокРаспрLForm from './forms/i-i-s-nachnem-формир-док-распр-l';
import IISNachnemФормирРезПосLForm from './forms/i-i-s-nachnem-формир-рез-пос-l';
import IISNachnemДокумПоставкиEForm from './forms/i-i-s-nachnem-докум-поставки-e';
import IISNachnemКлиентыEForm from './forms/i-i-s-nachnem-клиенты-e';
import IISNachnemОрганизацияEForm from './forms/i-i-s-nachnem-организация-e';
import IISNachnemПунктПогрузкиEForm from './forms/i-i-s-nachnem-пункт-погрузки-e';
import IISNachnemСотрудникиEForm from './forms/i-i-s-nachnem-сотрудники-e';
import IISNachnemСписокБаржEForm from './forms/i-i-s-nachnem-список-барж-e';
import IISNachnemСписокКонтейEForm from './forms/i-i-s-nachnem-список-контей-e';
import IISNachnemТоварыEForm from './forms/i-i-s-nachnem-товары-e';
import IISNachnemФормирДокРаспрEForm from './forms/i-i-s-nachnem-формир-док-распр-e';
import IISNachnemФормирРезПосEForm from './forms/i-i-s-nachnem-формир-рез-пос-e';
import IISNachnemДокумПоставкиModel from './models/i-i-s-nachnem-докум-поставки';
import IISNachnemИнфОЗаказеModel from './models/i-i-s-nachnem-инф-о-заказе';
import IISNachnemКлиентыModel from './models/i-i-s-nachnem-клиенты';
import IISNachnemОрганизацияModel from './models/i-i-s-nachnem-организация';
import IISNachnemПунктПогрузкиModel from './models/i-i-s-nachnem-пункт-погрузки';
import IISNachnemСотрудникиModel from './models/i-i-s-nachnem-сотрудники';
import IISNachnemСписокБаржModel from './models/i-i-s-nachnem-список-барж';
import IISNachnemСписокКонтейModel from './models/i-i-s-nachnem-список-контей';
import IISNachnemТоварыModel from './models/i-i-s-nachnem-товары';
import IISNachnemФормирДокРаспрModel from './models/i-i-s-nachnem-формир-док-распр';
import IISNachnemФормирРезПосModel from './models/i-i-s-nachnem-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-nachnem-докум-поставки': IISNachnemДокумПоставкиModel,
    'i-i-s-nachnem-инф-о-заказе': IISNachnemИнфОЗаказеModel,
    'i-i-s-nachnem-клиенты': IISNachnemКлиентыModel,
    'i-i-s-nachnem-организация': IISNachnemОрганизацияModel,
    'i-i-s-nachnem-пункт-погрузки': IISNachnemПунктПогрузкиModel,
    'i-i-s-nachnem-сотрудники': IISNachnemСотрудникиModel,
    'i-i-s-nachnem-список-барж': IISNachnemСписокБаржModel,
    'i-i-s-nachnem-список-контей': IISNachnemСписокКонтейModel,
    'i-i-s-nachnem-товары': IISNachnemТоварыModel,
    'i-i-s-nachnem-формир-док-распр': IISNachnemФормирДокРаспрModel,
    'i-i-s-nachnem-формир-рез-пос': IISNachnemФормирРезПосModel
  },

  'application-name': 'Nachnem',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Nachnem',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Nachnem',
          title: 'Nachnem'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика'
        },
        номенклатура: {
          caption: 'Номенклатура',
          title: 'Номенклатура',
          'i-i-s-nachnem-товары-l': {
            caption: 'Товары',
            title: 'Товары'
          }
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-nachnem-организация-l': {
            caption: 'Организация',
            title: 'Организация'
          },
          'i-i-s-nachnem-список-барж-l': {
            caption: 'Список барж',
            title: 'Список барж'
          },
          'i-i-s-nachnem-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-nachnem-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: 'Пункт погрузки'
          },
          'i-i-s-nachnem-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          },
          'i-i-s-nachnem-список-контей-l': {
            caption: 'Список контейнеров',
            title: 'Список контей'
          }
        },
        документация: {
          caption: 'Документация',
          title: 'Документация',
          'i-i-s-nachnem-докум-поставки-l': {
            caption: 'Документ поставки',
            title: 'Докум поставки'
          },
          'i-i-s-nachnem-формир-док-распр-l': {
            caption: 'Формирование документа распределения',
            title: 'Формир док распр'
          },
          'i-i-s-nachnem-формир-рез-пос-l': {
            caption: 'Формирование результатов поставки',
            title: 'Формир рез пос'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-nachnem-докум-поставки-l': IISNachnemДокумПоставкиLForm,
    'i-i-s-nachnem-клиенты-l': IISNachnemКлиентыLForm,
    'i-i-s-nachnem-организация-l': IISNachnemОрганизацияLForm,
    'i-i-s-nachnem-пункт-погрузки-l': IISNachnemПунктПогрузкиLForm,
    'i-i-s-nachnem-сотрудники-l': IISNachnemСотрудникиLForm,
    'i-i-s-nachnem-список-барж-l': IISNachnemСписокБаржLForm,
    'i-i-s-nachnem-список-контей-l': IISNachnemСписокКонтейLForm,
    'i-i-s-nachnem-товары-l': IISNachnemТоварыLForm,
    'i-i-s-nachnem-формир-док-распр-l': IISNachnemФормирДокРаспрLForm,
    'i-i-s-nachnem-формир-рез-пос-l': IISNachnemФормирРезПосLForm,
    'i-i-s-nachnem-докум-поставки-e': IISNachnemДокумПоставкиEForm,
    'i-i-s-nachnem-клиенты-e': IISNachnemКлиентыEForm,
    'i-i-s-nachnem-организация-e': IISNachnemОрганизацияEForm,
    'i-i-s-nachnem-пункт-погрузки-e': IISNachnemПунктПогрузкиEForm,
    'i-i-s-nachnem-сотрудники-e': IISNachnemСотрудникиEForm,
    'i-i-s-nachnem-список-барж-e': IISNachnemСписокБаржEForm,
    'i-i-s-nachnem-список-контей-e': IISNachnemСписокКонтейEForm,
    'i-i-s-nachnem-товары-e': IISNachnemТоварыEForm,
    'i-i-s-nachnem-формир-док-распр-e': IISNachnemФормирДокРаспрEForm,
    'i-i-s-nachnem-формир-рез-пос-e': IISNachnemФормирРезПосEForm
  },

});

export default translations;
