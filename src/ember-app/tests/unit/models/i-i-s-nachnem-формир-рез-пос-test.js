import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-nachnem-формир-рез-пос', 'Unit | Model | i-i-s-nachnem-формир-рез-пос', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-nachnem-докум-поставки',
    'model:i-i-s-nachnem-инф-о-заказе',
    'model:i-i-s-nachnem-клиенты',
    'model:i-i-s-nachnem-организация',
    'model:i-i-s-nachnem-пункт-погрузки',
    'model:i-i-s-nachnem-сотрудники',
    'model:i-i-s-nachnem-список-барж',
    'model:i-i-s-nachnem-список-контей',
    'model:i-i-s-nachnem-товары',
    'model:i-i-s-nachnem-формир-док-распр',
    'model:i-i-s-nachnem-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
