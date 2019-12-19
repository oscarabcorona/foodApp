import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.kitchen.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.kitchen.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: new RelationToManyField('category', label('category'), {}),
  name: new RelationToManyField('name', label('name'), {}),
  employee: new RelationToOneField('employee', label('employee'), {}),
  quantity: new IntegerField('quantity', label('quantity'), {}),
  observation: new StringField('observation', label('observation'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Inventory', label: enumeratorLabel('status', 'Inventory') },
    { id: 'Order', label: enumeratorLabel('status', 'Order') },
    { id: 'Bar', label: enumeratorLabel('status', 'Bar') },
    { id: 'Kitchen', label: enumeratorLabel('status', 'Kitchen') },
    { id: 'CheckOut', label: enumeratorLabel('status', 'CheckOut') },
    { id: 'Sell', label: enumeratorLabel('status', 'Sell') },
  ],{}),
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
  quantityRange: new IntegerRangeField(
    'quantityRange',
    label('quantityRange'),
  ),
};

export default {
  fields,
};
