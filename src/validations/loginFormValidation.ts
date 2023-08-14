import * as yup from 'yup';

const phoneRegExp = /^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/;

export const loginFormValidation = yup.object({
  phone: yup
    .string()
    .matches(phoneRegExp, 'Number incorrect !')
    .required('Number required')
    .min(11, 'Number incorrect')
    .max(11, 'Number incorrect'),

  email: yup.string().email('Email incorrect !').required('Email required'),
});
