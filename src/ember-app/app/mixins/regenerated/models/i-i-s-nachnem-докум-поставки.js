import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокПост: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-nachnem-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-nachnem-организация', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-nachnem-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-nachnem-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокПост: {
    descriptionKey: 'models.i-i-s-nachnem-докум-поставки.validations.номерДокПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-nachnem-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-nachnem-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-nachnem-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-nachnem-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-nachnem-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 3, hidden: true }),
      адресПоставки: attr('Адрес поставки', { index: 4 }),
      телефон: attr('Телефон', { index: 5 })
    }, { index: 2, displayMemberPath: 'заказчик' }),
    организация: belongsTo('i-i-s-nachnem-организация', 'Наименование организации', {
      наимОрганиз: attr('', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наимОрганиз' }),
    инфОЗаказе: hasMany('i-i-s-nachnem-инф-о-заказе', 'Информация о заказе', {
      количество: attr('Количество', { index: 0 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-nachnem-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-nachnem-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-nachnem-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
