import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-nachnem-состоян-заказа'),
  удовлКлиента: DS.attr('i-i-s-nachnem-уд-кл'),
  формирДокРаспр: DS.belongsTo('i-i-s-nachnem-формир-док-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-nachnem-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-nachnem-формир-рез-пос.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-nachnem-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКлиента: {
    descriptionKey: 'models.i-i-s-nachnem-формир-рез-пос.validations.удовлКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирДокРаспр: {
    descriptionKey: 'models.i-i-s-nachnem-формир-рез-пос.validations.формирДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-nachnem-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличиеДеф: attr('Наличие дефектов', { index: 2 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 3 })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-nachnem-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличиеДеф: attr('Наличие дефектов', { index: 2 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 3 })
  });
};
