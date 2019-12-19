import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SellForm from 'view/sell/form/SellForm';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import actions from 'modules/sell/form/sellFormActions';
import selectors from 'modules/sell/form/sellFormSelectors';
import { connect } from 'react-redux';

class SellFormPage extends Component {
  state = {
    dispatched: false,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }

    this.setState({ dispatched: true });
  }

  doSubmit = (id, data) => {
    const { dispatch } = this.props;
    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.sell.edit.title')
      : i18n('entities.sell.new.title');
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.sell.menu'), '/sell'],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          {this.state.dispatched && (
            <SellForm
              saveLoading={this.props.saveLoading}
              findLoading={this.props.findLoading}
              record={
                this.isEditing() ? this.props.record : {}
              }
              isEditing={this.isEditing()}
              onSubmit={this.doSubmit}
              onCancel={() => getHistory().push('/sell')}
            />
          )}
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(SellFormPage);
