import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import RestaurantView from 'view/restaurant/view/RestaurantView';
import { i18n } from 'i18n';
import actions from 'modules/restaurant/view/restaurantViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/restaurant/view/restaurantViewSelectors';
import RestaurantViewToolbar from 'view/restaurant/view/RestaurantViewToolbar';

class RestaurantPage extends Component {
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
            [i18n('entities.restaurant.menu'), '/restaurant'],
            [i18n('entities.restaurant.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.restaurant.view.title')}
          </PageTitle>

          <RestaurantViewToolbar match={this.props.match} />

          <RestaurantView
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

export default connect(select)(RestaurantPage);
