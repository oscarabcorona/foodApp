import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CategoryView from 'view/category/view/CategoryView';
import { i18n } from 'i18n';
import actions from 'modules/category/view/categoryViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/category/view/categoryViewSelectors';
import CategoryViewToolbar from 'view/category/view/CategoryViewToolbar';

class CategoryPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.category.menu'), '/category'],
            [i18n('entities.category.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.category.view.title')}
          </PageTitle>

          <CategoryViewToolbar match={this.props.match} />

          <CategoryView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(CategoryPage);
