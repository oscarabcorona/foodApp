import model from 'modules/order/orderModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import CategoryViewItem from 'view/category/view/CategoryViewItem';
import ProductViewItem from 'view/product/view/ProductViewItem';

const { fields } = model;

class OrderView extends Component {
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

        <ProductViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.quantity.label}
          value={fields.quantity.forView(record.quantity)}
        />

        <TextViewItem
          label={fields.observation.label}
          value={fields.observation.forView(record.observation)}
        />

        <TextViewItem
          label={fields.table.label}
          value={fields.table.forView(record.table)}
        />

        <UserViewItem
          label={fields.employee.label}
          value={fields.employee.forView(record.employee)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
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

export default OrderView;
