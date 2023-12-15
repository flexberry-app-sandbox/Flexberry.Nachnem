import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормирРезПосMixin
} from '../mixins/regenerated/models/i-i-s-nachnem-формир-рез-пос';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормирРезПосMixin, Validations, {
});

defineProjections(Model);

export default Model;
