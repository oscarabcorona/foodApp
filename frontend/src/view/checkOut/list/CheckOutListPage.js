import React, { Component } from 'react';
import CheckOutListFilter from 'view/checkOut/list/CheckOutListFilter';
import CheckOutListTable from 'view/checkOut/list/CheckOutListTable';
import CheckOutListToolbar from 'view/checkOut/list/CheckOutListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CheckOutListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.checkOut.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkOut.list.title')}
          </PageTitle>

          <CheckOutListToolbar />
          <CheckOutListFilter />
          <CheckOutListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CheckOutListPage;
