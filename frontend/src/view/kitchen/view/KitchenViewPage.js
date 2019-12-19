import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import KitchenView from 'view/kitchen/view/KitchenView';
import { i18n } from 'i18n';
import actions from 'modules/kitchen/view/kitchenViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/kitchen/view/kitchenViewSelectors';
import KitchenViewToolbar from 'view/kitchen/view/KitchenViewToolbar';

class KitchenPage extends Component {
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
            [i18n('entities.kitchen.menu'), '/kitchen'],
            [i18n('entities.kitchen.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kitchen.view.title')}
          </PageTitle>

          <KitchenViewToolbar match={this.props.match} />

          <KitchenView
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

export default connect(select)(KitchenPage);
