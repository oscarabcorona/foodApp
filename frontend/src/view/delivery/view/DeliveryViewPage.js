import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DeliveryView from 'view/delivery/view/DeliveryView';
import { i18n } from 'i18n';
import actions from 'modules/delivery/view/deliveryViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/delivery/view/deliveryViewSelectors';
import DeliveryViewToolbar from 'view/delivery/view/DeliveryViewToolbar';

class DeliveryPage extends Component {
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
            [i18n('entities.delivery.menu'), '/delivery'],
            [i18n('entities.delivery.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.delivery.view.title')}
          </PageTitle>

          <DeliveryViewToolbar match={this.props.match} />

          <DeliveryView
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

export default connect(select)(DeliveryPage);
