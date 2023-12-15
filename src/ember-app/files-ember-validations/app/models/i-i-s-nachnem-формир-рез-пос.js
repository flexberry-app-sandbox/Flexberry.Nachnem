import {
  defineNamespace,
  defineProjections,
  Model as ФормирРезПосMixin
} from '../mixins/regenerated/models/i-i-s-nachnem-формир-рез-пос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормирРезПосMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
