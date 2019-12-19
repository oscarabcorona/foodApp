import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.category.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  restaurant: new RelationToOneField('restaurant', label('restaurant'), {
    "required": true
  }),
  name: new StringField('name', label('name'), {
    "max": 255
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export default {
  fields,
};
