import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.restaurant.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "max": 255,
    "required": true
  }),
  employee: new RelationToManyField('employee', label('employee'), {}),
  products: new RelationToManyField('products', label('products'), {}),
  country: new StringField('country', label('country'), {
    "max": 255
  }),
  city: new StringField('city', label('city'), {
    "max": 300
  }),
  phoneNumber: new IntegerField('phoneNumber', label('phoneNumber'), {
    "max": 8
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
  phoneNumberRange: new IntegerRangeField(
    'phoneNumberRange',
    label('phoneNumberRange'),
  ),
};

export default {
  fields,
};
