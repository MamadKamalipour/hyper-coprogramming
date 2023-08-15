import { Button } from '@components/Shared/Button/Button';
import { Input } from '@components/Shared/Input/Input';
import { Toastify } from '@components/Shared/Toastify/Toastify';
import { useFormik } from 'formik';
import { useState } from 'react';
import { loginFormValidation } from 'src/validations/loginFormValidation';
import { OTPForm } from '../OTPForm/OTPForm';
import {
  InputLableStyle,
  InputWrapperStyle,
  LoginContainerStyle,
  LoginStyle,
  LoginWrapperStyle,
  OtpContainer,
  PageTitleStyle,
  WellcomeStyle,
} from './LoginStyle';
import { ILoginInitialValues } from './LoginType';

export const Login = () => {
  const [otpShow, setOtpShow] = useState(false);

  const initialValue: ILoginInitialValues = {
    input: '',
  };

  const handleSubmit = (value: string) => {
    Toastify({
      type: 'success',
      text: 'Code send to your Phone or Email',
      id: value,
    });
    setOtpShow(true);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginFormValidation,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });

  return (
    <LoginStyle>
      <LoginWrapperStyle onSubmit={formik.handleSubmit}>
        <LoginContainerStyle otpShow={otpShow}>
          <PageTitleStyle>Login</PageTitleStyle>
          <InputWrapperStyle>
            <WellcomeStyle>Hi</WellcomeStyle>
            <InputLableStyle htmlFor="input">
              Please enter your Phone or Email
            </InputLableStyle>
            <Input
              value={formik.values.input}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              type="text"
              id="input"
              name="input"
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  input: e.target.value,
                });
              }}
              onFocus={() =>
                formik.setTouched({
                  input: true,
                })
              }
              error={
                formik.errors.input && formik.touched.input
                  ? (formik.errors.input as string)
                  : ''
              }
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.input ? 'border-b-2 border-red-600' : ''
              } `}
            />
          </InputWrapperStyle>
          <Button ButtonText="Send" ButtonType="submit" />
        </LoginContainerStyle>
      </LoginWrapperStyle>
      <OtpContainer otpShow={otpShow}>
        <OTPForm />
      </OtpContainer>
      <span
        onClick={() => setOtpShow(!otpShow)}
        className="bg-red-600 z-50 font-semibold p-1 w-20 text-center absolute bottom-2 text-white rounded cursor-pointer hover:bg-red-950"
      >
        otp
      </span>
    </LoginStyle>
  );
};
