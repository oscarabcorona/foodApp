import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SellView from 'view/sell/view/SellView';
import { i18n } from 'i18n';
import actions from 'modules/sell/view/sellViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/sell/view/sellViewSelectors';
import SellViewToolbar from 'view/sell/view/SellViewToolbar';

class SellPage extends Component {
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
            [i18n('entities.sell.menu'), '/sell'],
            [i18n('entities.sell.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sell.view.title')}
          </PageTitle>

          <SellViewToolbar match={this.props.match} />

          <SellView
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

export default connect(select)(SellPage);
