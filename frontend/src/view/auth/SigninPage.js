import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import Content from 'view/auth/styles/Content';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import SigninPageWrapper from 'view/auth/styles/SigninPageWrapper';
import I18nFlags from 'view/layout/I18nFlags';
import InputFormItem, {
  InputFormItemNotFast,
} from 'view/shared/form/items/InputFormItem';
import FormSchema from 'view/shared/form/formSchema';
import {
  Checkbox,
  FormControlLabel,
  Box,
  Button,
  Tooltip,
} from '@material-ui/core';
import SocialButtons from 'view/auth/styles/SocialButtons';

const { fields } = model;

class SigninPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    fields.rememberMe,
  ]);

  componentDidMount() {
    this.clearErrorMessage();
  }

  handleChange(event, form) {
    if (this.props.errorMessage) {
      this.clearErrorMessage();
    }

    form.handleChange(event);
  }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };

  initialValues = () => {
    return { email: '', password: '', rememberMe: true };
  };

  doSigninWithSocial = (provider, rememberMe) => {
    const { dispatch } = this.props;
    dispatch(actions.doSigninSocial(provider, rememberMe));
  };

  doSubmit = ({ email, password, rememberMe }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  render() {
    return (
      <SigninPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <form onSubmit={form.handleSubmit}>
                <InputFormItemNotFast
                  name={fields.email.name}
                  label={fields.email.label}
                  autoComplete={fields.email.name}
                  autoFocus
                  errorMessage={this.props.errorMessage}
                  form={form}
                />

                <InputFormItem
                  name={fields.password.name}
                  label={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        id={fields.rememberMe.name}
                        name={fields.rememberMe.name}
                        checked={form.values.rememberMe}
                        onChange={form.handleChange}
                        color="primary"
                      />
                    }
                    label={fields.rememberMe.label}
                  />

                  <MaterialLink
                    style={{ marginBottom: '8px' }}
                    component={Link}
                    to="/auth/forgot-password"
                  >
                    {i18n('auth.forgotPassword')}
                  </MaterialLink>
                </Box>

                <Button
                  style={{ marginTop: '8px' }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                  disabled={this.props.loading}
                >
                  {i18n('auth.signin')}
                </Button>

                <SocialButtons>
                  <Tooltip title="Facebook">
                    <img
                      src="/images/facebook.svg"
                      alt="Facebook"
                      onClick={() =>
                        this.doSigninWithSocial(
                          'facebook',
                          form.values.rememberMe,
                        )
                      }
                    />
                  </Tooltip>

                  <Tooltip title="Google">
                    <img
                      src="/images/google.svg"
                      alt="Google"
                      onClick={() =>
                        this.doSigninWithSocial(
                          'google',
                          form.values.rememberMe,
                        )
                      }
                    />
                  </Tooltip>

                  <Tooltip title="Twitter">
                    <img
                      src="/images/twitter.svg"
                      alt="Twitter"
                      onClick={() =>
                        this.doSigninWithSocial(
                          'twitter',
                          form.values.rememberMe,
                        )
                      }
                    />
                  </Tooltip>
                </SocialButtons>

                <OtherActions>
                  <MaterialLink
                    component={Link}
                    to="/auth/signup"
                  >
                    {i18n('auth.createAnAccount')}
                  </MaterialLink>
                </OtherActions>

                <I18nFlags style={{ marginTop: '24px' }} />
              </form>
            )}
          />
        </Content>
      </SigninPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SigninPage);
