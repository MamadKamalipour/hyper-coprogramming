import * as yup from 'yup';

const phoneRegExp = /^09[0-9][0-9]-?[0-9]{3}-?[0-9]{4}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Basic email regex, you can adjust this as needed

export const loginFormValidation = yup.object({
  input: yup
    .string()
    .test('phoneOrEmail', 'Invalid input', (value: any) => {
      return phoneRegExp.test(value) || emailRegex.test(value);
    })
    .required('Input is required'),
});
