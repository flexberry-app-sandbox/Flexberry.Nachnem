import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимКонтей: DS.attr('string'),
  номерКонтей: DS.attr('string')
});

export let ValidationRules = {
  наимКонтей: {
    descriptionKey: 'models.i-i-s-nachnem-список-контей.validations.наимКонтей.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКонтей: {
    descriptionKey: 'models.i-i-s-nachnem-список-контей.validations.номерКонтей.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокКонтейE', 'i-i-s-nachnem-список-контей', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 })
  });

  modelClass.defineProjection('СписокКонтейL', 'i-i-s-nachnem-список-контей', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 })
  });
};
