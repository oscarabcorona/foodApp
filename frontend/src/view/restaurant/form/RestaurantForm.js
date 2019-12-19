import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/restaurant/restaurantModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import CategoryAutocompleteFormItem from 'view/category/autocomplete/CategoryAutocompleteFormItem';

const { fields } = model;

class RestaurantForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.name,
    fields.employee,
    fields.products,
    fields.country,
    fields.city,
    fields.phoneNumber,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing, modal } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                  autoFocus
                />
                <UserAutocompleteFormItem
                  name={fields.employee.name}
                  label={fields.employee.label}
                  required={fields.employee.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <CategoryAutocompleteFormItem
                  name={fields.products.name}
                  label={fields.products.label}
                  required={fields.products.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <InputFormItem
                  name={fields.country.name}
                  label={fields.country.label}
                  required={fields.country.required}
                />
                <InputFormItem
                  name={fields.city.name}
                  label={fields.city.label}
                  required={fields.city.required}
                />
                <InputNumberFormItem
                  name={fields.phoneNumber.name}
                  label={fields.phoneNumber.label}
                  required={
                    fields.phoneNumber.required
                  }
                />

                <FormButtons
                  style={{
                    flexDirection: modal
                      ? 'row-reverse'
                      : undefined,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                    startIcon={<SaveIcon />}
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    type="button"
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      type="button"
                      startIcon={<CloseIcon />}
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </FormButtons>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default RestaurantForm;
