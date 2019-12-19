import React, { Component } from 'react';
import KitchenListFilter from 'view/kitchen/list/KitchenListFilter';
import KitchenListTable from 'view/kitchen/list/KitchenListTable';
import KitchenListToolbar from 'view/kitchen/list/KitchenListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class KitchenListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.kitchen.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kitchen.list.title')}
          </PageTitle>

          <KitchenListToolbar />
          <KitchenListFilter />
          <KitchenListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KitchenListPage;
