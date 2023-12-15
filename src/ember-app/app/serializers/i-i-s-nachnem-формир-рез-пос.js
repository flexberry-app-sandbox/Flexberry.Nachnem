import { Serializer as ФормирРезПосSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nachnem-формир-рез-пос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормирРезПосSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
