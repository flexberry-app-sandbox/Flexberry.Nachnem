import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИОСотр: DS.attr('string')
});

export let ValidationRules = {
  фИОСотр: {
    descriptionKey: 'models.i-i-s-nachnem-сотрудники.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-nachnem-сотрудники', {
    фИОСотр: attr('Ф и о сотр', { index: 0 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-nachnem-сотрудники', {
    фИОСотр: attr('Ф и о сотр', { index: 0 })
  });
};
