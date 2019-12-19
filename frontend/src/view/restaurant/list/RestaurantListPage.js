import React, { Component } from 'react';
import RestaurantListFilter from 'view/restaurant/list/RestaurantListFilter';
import RestaurantListTable from 'view/restaurant/list/RestaurantListTable';
import RestaurantListToolbar from 'view/restaurant/list/RestaurantListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class RestaurantListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.restaurant.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.restaurant.list.title')}
          </PageTitle>

          <RestaurantListToolbar />
          <RestaurantListFilter />
          <RestaurantListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default RestaurantListPage;
