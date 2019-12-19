import React, { Component } from 'react';
import DeliveryListFilter from 'view/delivery/list/DeliveryListFilter';
import DeliveryListTable from 'view/delivery/list/DeliveryListTable';
import DeliveryListToolbar from 'view/delivery/list/DeliveryListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DeliveryListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.delivery.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.delivery.list.title')}
          </PageTitle>

          <DeliveryListToolbar />
          <DeliveryListFilter />
          <DeliveryListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DeliveryListPage;
