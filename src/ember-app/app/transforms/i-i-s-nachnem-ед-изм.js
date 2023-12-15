import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдИзмEnum from '../enums/i-i-s-nachnem-ед-изм';

export default FlexberryEnum.extend({
  enum: ЕдИзмEnum,
  sourceType: 'IIS.Nachnem.ЕдИзм'
});
