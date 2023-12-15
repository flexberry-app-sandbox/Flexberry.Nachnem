import { Serializer as ФормирДокРаспрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nachnem-формир-док-распр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормирДокРаспрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
