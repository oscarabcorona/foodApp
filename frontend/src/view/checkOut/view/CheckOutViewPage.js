import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CheckOutView from 'view/checkOut/view/CheckOutView';
import { i18n } from 'i18n';
import actions from 'modules/checkOut/view/checkOutViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/checkOut/view/checkOutViewSelectors';
import CheckOutViewToolbar from 'view/checkOut/view/CheckOutViewToolbar';

class CheckOutPage extends Component {
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
            [i18n('entities.checkOut.menu'), '/check-out'],
            [i18n('entities.checkOut.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.checkOut.view.title')}
          </PageTitle>

          <CheckOutViewToolbar match={this.props.match} />

          <CheckOutView
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

export default connect(select)(CheckOutPage);
