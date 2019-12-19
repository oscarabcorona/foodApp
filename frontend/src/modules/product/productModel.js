import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.product.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.product.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: new RelationToOneField('category', label('category'), {}),
  name: new StringField('name', label('name'), {
    "max": 255
  }),
  price: new DecimalField('price', label('price'), {}),
  photo: new ImagesField('photo', label('photo'), 'product/photo',{}),
  stock: new IntegerField('stock', label('stock'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Inventory', label: enumeratorLabel('status', 'Inventory') },
    { id: 'Order', label: enumeratorLabel('status', 'Order') },
    { id: 'Bar', label: enumeratorLabel('status', 'Bar') },
    { id: 'Kitchen', label: enumeratorLabel('status', 'Kitchen') },
    { id: 'CheckOut', label: enumeratorLabel('status', 'CheckOut') },
    { id: 'Sell', label: enumeratorLabel('status', 'Sell') },
  ],{}),
  productionCost: new IntegerField('productionCost', label('productionCost'), {}),
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
  priceRange: new DecimalRangeField(
    'priceRange',
    label('priceRange'),
  ),
  stockRange: new IntegerRangeField(
    'stockRange',
    label('stockRange'),
  ),
  productionCostRange: new IntegerRangeField(
    'productionCostRange',
    label('productionCostRange'),
  ),
};

export default {
  fields,
};
