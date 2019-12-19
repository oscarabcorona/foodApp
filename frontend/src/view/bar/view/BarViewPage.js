import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import BarView from 'view/bar/view/BarView';
import { i18n } from 'i18n';
import actions from 'modules/bar/view/barViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/bar/view/barViewSelectors';
import BarViewToolbar from 'view/bar/view/BarViewToolbar';

class BarPage extends Component {
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
            [i18n('entities.bar.menu'), '/bar'],
            [i18n('entities.bar.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.bar.view.title')}
          </PageTitle>

          <BarViewToolbar match={this.props.match} />

          <BarView
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

export default connect(select)(BarPage);
