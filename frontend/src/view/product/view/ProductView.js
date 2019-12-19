import model from 'modules/product/productModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import CategoryViewItem from 'view/category/view/CategoryViewItem';

const { fields } = model;

class ProductView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <CategoryViewItem
          label={fields.category.label}
          value={fields.category.forView(record.category)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.price.label}
          value={fields.price.forView(record.price)}
        />

        <ImagesViewItem
          label={fields.photo.label}
          value={fields.photo.forView(record.photo)}
        />

        <TextViewItem
          label={fields.stock.label}
          value={fields.stock.forView(record.stock)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
        />

        <TextViewItem
          label={fields.productionCost.label}
          value={fields.productionCost.forView(record.productionCost)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </div>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default ProductView;
