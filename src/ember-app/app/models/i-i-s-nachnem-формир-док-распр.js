import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормирДокРаспрMixin
} from '../mixins/regenerated/models/i-i-s-nachnem-формир-док-распр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормирДокРаспрMixin, Validations, {
});

defineProjections(Model);

export default Model;
