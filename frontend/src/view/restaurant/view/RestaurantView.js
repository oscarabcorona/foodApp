import model from 'modules/restaurant/restaurantModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import CategoryViewItem from 'view/category/view/CategoryViewItem';

const { fields } = model;

class RestaurantView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <UserViewItem
          label={fields.employee.label}
          value={fields.employee.forView(record.employee)}
        />

        <CategoryViewItem
          label={fields.products.label}
          value={fields.products.forView(record.products)}
        />

        <TextViewItem
          label={fields.country.label}
          value={fields.country.forView(record.country)}
        />

        <TextViewItem
          label={fields.city.label}
          value={fields.city.forView(record.city)}
        />

        <TextViewItem
          label={fields.phoneNumber.label}
          value={fields.phoneNumber.forView(record.phoneNumber)}
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

export default RestaurantView;
