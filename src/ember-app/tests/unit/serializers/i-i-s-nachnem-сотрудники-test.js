import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-nachnem-сотрудники', 'Unit | Serializer | i-i-s-nachnem-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-nachnem-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-nachnem-ед-изм',
    'transform:i-i-s-nachnem-состоян-заказа',
    'transform:i-i-s-nachnem-уд-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
