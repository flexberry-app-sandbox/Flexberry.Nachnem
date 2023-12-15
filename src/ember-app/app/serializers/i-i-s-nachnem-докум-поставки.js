import { Serializer as ДокумПоставкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nachnem-докум-поставки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокумПоставкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
