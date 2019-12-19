import React, { Component } from 'react';
import CategoryListFilter from 'view/category/list/CategoryListFilter';
import CategoryListTable from 'view/category/list/CategoryListTable';
import CategoryListToolbar from 'view/category/list/CategoryListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CategoryListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.category.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.category.list.title')}
          </PageTitle>

          <CategoryListToolbar />
          <CategoryListFilter />
          <CategoryListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CategoryListPage;
