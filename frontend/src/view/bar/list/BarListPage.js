import React, { Component } from 'react';
import BarListFilter from 'view/bar/list/BarListFilter';
import BarListTable from 'view/bar/list/BarListTable';
import BarListToolbar from 'view/bar/list/BarListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class BarListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.bar.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.bar.list.title')}
          </PageTitle>

          <BarListToolbar />
          <BarListFilter />
          <BarListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default BarListPage;
