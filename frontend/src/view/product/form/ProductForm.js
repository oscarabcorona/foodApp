import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/product/productModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import CategoryAutocompleteFormItem from 'view/category/autocomplete/CategoryAutocompleteFormItem';

const { fields } = model;

class ProductForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.category,
    fields.name,
    fields.price,
    fields.photo,
    fields.stock,
    fields.status,
    fields.productionCost,
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

                <CategoryAutocompleteFormItem
                  name={fields.category.name}
                  label={fields.category.label}
                  required={fields.category.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputFormItem
                  name={fields.name.name}
                  label={fields.name.label}
                  required={fields.name.required}
                />
                <InputFormItem
                  name={fields.price.name}
                  label={fields.price.label}
                  required={fields.price.required}
                />
                <ImagesFormItem
                  name={fields.photo.name}
                  label={fields.photo.label}
                  required={fields.photo.required}
                  path={fields.photo.path}
                  schema={{
                    size: fields.photo.size,
                  }}
                  max={fields.photo.max}
                />
                <InputNumberFormItem
                  name={fields.stock.name}
                  label={fields.stock.label}
                  required={
                    fields.stock.required
                  }
                />
                <SelectFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  options={fields.status.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.status.required}
                />
                <InputNumberFormItem
                  name={fields.productionCost.name}
                  label={fields.productionCost.label}
                  required={
                    fields.productionCost.required
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

export default ProductForm;
