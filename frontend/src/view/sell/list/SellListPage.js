import React, { Component } from 'react';
import SellListFilter from 'view/sell/list/SellListFilter';
import SellListTable from 'view/sell/list/SellListTable';
import SellListToolbar from 'view/sell/list/SellListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SellListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.sell.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sell.list.title')}
          </PageTitle>

          <SellListToolbar />
          <SellListFilter />
          <SellListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SellListPage;
