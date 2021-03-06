import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { nameProps, dateProps, statusProps } from '~utils/wrappedLabels';
import { validate } from '~utils/validations';

const RegisterForm = props => {
  return (
    <form 
      autoComplete="off"
      onSubmit={props.handleSubmit(data => props.onSubmit(data))}
    >
      <fieldset className='register-fieldset'>
        <Field {...nameProps} />
        <Field {...dateProps} />
        <Field {...statusProps} />
      </fieldset>
      <button className='button is-info' type='submit'>
        Guardar
      </button>
    </form>
  );
};

export default reduxForm({ form: 'Register', validate })(RegisterForm);
